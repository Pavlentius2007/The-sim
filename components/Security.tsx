'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Shield, Lock, Eye, CheckCircle } from 'lucide-react'

export default function Security() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const securityFeatures = [
    {
      icon: Shield,
      title: 'API Binance',
      description: 'Работаем напрямую с крупнейшей биржей криптовалют без посредников',
      details: 'Прямая интеграция с Binance API обеспечивает максимальную скорость и надёжность операций'
    },
    {
      icon: Lock,
      title: 'Без хранения средств',
      description: 'Ваши средства остаются на вашем аккаунте Binance',
      details: 'Мы не имеем доступа к вашим средствам, только к торговым операциям'
    },
    {
      icon: Eye,
      title: 'Прозрачность',
      description: 'Инвестор видит все операции в реальном времени',
      details: 'Полная видимость всех торговых операций и изменений в портфеле'
    },
    {
      icon: CheckCircle,
      title: 'Автоматическая защита',
      description: 'Диверсификация снижает риски потери капитала',
      details: 'Распределение по 30+ активам минимизирует влияние волатильности отдельных монет'
    }
  ]

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
            <span className="gradient-text">Надёжность</span> превыше всего
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Мы обеспечиваем максимальную безопасность ваших инвестиций через проверенные технологии и прозрачные процессы
          </p>
        </motion.div>

        {/* Security Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="glass rounded-2xl p-8 hover-lift group"
            >
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {feature.details}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Security Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16"
        >
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text mb-2">100%</div>
            <div className="text-gray-400">Безопасность средств</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text mb-2">24/7</div>
            <div className="text-gray-400">Мониторинг</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text mb-2">0</div>
            <div className="text-gray-400">Случаев взлома</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text mb-2">SSL</div>
            <div className="text-gray-400">Шифрование</div>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="glass rounded-2xl p-8 max-w-4xl mx-auto"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Почему нам доверяют
            </h3>
            <p className="text-gray-300">
              Наша платформа построена на принципах максимальной прозрачности и безопасности
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary-500" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">
                Проверенная технология
              </h4>
              <p className="text-gray-400 text-sm">
                Используем только проверенные и надёжные технологии для работы с криптовалютами
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-primary-500" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">
                Полная прозрачность
              </h4>
              <p className="text-gray-400 text-sm">
                Все операции видны в реальном времени, никаких скрытых комиссий или действий
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-primary-500" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">
                Гарантия надёжности
              </h4>
              <p className="text-gray-400 text-sm">
                Ваши средства остаются под вашим контролем на аккаунте Binance
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 