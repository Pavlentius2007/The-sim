'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Star, Quote } from 'lucide-react'

export default function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const testimonials = [
    {
      name: 'Иван К.',
      role: 'Инвестор',
      avatar: '/api/placeholder/60/60',
      content: 'The SIM помог мне стабильно зарабатывать даже в падающем рынке. Система действительно работает как заявлено — защищает капитал и приносит доход.',
      rating: 5,
      highlight: 'стабильно зарабатывать'
    },
    {
      name: 'Мария Л.',
      role: 'Предприниматель',
      avatar: '/api/placeholder/60/60',
      content: 'Полностью доверяю системе — мой капитал под защитой. Прозрачность операций и возможность видеть все в реальном времени очень важны для меня.',
      rating: 5,
      highlight: 'капитал под защитой'
    },
    {
      name: 'Олег Т.',
      role: 'Трейдер',
      avatar: '/api/placeholder/60/60',
      content: 'Просто и эффективно. Поддержка всегда на связи, объясняют все доступно. Рекомендую всем, кто хочет инвестировать в криптовалюты.',
      rating: 5,
      highlight: 'просто и эффективно'
    }
  ]

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
            Отзывы наших <span className="gradient-text">клиентов</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Узнайте, что говорят инвесторы, которые уже используют The SIM для управления своими цифровыми активами
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="group"
            >
              <div className="glass rounded-2xl p-8 h-full hover-lift relative">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="w-8 h-8 text-primary-500" />
                </div>
                
                {/* Rating */}
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                {/* Content */}
                <div className="mb-6">
                  <p className="text-gray-300 leading-relaxed">
                    {testimonial.content.split(testimonial.highlight).map((part, i, arr) => (
                      <span key={i}>
                        {part}
                        {i < arr.length - 1 && (
                          <span className="text-primary-400 font-semibold">
                            {testimonial.highlight}
                          </span>
                        )}
                      </span>
                    ))}
                  </p>
                </div>
                
                {/* Author */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-semibold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16"
        >
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text mb-2">1000+</div>
            <div className="text-gray-400">Довольных клиентов</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text mb-2">4.9/5</div>
            <div className="text-gray-400">Средний рейтинг</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text mb-2">98%</div>
            <div className="text-gray-400">Положительных отзывов</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text mb-2">24/7</div>
            <div className="text-gray-400">Поддержка клиентов</div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Присоединяйтесь к успешным инвесторам
            </h3>
            <p className="text-gray-300 mb-6">
              Начните свой путь к финансовой свободе с The SIM уже сегодня
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-primary text-white px-8 py-3 rounded-full font-semibold hover-lift"
              onClick={() => window.open('https://t.me/Sergey_Loye', '_blank')}
            >
              Получить консультацию
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 