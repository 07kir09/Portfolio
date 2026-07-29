# Portfolio — Kirill Voyakin

Одностраничное портфолио в стиле neo-brutalism для профиля
`Junior Data Scientist / Applied AI Engineer`.

## Что внутри

- Статический сайт без сборки: `index.html`, `styles.css`, `script.js`, `data.js`
- Контент подгружается из `window.content` в `data.js`
- Переключение темы (light/dark)
- Измеримые результаты на первом экране
- Таймлайн опыта и проектов со ссылками на репозитории
- Визуальный pipeline `END-TO-END ML`
- Резюме доступно по ссылке `assets/cv.pdf`

## Быстрый запуск локально

1. Откройте `index.html` в браузере
2. Или запустите локальный сервер:

```bash
python3 -m http.server 5500
```

После этого откройте `http://localhost:5500`.

## Сборка

```bash
npm run build
```

Готовые статические файлы появятся в `dist/`.

## Где менять контент

Основной файл: `data.js`

- `seo` — title/description/OG
- `brand` — логотип и подпись в шапке
- `hero` — главный экран (имя, роль, summary, кнопки, соцсети)
- `about` — блок "Обо мне"
- `journey` — таймлайн и этапы разработки ML-продукта
- `skills` — навыки и карточки
- `projectHighlight` — ключевой проект
- `education`, `languages` — образование и языки
- `contact` — блок контактов и footer

## Ассеты

Папка `assets/`:

- `avatar.webp` — актуальное оптимизированное фото
- `cv.pdf` — основное AI-резюме для кнопки "Скачать AI-резюме"
- `og.jpg` — превью для соцсетей
- `favicon.svg` — иконка вкладки

## Публикация на GitHub Pages

Если репозиторий уже создан:

```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

Дальше в GitHub:

1. `Settings`
2. `Pages`
3. `Build and deployment` -> `Deploy from a branch`
4. Выберите `main` и папку `/ (root)`
5. `Save`

Через 1-2 минуты сайт будет доступен по ссылке GitHub Pages.
