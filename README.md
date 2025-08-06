# The SIM - Landing Page

Премиальный одностраничный сайт для сервиса эффективной работы с цифровыми активами "The SIM".

## 🚀 Технологии

- **Next.js 14** - React фреймворк с SSR
- **TypeScript** - Типизированный JavaScript
- **Tailwind CSS** - Utility-first CSS фреймворк
- **Framer Motion** - Анимации и переходы
- **Lucide React** - Иконки
- **React Intersection Observer** - Анимации при скролле

## ✨ Особенности

- 🎨 Современный премиальный дизайн с тёмной палитрой
- 📱 Полностью адаптивный интерфейс
- ⚡ Оптимизированная производительность
- 🔍 SEO-оптимизация
- 🌐 Поддержка мультиязычности (RU/EN)
- 📊 Google Analytics интеграция
- 💬 Интеграция с Telegram Bot API
- 🎬 YouTube видео интеграция

## 🛠️ Установка и запуск

### Предварительные требования

- Node.js 18+ 
- npm или yarn

### Установка зависимостей

```bash
npm install
# или
yarn install
```

### Запуск в режиме разработки

```bash
npm run dev
# или
yarn dev
```

Откройте [http://localhost:3000](http://localhost:3000) в браузере.

### Сборка для продакшена

```bash
npm run build
# или
yarn build
```

### Запуск продакшен версии

```bash
npm start
# или
yarn start
```

## 📁 Структура проекта

```
├── app/
│   ├── globals.css          # Глобальные стили
│   ├── layout.tsx           # Корневой layout
│   └── page.tsx             # Главная страница
├── components/
│   ├── Hero.tsx             # Hero секция
│   ├── About.tsx            # О продукте
│   ├── Benefits.tsx         # Преимущества
│   ├── Video.tsx            # Видеообзор
│   ├── Security.tsx         # Безопасность
│   ├── Testimonials.tsx     # Отзывы
│   ├── ContactForm.tsx      # Форма контактов
│   └── Footer.tsx           # Подвал
├── public/                  # Статические файлы
├── tailwind.config.js       # Конфигурация Tailwind
├── next.config.js           # Конфигурация Next.js
└── package.json             # Зависимости
```

## 🎨 Дизайн система

### Цветовая палитра

- **Основной фон**: `#0A0F1F` (dark-900)
- **Акценты**: Градиент от `#4B6CB7` к `#182848`
- **Дополнительные**: `#8B5CF6` (purple), `#3B82F6` (blue)

### Шрифты

- **Основной**: Inter
- **Альтернативный**: Manrope

### Анимации

- Плавные переходы с Framer Motion
- Анимации при скролле
- Hover эффекты
- Микроэффекты

## 🔧 Конфигурация

### Google Analytics

Замените `GA_MEASUREMENT_ID` в `app/layout.tsx` на ваш ID:

```typescript
gtag('config', 'YOUR_GA_ID');
```

### Telegram Bot API

Для интеграции с Telegram Bot API добавьте в `ContactForm.tsx`:

```typescript
const sendToTelegram = async (message: string) => {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  
  const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId,
      text: message,
      parse_mode: 'HTML'
    })
  });
};
```

### Переменные окружения

Создайте файл `.env.local`:

```env
TELEGRAM_BOT_TOKEN=your_bot_token
TELEGRAM_CHAT_ID=your_chat_id
NEXT_PUBLIC_GA_ID=your_ga_id
```

## 📱 Адаптивность

Сайт полностью адаптивен и оптимизирован для:

- 📱 Мобильные устройства (320px+)
- 📱 Планшеты (768px+)
- 💻 Десктопы (1024px+)
- 🖥️ Большие экраны (1440px+)

## 🚀 Деплой

### Vercel (рекомендуется)

1. Подключите репозиторий к Vercel
2. Настройте переменные окружения
3. Деплой произойдёт автоматически

### Другие платформы

Сайт можно развернуть на любой платформе, поддерживающей Next.js:

- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Heroku

## 📄 Лицензия

MIT License

## 🤝 Поддержка

По вопросам и предложениям обращайтесь:

- Telegram: [@Sergey_Loye](https://t.me/Sergey_Loye)
- Email: info@thesim.com

---

**The SIM** - Ваш надёжный партнёр в управлении цифровыми активами 🚀 