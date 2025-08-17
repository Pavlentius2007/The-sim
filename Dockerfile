# 🚀 CosmicLanding - Docker Image
# Многоэтапная сборка для оптимизации размера

# ========================================
# ЭТАП 1: Сборка
# ========================================
FROM node:18-alpine AS builder

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем файлы зависимостей
COPY package*.json ./

# Устанавливаем зависимости
RUN npm ci --only=production

# Копируем исходный код
COPY . .

# Собираем проект
RUN npm run build

# ========================================
# ЭТАП 2: Продакшен
# ========================================
FROM node:18-alpine AS production

# Устанавливаем рабочую директорию
WORKDIR /app

# Создаем пользователя для безопасности
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# Копируем package.json
COPY package*.json ./

# Устанавливаем только продакшен зависимости
RUN npm ci --only=production && npm cache clean --force

# Копируем собранное приложение
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/next.config.js ./
COPY --from=builder --chown=nextjs:nodejs /app/middleware.ts ./

# Переключаемся на пользователя nextjs
USER nextjs

# Открываем порт
EXPOSE 3000

# Переменные окружения
ENV NODE_ENV=production
ENV PORT=3000

# Команда запуска
CMD ["npm", "start"]
