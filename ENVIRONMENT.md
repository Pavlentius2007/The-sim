# 🔐 CosmicLanding - Переменные окружения

> **Полное руководство по настройке переменных окружения**

## 📋 Обзор

Файл `.env` содержит все необходимые настройки для работы CosmicLanding. **НИКОГДА не коммитьте этот файл в Git!**

## 🔑 Обязательные переменные

### JWT_SECRET
**Описание**: Секретный ключ для подписи JWT токенов  
**Тип**: Строка  
**Минимум**: 32 символа  
**Рекомендуется**: 64 символа  
**Пример**: `JWT_SECRET=rSA4hfVLhhwa3u2dfgH8bwzbj7Q5SG9zGwnqeFLfFvYQZTYYdPnXu9cH9zqkLpks`

**Генерация**:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

### ENCRYPTION_KEY
**Описание**: Ключ для шифрования чувствительных данных  
**Тип**: Строка  
**Требуется**: ровно 32 символа  
**Пример**: `ENCRYPTION_KEY=hQEhGj93DC4cQrnfbvmgYWG2WMKDqj93`

**Генерация**:
```bash
node -e "console.log(require('crypto').randomBytes(16).toString('hex'))"
```

### COOKIE_SECRET
**Описание**: Секрет для подписи cookies  
**Тип**: Строка  
**Требуется**: ровно 32 символа  
**Пример**: `COOKIE_SECRET=KCTe6jLdwJs9ChaBZc8XMJLqF7v5D8uZ`

**Генерация**:
```bash
node -e "console.log(require('crypto').randomBytes(16).toString('hex'))"
```

### CSRF_SECRET
**Описание**: Секрет для CSRF защиты  
**Тип**: Строка  
**Минимум**: 32 символа  
**Рекомендуется**: 64 символа  
**Пример**: `CSRF_SECRET=HmbmcNZ8g8sfhZGC8e6Vs3ESsx9Eh8ZpNAqUvjHWkT9ErcKwGr6HMkamMpdzBE4G`

**Генерация**:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

## ⏰ Настройки времени

### JWT_EXPIRES_IN
**Описание**: Время жизни JWT токена в секундах  
**Тип**: Число  
**По умолчанию**: `3600` (1 час)  
**Рекомендуется**: `3600` для продакшена, `86400` для разработки  
**Пример**: `JWT_EXPIRES_IN=3600`

### REFRESH_TOKEN_EXPIRES_IN
**Описание**: Время жизни refresh токена в секундах  
**Тип**: Число  
**По умолчанию**: `2592000` (30 дней)  
**Пример**: `REFRESH_TOKEN_EXPIRES_IN=2592000`

## 🚫 Безопасность и ограничения

### MAX_LOGIN_ATTEMPTS
**Описание**: Максимальное количество неудачных попыток входа  
**Тип**: Число  
**По умолчанию**: `5`  
**Рекомендуется**: `3-5` для продакшена  
**Пример**: `MAX_LOGIN_ATTEMPTS=5`

### LOGIN_BLOCK_DURATION
**Описание**: Время блокировки после неудачных попыток в минутах  
**Тип**: Число  
**По умолчанию**: `15`  
**Рекомендуется**: `15-30` для продакшена  
**Пример**: `LOGIN_BLOCK_DURATION=15`

## 🌐 Сетевая конфигурация

### ALLOWED_ORIGINS
**Описание**: Разрешенные домены для CORS  
**Тип**: Строка (через запятую)  
**Формат**: `https://domain.com,https://www.domain.com`  
**Пример**: `ALLOWED_ORIGINS=https://thesim.in,https://www.thesim.in`

**Важно**: Не используйте `*` в продакшене!

### PORT
**Описание**: Порт для запуска сервера  
**Тип**: Число  
**По умолчанию**: `3000`  
**Пример**: `PORT=3000`

## 📊 Rate Limiting

### RATE_LIMIT_MAX_REQUESTS
**Описание**: Максимальное количество запросов в окне  
**Тип**: Число  
**По умолчанию**: `50`  
**Рекомендуется**: `100` для публичных API, `20` для аутентификации  
**Пример**: `RATE_LIMIT_MAX_REQUESTS=50`

### RATE_LIMIT_WINDOW_MS
**Описание**: Временное окно для rate limiting в миллисекундах  
**Тип**: Число  
**По умолчанию**: `900000` (15 минут)  
**Пример**: `RATE_LIMIT_WINDOW_MS=900000`

## 🎯 Режим работы

### NODE_ENV
**Описание**: Режим работы приложения  
**Тип**: Строка  
**Значения**: `development`, `production`, `test`  
**По умолчанию**: `development`  
**Продакшен**: `NODE_ENV=production`

## 📝 Пример полного .env файла

```env
# 🔐 СЕКРЕТНЫЕ КЛЮЧИ ДЛЯ БЕЗОПАСНОСТИ
# ⚠️ НИКОГДА не коммитьте этот файл в git!

# JWT секретный ключ (минимум 32 символа)
JWT_SECRET=rSA4hfVLhhwa3u2dfgH8bwzbj7Q5SG9zGwnqeFLfFvYQZTYYdPnXu9cH9zqkLpks

# Секретный ключ для шифрования (минимум 32 символа)
ENCRYPTION_KEY=hQEhGj93DC4cQrnfbvmgYWG2WMKDqj93

# Секретный ключ для cookies (минимум 32 символа)
COOKIE_SECRET=KCTe6jLdwJs9ChaBZc8XMJLqF7v5D8uZ

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

# Режим разработки
NODE_ENV=production

# CSRF секретный ключ
CSRF_SECRET=HmbmcNZ8g8sfhZGC8e6Vs3ESsx9Eh8ZpNAqUvjHWkT9ErcKwGr6HMkamMpdzBE4G

# Порт сервера
PORT=3000
```

## 🔒 Безопасность

### ✅ Что делать
- Используйте криптографически стойкие ключи
- Регулярно обновляйте секреты
- Используйте разные ключи для разных окружений
- Ограничивайте доступ к .env файлу

### ❌ Что НЕ делать
- Не коммитьте .env в Git
- Не используйте простые пароли как ключи
- Не используйте одинаковые ключи везде
- Не передавайте ключи через URL

## 🚀 Деплой

### Vercel
1. Добавьте переменные в настройках проекта
2. Убедитесь, что NODE_ENV=production

### Docker
```dockerfile
ENV NODE_ENV=production
ENV JWT_SECRET=your-secret
ENV ENCRYPTION_KEY=your-key
# ... остальные переменные
```

### PM2
```bash
pm2 start ecosystem.config.js --env production
```

## 🔍 Проверка настроек

### Скрипт проверки
```bash
node -e "
const required = ['JWT_SECRET', 'ENCRYPTION_KEY', 'COOKIE_SECRET', 'CSRF_SECRET'];
const missing = required.filter(key => !process.env[key]);
if (missing.length > 0) {
  console.log('❌ Отсутствуют переменные:', missing);
  process.exit(1);
}
console.log('✅ Все переменные настроены');
"
```

---

**Важно**: Безопасность начинается с правильной настройки переменных окружения! 🔐
