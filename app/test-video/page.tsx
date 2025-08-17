'use client'

export default function TestVideo() {
  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <h1 className="text-white text-2xl mb-8">Тест YouTube</h1>
      
      {/* Простейший iframe */}
      <div className="w-full h-96 mb-8">
        <iframe
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          className="w-full h-full"
          frameBorder="0"
          allowFullScreen
          title="Test"
        />
      </div>

      {/* Ваше видео */}
      <div className="w-full h-96">
        <iframe
          src="https://www.youtube.com/embed/i6aw3SWLuas"
          className="w-full h-full"
          frameBorder="0"
          allowFullScreen
          title="Your Video"
        />
      </div>
    </div>
  )
}
