'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Play, Youtube } from 'lucide-react'
import { useState } from 'react'

export default function Video() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [showVideo, setShowVideo] = useState(false)

  return (
    <section className="py-20 bg-dark-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 to-dark-800"></div>
      <div className="absolute top-0 left-0 w-full h-full opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Видеообзор <span className="gradient-text">The SIM</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Узнайте больше о том, как работает наша платформа и как она может помочь вам в инвестировании
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Video Thumbnail */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden neon-border">
              <div className="aspect-video bg-gradient-to-br from-dark-700 to-dark-600 relative group cursor-pointer" onClick={() => setShowVideo(true)}>
                {/* Thumbnail Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-accent-purple/20"></div>
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30"
                  >
                    <Play className="w-8 h-8 text-white ml-1" />
                  </motion.div>
                </div>
                
                {/* Video Info */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center space-x-2 text-white/80 text-sm">
                    <Youtube className="w-5 h-5" />
                    <span>The SIM - Полный обзор платформы</span>
                  </div>
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
              </div>
            </div>
            
            {/* Video Stats */}
            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">15:42</div>
                <div className="text-sm text-gray-400">Длительность</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">HD</div>
                <div className="text-sm text-gray-400">Качество</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">RU</div>
                <div className="text-sm text-gray-400">Язык</div>
              </div>
            </div>
          </div>

          {/* Video Description */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">
              Что вы узнаете из видео
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Принципы работы платформы
                  </h4>
                  <p className="text-gray-400">
                    Как The SIM зарабатывает на волатильности рынка и защищает ваш капитал
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Демонстрация интерфейса
                  </h4>
                  <p className="text-gray-400">
                    Подробный обзор личного кабинета и всех доступных функций
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Стратегии инвестирования
                  </h4>
                  <p className="text-gray-400">
                    Как настроить параметры для оптимальной работы с вашим капиталом
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Ответы на вопросы
                  </h4>
                  <p className="text-gray-400">
                    Часто задаваемые вопросы и разбор типичных сценариев использования
                  </p>
                </div>
              </div>
            </div>
            
            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-primary text-white px-8 py-3 rounded-full font-semibold hover-lift flex items-center gap-3"
              onClick={() => setShowVideo(true)}
            >
              <Play className="w-5 h-5" />
              Смотреть видео
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setShowVideo(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/gHkWXzRLNno?autoplay=1"
              title="The SIM - Полный обзор платформы"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            />
            <button
              onClick={() => setShowVideo(false)}
              className="absolute -top-4 -right-4 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
            >
              ×
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
} 