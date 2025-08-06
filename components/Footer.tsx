'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MessageCircle, Mail, Youtube, Linkedin } from 'lucide-react'

export default function Footer() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-dark-800"></div>
      <div className="absolute top-0 left-0 w-full h-full opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/3 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="py-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h3 className="text-3xl font-bold mb-4">
                  <span className="gradient-text">The SIM</span>
                </h3>
                <p className="text-gray-300 leading-relaxed max-w-md">
                  Ваш надёжный партнёр в управлении цифровыми активами. 
                  Инвестируйте с защитой капитала и умными стратегиями.
                </p>
              </div>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                <motion.a
                  href="https://t.me/Sergey_Loye"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-primary-500/20 rounded-full flex items-center justify-center text-primary-400 hover:text-primary-300 hover:bg-primary-500/30 transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                </motion.a>
                
                <motion.a
                  href="https://www.youtube.com/watch?v=gHkWXzRLNno"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-primary-500/20 rounded-full flex items-center justify-center text-primary-400 hover:text-primary-300 hover:bg-primary-500/30 transition-all"
                >
                  <Youtube className="w-5 h-5" />
                </motion.a>
                
                <motion.a
                  href="https://linkedin.com/company/the-sim"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-primary-500/20 rounded-full flex items-center justify-center text-primary-400 hover:text-primary-300 hover:bg-primary-500/30 transition-all"
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Продукт</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                    О платформе
                  </a>
                </li>
                <li>
                  <a href="#benefits" className="text-gray-400 hover:text-white transition-colors">
                    Преимущества
                  </a>
                </li>
                <li>
                  <a href="#security" className="text-gray-400 hover:text-white transition-colors">
                    Безопасность
                  </a>
                </li>
                <li>
                  <a href="#video" className="text-gray-400 hover:text-white transition-colors">
                    Видеообзор
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Контакты</h4>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <MessageCircle className="w-5 h-5 text-primary-400" />
                  <div>
                    <div className="text-white font-medium">Telegram</div>
                    <a 
                      href="https://t.me/Sergey_Loye" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-primary-400 transition-colors"
                    >
                      @Sergey_Loye
                    </a>
                  </div>
                </li>
                <li className="flex items-center space-x-3">
                  <MessageCircle className="w-5 h-5 text-primary-400" />
                  <div>
                    <div className="text-white font-medium">Telegram</div>
                    <a 
                      href="https://t.me/RushanSabirov" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-primary-400 transition-colors"
                    >
                      @RushanSabirov
                    </a>
                  </div>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary-400" />
                  <div>
                    <div className="text-white font-medium">Email</div>
                    <a 
                      href="mailto:info@thesim.com" 
                      className="text-gray-400 hover:text-primary-400 transition-colors"
                    >
                      info@thesim.com
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                © {currentYear} The SIM. Все права защищены.
              </div>
              
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Политика конфиденциальности
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Условия использования
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Правовая информация
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white shadow-lg hover-lift z-40"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>
    </footer>
  )
} 