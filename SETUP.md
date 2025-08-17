# 🚀 CosmicLanding - Руководство по настройке

> **Пошаговая инструкция по настройке whitelabel решения**

## 📋 Предварительные требования

- Node.js 18+ 
- npm или yarn
- Git
- Текстовый редактор (VS Code, WebStorm)

## 🔧 Установка и настройка

### 1. Клонирование проекта
```bash
git clone <your-repository-url>
cd cosmiclanding
```

### 2. Установка зависимостей
```bash
npm install
```

### 3. Настройка переменных окружения
Создайте файл `.env` в корне проекта:

```env
# 🔐 СЕКРЕТНЫЕ КЛЮЧИ ДЛЯ БЕЗОПАСНОСТИ
# ⚠️ НИКОГДА не коммитьте этот файл в git!

# JWT секретный ключ (минимум 32 символа)
JWT_SECRET=your-super-secure-jwt-secret-key-here-32-chars

# Секретный ключ для шифрования (минимум 32 символа)
ENCRYPTION_KEY=your-32-character-encryption-key-here

# Секретный ключ для cookies (минимум 32 символа)
COOKIE_SECRET=your-32-character-cookie-secret-here

# Время жизни JWT токена (в секундах)
JWT_EXPIRES_IN=3600

# Время жизни refresh токена (в секундах)
REFRESH_TOKEN_EXPIRES_IN=2592000

# Максимальное количество попыток входа
MAX_LOGIN_ATTEMPTS=5

# Время блокировки после неудачных попыток (в минутах)
LOGIN_BLOCK_DURATION=15

# Rate limiting - максимальное количество запросов
RATE_LIMIT_MAX_REQUESTS=50

# Rate limiting - временное окно (в секундах)
RATE_LIMIT_WINDOW_MS=900000

# Разрешенные домены для CORS
ALLOWED_ORIGINS=https://yourdomain.com,https://www.yourdomain.com

# Режим работы
NODE_ENV=production

# CSRF секретный ключ
CSRF_SECRET=your-csrf-secret-key-here-32-chars

# Порт сервера
PORT=3000
```

### 4. Генерация секретных ключей
Для генерации безопасных ключей используйте:

```bash
# JWT_SECRET (64 символа)
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"

# ENCRYPTION_KEY (32 символа)
node -e "console.log(require('crypto').randomBytes(16).toString('hex'))"

# COOKIE_SECRET (32 символа)
node -e "console.log(require('crypto').randomBytes(16).toString('hex'))"

# CSRF_SECRET (64 символа)
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

## 🎨 Кастомизация дизайна

### 1. Цветовая схема
Отредактируйте `tailwind.config.js`:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#6366f1', // Основной цвет
          600: '#4f46e5',
          700: '#4338ca',
        },
        dark: {
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        }
      }
    }
  }
}
```

### 2. Логотип и брендинг
Замените файлы в папке `public/`:
- `logo.svg` - ваш логотип
- `favicon.ico` - иконка сайта
- `og-image.jpg` - изображение для соцсетей

### 3. Шрифты
Настройте шрифты в `app/globals.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Your+Font:wght@400;500;600;700&display=swap');

body {
  font-family: 'Your Font', sans-serif;
}
```

## 🌍 Локализация

### 1. Добавление нового языка
Создайте файл `messages/zh.json`:

```json
{
  "hero": {
    "title": "你的标题",
    "subtitle": "你的副标题"
  },
  "contact": {
    "title": "联系我们",
    "form": {
      "name": "姓名",
      "email": "邮箱"
    }
  }
}
```

### 2. Настройка языков
Отредактируйте `app/[locale]/layout.tsx`:

```typescript
export const locales = ['ru', 'en', 'zh', 'th', 'de'] // Добавьте новые языки
```

## 🔐 Настройка админ-панели

### 1. Создание первого админа
При первом запуске создайте файл `data/users.json`:

```json
[
  {
    "id": "admin",
    "username": "admin",
    "passwordHash": "your-hashed-password",
    "role": "admin",
    "createdAt": "2024-01-01T00:00:00.000Z"
  }
]
```

### 2. Генерация хеша пароля
```bash
node -e "
const crypto = require('crypto');
const password = 'YourSecurePassword123!';
const hash = crypto.createHash('sha256').update(password).digest('hex');
console.log('Password hash:', hash);
"
```

### 3. Доступ к админ-панели
- **URL**: `http://localhost:3000/admin/login`
- **Логин**: `admin`
- **Пароль**: ваш установленный пароль

## 🚀 Деплой

### 1. Сборка проекта
```bash
npm run build
```

### 2. Тестирование
```bash
npm start
```

### 3. Деплой на Vercel
```bash
npm install -g vercel
vercel
```

### 4. Деплой на другие платформы
- **Netlify**: подключите Git репозиторий
- **AWS Amplify**: настройте CI/CD
- **Docker**: используйте Dockerfile из README

## 🔍 Проверка работоспособности

### 1. Основной функционал
- [ ] Главная страница загружается
- [ ] Мультиязычность работает
- [ ] Формы отправляются
- [ ] Анимации работают

### 2. Админ-панель
- [ ] Вход в админку
- [ ] Управление контентом
- [ ] Загрузка видео
- [ ] Управление лидами

### 3. Безопасность
- [ ] HTTPS работает
- [ ] CORS настроен
- [ ] Rate limiting активен
- [ ] JWT токены работают

## 🐛 Решение проблем

### Ошибка "Module not found"
```bash
rm -rf node_modules package-lock.json
npm install
```

### Ошибка сборки
```bash
npm run lint
npm run build
```

### Проблемы с аутентификацией
Проверьте:
- Правильность JWT_SECRET
- Время жизни токенов
- CORS настройки

## 📞 Поддержка

При возникновении проблем:
1. Проверьте логи в консоли
2. Убедитесь в правильности переменных окружения
3. Проверьте версии Node.js и npm
4. Обратитесь к разработчикам

---

**CosmicLanding** - создавайте впечатляющие лэндинги! 🚀✨
