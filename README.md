# Brand OS Site
Landing page for Brand OS design system and Misha Kalinsky services.

## Запуск

```bash
npm install
npm run dev
```

Откройте http://localhost:3000

## Деплой на Vercel

```bash
vercel
```

## Структура

- `/styles/globals.css` — CSS Variables из Design System
- `/components/ui/` — React компоненты с токенами
- `/pages/` — страницы Next.js
- `/public/` — статические файлы

## Дизайн-система

Все стили берутся из CSS Variables:
- `--color-terracotta` — основной акцент
- `--font-body` — Shlapak Script
- `--spacing-md` — базовый отступ 16px