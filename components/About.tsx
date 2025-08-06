'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Shield, TrendingUp, Zap, BarChart3 } from 'lucide-react'

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const features = [
    {
      icon: Shield,
      title: 'Работает на любой стадии рынка',
      description: 'Рост, падение или флет — наша система адаптируется к любым условиям'
    },
    {
      icon: TrendingUp,
      title: 'Использует только проверенные активы',
      description: 'Тщательно отобранные криптовалюты с высокой ликвидностью'
    },
    {
      icon: Zap,
      title: 'Следует за рынком',
      description: 'Не пытаемся «угадать» направление, работаем с текущими трендами'
    },
    {
      icon: BarChart3,
      title: 'Работает через API с Binance',
      description: 'Без хранения средств на собственных счетах, прямая интеграция'
    }
  ]

  return (
    <section id="about" className="py-20 bg-dark-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 to-dark-800"></div>
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
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
            <span className="gradient-text">The SIM</span> — сервис для работы с цифровыми активами
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Который зарабатывает на волатильности рынка, а не на прогнозах.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="glass rounded-2xl p-6 hover-lift group"
            >
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Screenshot Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Screenshot */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden neon-border p-2">
              <div className="bg-gradient-to-br from-dark-800 to-dark-700 rounded-xl p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-xs text-gray-400">The SIM Dashboard</div>
                </div>
                
                {/* Mock Dashboard Content */}
                <div className="space-y-4">
                  <div className="bg-dark-600 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-300">Портфель</span>
                      <span className="text-sm text-green-400">+12.5%</span>
                    </div>
                    <div className="text-2xl font-bold text-white">$45,230.50</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-dark-600 rounded-lg p-3">
                      <div className="text-xs text-gray-400 mb-1">Активы</div>
                      <div className="text-lg font-semibold text-white">32</div>
                    </div>
                    <div className="bg-dark-600 rounded-lg p-3">
                      <div className="text-xs text-gray-400 mb-1">Доходность</div>
                      <div className="text-lg font-semibold text-green-400">+8.2%</div>
                    </div>
                  </div>
                  
                  <div className="bg-dark-600 rounded-lg p-3">
                    <div className="text-xs text-gray-400 mb-2">Топ активы</div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-white">BTC</span>
                        <span className="text-sm text-green-400">+15.3%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-white">ETH</span>
                        <span className="text-sm text-green-400">+9.7%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-white">ADA</span>
                        <span className="text-sm text-red-400">-2.1%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Tooltip */}
              <div className="absolute -top-4 -right-4 bg-primary-600 text-white text-xs px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                Мониторинг портфеля в реальном времени
              </div>
            </div>
          </div>

          {/* Features List */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">
              Полный контроль над вашими инвестициями
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Мониторинг портфеля в реальном времени
                  </h4>
                  <p className="text-gray-400">
                    Отслеживайте все изменения в вашем портфеле с задержкой менее секунды
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Доходность по активам
                  </h4>
                  <p className="text-gray-400">
                    Детальная аналитика прибыли и убытков по каждому активу
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Диверсификация более чем на 30 активов
                  </h4>
                  <p className="text-gray-400">
                    Распределение рисков по широкому спектру криптовалют
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 