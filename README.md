# Portfolio — Kirill Voyakin

Одностраничное портфолио в стиле neo-brutalism для профиля `Backend / Data Analyst / Data Scientist`.

## Что внутри

- Статический сайт без сборки: `index.html`, `styles.css`, `script.js`, `data.js`
- Контент подгружается из `window.content` в `data.js`
- Переключение темы (light/dark)
- Блок `EUROPE MAP` с картой и маркерами маршрута
- Резюме доступно по ссылке `assets/cv.pdf`

## Быстрый запуск локально

1. Откройте `index.html` в браузере
2. Или запустите локальный сервер:

```bash
python3 -m http.server 5500
```

После этого откройте `http://localhost:5500`.

## Где менять контент

Основной файл: `data.js`

- `seo` — title/description/OG
- `brand` — логотип и подпись в шапке
- `hero` — главный экран (имя, роль, summary, кнопки, соцсети)
- `about` — блок "Обо мне"
- `journey` — таймлайн и точки на карте
- `skills` — навыки и карточки
- `projectHighlight` — ключевой проект
- `education`, `languages` — образование и языки
- `contact` — блок контактов и footer

## Ассеты

Папка `assets/`:

- `avatar.png` — фото/аватар
- `cv.pdf` — резюме для кнопки "Скачать резюме"
- `og.jpg` — превью для соцсетей
- `europe-map.svg` — карта для блока `EUROPE MAP`

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

