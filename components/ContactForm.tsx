'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'

export default function ContactForm() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    telegram: ''
  })

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      // Здесь будет отправка данных на backend
      // Пока что симулируем успешную отправку
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Отправка в Telegram (заглушка)
      const telegramMessage = `
🔔 Новая заявка с сайта The SIM

👤 Имя: ${formData.name}
📧 Email: ${formData.email}
📱 Телефон: ${formData.phone}
💬 Telegram: ${formData.telegram}

⏰ Время: ${new Date().toLocaleString('ru-RU')}
      `.trim()

      // В реальном проекте здесь будет вызов API для отправки в Telegram
      console.log('Telegram message:', telegramMessage)
      
      setStatus('success')
      setMessage('Спасибо! Мы свяжемся с вами в ближайшее время.')
      
      // Очистка формы
      setFormData({
        name: '',
        email: '',
        phone: '',
        telegram: ''
      })
      
    } catch (error) {
      setStatus('error')
      setMessage('Произошла ошибка. Попробуйте еще раз.')
    }
  }

  return (
    <section className="py-20 bg-dark-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-800 to-dark-900"></div>
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/3 to-transparent"></div>
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
            Получите <span className="gradient-text">презентацию</span> и консультацию
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Оставьте заявку, и мы свяжемся с вами для подробной консультации по работе с The SIM
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="glass rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Имя *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-dark-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="Введите ваше имя"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-dark-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="your@email.com"
                />
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  Телефон
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-dark-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="+7 (999) 123-45-67"
                />
              </div>

              {/* Telegram Field */}
              <div>
                <label htmlFor="telegram" className="block text-sm font-medium text-gray-300 mb-2">
                  Telegram
                </label>
                <input
                  type="text"
                  id="telegram"
                  name="telegram"
                  value={formData.telegram}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-dark-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="@username"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={status === 'loading'}
                whileHover={{ scale: status !== 'loading' ? 1.02 : 1 }}
                whileTap={{ scale: status !== 'loading' ? 0.98 : 1 }}
                className={`w-full py-4 px-8 rounded-lg font-semibold text-lg transition-all ${
                  status === 'loading'
                    ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                    : 'bg-gradient-primary text-white hover-lift'
                }`}
              >
                {status === 'loading' ? (
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Отправка...
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-3">
                    <Send className="w-5 h-5" />
                    Получить
                  </div>
                )}
              </motion.button>
            </form>

            {/* Status Message */}
            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center gap-3"
              >
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-green-400">{message}</span>
              </motion.div>
            )}

            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center gap-3"
              >
                <AlertCircle className="w-5 h-5 text-red-400" />
                <span className="text-red-400">{message}</span>
              </motion.div>
            )}

            {/* Privacy Notice */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-400">
                Отправляя форму, вы соглашаетесь с{' '}
                <a href="#" className="text-primary-400 hover:text-primary-300 transition-colors">
                  политикой конфиденциальности
                </a>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Send className="w-6 h-6 text-primary-500" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">
                Быстрый ответ
              </h4>
              <p className="text-gray-400 text-sm">
                Мы свяжемся с вами в течение 15 минут
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-primary-500" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">
                Бесплатная консультация
              </h4>
              <p className="text-gray-400 text-sm">
                Получите подробную информацию о платформе
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Send className="w-6 h-6 text-primary-500" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">
                Презентация
              </h4>
              <p className="text-gray-400 text-sm">
                Получите подробную презентацию The SIM
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 