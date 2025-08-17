'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Play, Pause, RotateCcw } from 'lucide-react'

interface DashboardVideoProps {
  videoSrc: string
  fallbackImage?: string
}

export default function DashboardVideo({ videoSrc, fallbackImage }: DashboardVideoProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [showControls, setShowControls] = useState(false)
  const [hasError, setHasError] = useState(false)

  // Принудительно обновляем видео при изменении src
  useEffect(() => {
    if (videoSrc) {
      setHasError(false)
      const video = document.getElementById('dashboard-video') as HTMLVideoElement
      if (video) {
        video.load()
        video.style.display = 'block'
        video.style.visibility = 'visible'
        video.style.opacity = '1'
      }
    }
  }, [videoSrc])

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const handleRestart = () => {
    const video = document.getElementById('dashboard-video') as HTMLVideoElement
    if (video) {
      video.currentTime = 0
      video.play()
      setIsPlaying(true)
    }
  }

  return (
    <div 
      className="dashboard-video-container relative w-full h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden bg-dark-700"
      style={{ minHeight: '256px' }}
    >
      {/* Video Element */}
      <video
        id="dashboard-video"
        className="w-full h-full object-cover min-h-0 block"
        style={{ display: 'block', visibility: 'visible' }}
        loop
        muted
        playsInline
        preload="metadata"
        poster={fallbackImage}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(false)}
        onLoadedMetadata={() => {
          // console.log('Video metadata loaded')
          setHasError(false)
        }}
        onError={(e) => {
          console.error('Video error:', e)
          setHasError(true)
        }}
      >
        <source src={videoSrc} type="video/mp4" />
        <source src={videoSrc} type="video/webm" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Controls */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-800/50 to-transparent">
        {/* Top Info */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-white text-sm font-medium">Live Demo</span>
          </div>
          <div className="text-white text-xs bg-dark-800/80 px-2 py-1 rounded">
            The SIM Dashboard
          </div>
        </div>

        {/* Center Play Button */}
        {!isPlaying && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <button
              onClick={handlePlayPause}
              className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
            >
              <Play className="w-8 h-8 text-white ml-1" />
            </button>
          </motion.div>
        )}

        {/* Bottom Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={showControls ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          className="absolute bottom-4 left-4 right-4 flex items-center justify-between"
        >
          <div className="flex items-center space-x-2">
            <button
              onClick={handlePlayPause}
              className="w-10 h-10 bg-dark-800/80 rounded-full flex items-center justify-center hover:bg-dark-700/80 transition-colors"
            >
              {isPlaying ? (
                <Pause className="w-4 h-4 text-white" />
              ) : (
                <Play className="w-4 h-4 text-white ml-0.5" />
              )}
            </button>
            <button
              onClick={handleRestart}
              className="w-10 h-10 bg-dark-800/80 rounded-full flex items-center justify-center hover:bg-dark-700/80 transition-colors"
            >
              <RotateCcw className="w-4 h-4 text-white" />
            </button>
          </div>
          
          <div className="text-white text-xs bg-dark-800/80 px-3 py-2 rounded-full">
            Демонстрация интерфейса
          </div>
        </motion.div>
      </div>

      {/* Loading State */}
      {!videoSrc && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-400 text-sm">Видео дашборда загружается...</p>
          </div>
        </div>
      )}

      {/* Video Error State */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-red-900/20">
          <div className="text-center">
            <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-red-400 text-2xl">⚠️</span>
            </div>
            <p className="text-red-400 text-sm mb-2">Ошибка загрузки видео</p>
            <p className="text-red-500 text-xs">Проверьте путь к файлу</p>
          </div>
        </div>
      )}
    </div>
  )
}
