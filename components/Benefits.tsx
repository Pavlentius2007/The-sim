'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Shield, 
  TrendingUp, 
  Brain, 
  BarChart3, 
  Target, 
  Network, 
  RefreshCw, 
  Droplets 
} from 'lucide-react'

export default function Benefits() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const benefits = [
    {
      icon: Shield,
      title: 'Хеджирование',
      description: 'Автоматическая защита капитала от резких колебаний рынка',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: TrendingUp,
      title: 'Умные покупки',
      description: 'Распределение депозита по сетке для оптимального входа в позиции',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Brain,
      title: 'Умные продажи',
      description: 'ИИ определяет оптимальную наценку для каждой позиции',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: BarChart3,
      title: 'Рыночная аналитика',
      description: 'Ежедневный мониторинг и анализ рыночных трендов',
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: Target,
      title: 'Ликвидация',
      description: 'Контроль и управление активами для минимизации рисков',
      color: 'from-indigo-500 to-purple-600'
    },
    {
      icon: Network,
      title: 'Диверсификация',
      description: 'Распределение по 30+ активам для снижения рисков',
      color: 'from-teal-500 to-green-600'
    },
    {
      icon: RefreshCw,
      title: 'Реинвестирование',
      description: 'Автоматическое инвестирование прибыли для роста капитала',
      color: 'from-yellow-500 to-orange-600'
    },
    {
      icon: Droplets,
      title: 'Контроль ликвидности',
      description: 'Обеспечение стабильности через управление ликвидностью',
      color: 'from-cyan-500 to-blue-600'
    }
  ]

  return (
    <section className="py-20 bg-dark-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-800 to-dark-900"></div>
      <div className="absolute top-0 left-0 w-full h-full opacity-50">
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
            Почему <span className="gradient-text">The SIM</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            8 ключевых преимуществ, которые делают нашу платформу уникальной
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="group"
            >
              <div className="glass rounded-2xl p-6 h-full hover-lift relative overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                {/* Icon */}
                <div className={`relative z-10 w-14 h-14 bg-gradient-to-br ${benefit.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-400 group-hover:to-accent-purple transition-all duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
                
                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-primary-500/30 transition-colors duration-300"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center mt-16"
        >
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Готовы начать инвестировать с The SIM?
            </h3>
            <p className="text-gray-300 mb-6">
              Присоединяйтесь к тысячам инвесторов, которые уже доверяют нашей платформе
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