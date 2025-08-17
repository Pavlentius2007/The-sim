# 🚀 CosmicLanding - Универсальный Лэндинг с Космическим Дизайном

> **Профессиональное whitelabel решение для компаний и стартапов**

## ✨ Особенности

- 🌌 **Космический дизайн** - современный UI с анимациями
- 🌍 **Мультиязычность** - поддержка RU, EN, ZH, TH
- 📱 **Адаптивность** - идеально на всех устройствах
- 🔐 **Безопасность** - JWT, CSRF, Rate Limiting
- 📊 **Админ-панель** - управление контентом и лидами
- 🎥 **Видео-контент** - поддержка YouTube и локальных файлов
- 📧 **Формы захвата** - интеграция с Telegram
- 🚀 **Next.js 14** - современный стек технологий

## 🛠️ Технологии

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, Framer Motion
- **Backend**: Next.js API Routes
- **Database**: JSON файлы (легко заменить на БД)
- **Authentication**: JWT, CSRF Protection
- **Security**: Rate Limiting, Security Headers

## 🚀 Быстрый старт

### 1. Установка зависимостей
```bash
npm install
```

### 2. Настройка переменных окружения
Скопируйте `.env.example` в `.env` и настройте:
```bash
cp .env.example .env
```

### 3. Запуск в режиме разработки
```bash
npm run dev
```

### 4. Сборка для продакшена
```bash
npm run build
npm start
```

## ⚙️ Конфигурация

### Переменные окружения
```env
# JWT секретный ключ (минимум 32 символа)
JWT_SECRET=your-super-secure-jwt-secret-key-here

# Секретный ключ для шифрования
ENCRYPTION_KEY=your-32-character-encryption-key

# Секретный ключ для cookies
COOKIE_SECRET=your-32-character-cookie-secret

# Время жизни JWT токена (в секундах)
JWT_EXPIRES_IN=3600

# Разрешенные домены для CORS
ALLOWED_ORIGINS=https://yourdomain.com,https://www.yourdomain.com

# Режим работы
NODE_ENV=production
```

## 🎨 Кастомизация

### Цветовая схема
Основные цвета настраиваются в `tailwind.config.js`:
```js
colors: {
  primary: {
    500: '#6366f1', // Основной цвет
    600: '#4f46e5',
  },
  dark: {
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
  }
}
```

### Локализация
Добавьте новые языки в `messages/` папку:
```json
{
  "hero": {
    "title": "Your Title",
    "subtitle": "Your Subtitle"
  }
}
```

## 📁 Структура проекта

```
├── app/                    # Next.js App Router
│   ├── [locale]/          # Локализованные страницы
│   ├── admin/             # Админ-панель
│   └── api/               # API роуты
├── components/             # React компоненты
├── lib/                    # Утилиты и библиотеки
├── messages/               # Локализация
├── types/                  # TypeScript типы
└── public/                 # Статические файлы
```

## 🔐 Админ-панель

### Доступ
- **URL**: `/admin/login`
- **Логин**: `admin`
- **Пароль**: Устанавливается при первом запуске

### Возможности
- 📊 Управление контентом
- 👥 Управление лидами
- 🎥 Загрузка видео
- 🌍 Переводы
- ⚙️ Настройки системы

## 🚀 Деплой

### Vercel (рекомендуется)
```bash
npm install -g vercel
vercel
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 📄 Лицензия

**Коммерческая лицензия** - для использования в коммерческих проектах.

## 🤝 Поддержка

Для получения поддержки и лицензии обращайтесь к разработчикам.

---

**CosmicLanding** - создавайте впечатляющие лэндинги с космическим дизайном! 🚀✨ 