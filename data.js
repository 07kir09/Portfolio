// Основной контент сайта. Факты и формулировки синхронизированы с AI-резюме.
window.content = {
  seo: {
    title: 'Воякин Кирилл — Junior Data Scientist / Applied AI Engineer',
    description:
      'Портфолио Junior Data Scientist / Applied AI Engineer: NLP, FinBERT, end-to-end ML-сервисы, FastAPI и аналитика данных.',
    ogImage: 'assets/og.jpg',
  },
  brand: {
    logoText: 'KV',
    tagline: 'Applied AI · ML Engineering · Finance',
  },
  hero: {
    greeting: 'Привет!',
    name: 'Воякин Кирилл',
    role: 'Junior Data Scientist / Applied AI Engineer',
    location: 'Москва, Россия',
    summary:
      'Создаю data- и ML-продукты полного цикла: от подготовки данных и валидации моделей до API, визуализации и интеграции с интерфейсом. Фокус — NLP, Applied AI и автоматизация внутренних процессов.',
    primaryCta: { label: 'Связаться', href: '#contact' },
    secondaryCta: { label: 'Скачать AI-резюме', href: 'assets/cv.pdf' },
    social: [
      { label: 'GitHub', href: 'https://github.com/07kir09' },
      { label: 'Telegram', href: 'https://t.me/Voiakin_07' },
      { label: 'Email', href: 'mailto:voyakinkirill88@yandex.ru' },
    ],
    skillChips: ['Python', 'PyTorch', 'Transformers', 'FastAPI', 'Docker', 'SQL'],
    metrics: [
      { value: '0,9486', label: 'macro F1 · FinBERT' },
      { value: '+11 п.п.', label: 'к baseline' },
      { value: '4', label: 'типа данных' },
      { value: 'end-to-end', label: 'ML delivery' },
    ],
    avatar: {
      image: 'assets/avatar.webp',
      caption: 'Applied AI · NLP · ML Engineering',
      floatingIcons: ['NLP', 'F1 .95', 'API'],
    },
  },
  about: {
    title: 'Обо мне',
    paragraphs: [
      {
        text: 'Я студент 3 курса ФКН НИУ ВШЭ по направлению «Программная инженерия» (GPA 8,02/10) и ведущий специалист направления Data Science в Дирекции по ESG Сбера.',
        highlights: [
          'ФКН НИУ ВШЭ',
          'GPA 8,02/10',
          'Data Science',
          'Сбера',
        ],
      },
      {
        text: 'Работаю с четырьмя типами данных — табличными, текстовыми, геопространственными и спутниковыми. Собираю воспроизводимые Python-пайплайны, автоматизирую проверки качества и связываю расчётные модули с интерфейсом через API.',
        highlights: [
          'четырьмя типами данных',
          'Python-пайплайны',
          'проверки качества',
          'API',
        ],
      },
      {
        text: 'В проектах довожу ML-решение от baseline до понятного результата: для классификатора финансовых новостей дообучил FinBERT и поднял macro F1 с 0,8383 до 0,9486, затем оформил inference как FastAPI-сервис в Docker.',
        highlights: [
          'FinBERT',
          'macro F1 с 0,8383 до 0,9486',
          'FastAPI-сервис',
          'Docker',
        ],
      },
    ],
  },
  journey: {
    title: 'Опыт и проекты',
    timeline: [
      {
        title: 'Data Science / Ведущий специалист',
        company: 'Сбер · Дирекция по ESG',
        dates: '2026 — н.в.',
        location: 'Москва',
        bullets: [
          'Объединил обработку табличных, текстовых, геопространственных и спутниковых источников в воспроизводимые Python-пайплайны.',
          'Автоматизировал проверки структуры, полноты и корректности данных с помощью Python и pandas.',
          'Разрабатываю backend-компоненты, метрики и интерактивные дашборды; перевожу бизнес-задачи в требования к данным, ML-моделям и API.',
        ],
      },
      {
        title: 'Financial News Sentiment Classifier',
        company: 'NLP / Applied AI',
        dates: '2026',
        location: 'Личный проект',
        bullets: [
          'Построил baseline TF-IDF + Logistic Regression и дообучил FinBERT для классификации финансовых новостей.',
          'Повысил macro F1 с 0,8383 до 0,9486 (+11 п.п.); автоматизировал оценку через accuracy, F1 и confusion matrix.',
          'Разделил обучение и inference, реализовал FastAPI endpoint и контейнеризацию в Docker.',
        ],
      },
      {
        title: 'Risk Calculator for MOEX SPFI',
        company: 'Risk Analytics',
        dates: '2025 — 2026',
        location: 'Курсовой проект · НИУ ВШЭ',
        bullets: [
          'Автоматизировал VaR, Expected Shortfall, волатильности, корреляции и стресс-тестирование портфеля.',
          'Реализовал загрузку MOEX/CSV, проверки качества данных, визуализации и экспорт в Excel/CSV.',
          'Настроил Docker и CI-проверки в GitHub Actions с тестированием и статическим анализом.',
        ],
        link: {
          label: 'Открыть репозиторий',
          href: 'https://github.com/07kir09/Risk-Calculator-for-the-Moscow-Exchange-SPFI-Market',
        },
      },
      {
        title: 'ExSpark',
        company: 'Web3 / Data Security',
        dates: '2024 — 2025',
        location: 'Командный проект · Милан',
        bullets: [
          'Разработал платформу для защищённой работы с данными носимых устройств.',
          'Объединил клиентское шифрование, IPFS-хранилище, токенизацию, аналитику и управление доступом.',
        ],
        link: {
          label: 'Открыть репозиторий',
          href: 'https://github.com/07kir09/CourseProject',
        },
      },
    ],
    workflow: [
      {
        number: '01',
        title: 'Данные',
        description: 'Сбор, валидация, EDA и воспроизводимый pipeline.',
      },
      {
        number: '02',
        title: 'Модель',
        description: 'Baseline, feature engineering, обучение и cross-validation.',
      },
      {
        number: '03',
        title: 'Качество',
        description: 'Метрики, confusion matrix, анализ ошибок и ограничений.',
      },
      {
        number: '04',
        title: 'Сервис',
        description: 'FastAPI, Docker, тесты, логирование и интеграция.',
      },
    ],
  },
  skills: {
    title: 'Навыки',
    groups: [
      {
        title: 'NLP & Applied AI',
        accent: 'pink',
        items: [
          'PyTorch',
          'Transformers',
          'Hugging Face',
          'FinBERT',
          'TF-IDF',
          'embeddings',
          'основы LLM / RAG',
        ],
      },
      {
        title: 'ML & Evaluation',
        accent: 'mint',
        items: [
          'scikit-learn',
          'классификация',
          'регрессия',
          'кластеризация',
          'cross-validation',
          'A/B-тесты',
        ],
      },
      {
        title: 'Python & Data',
        accent: 'blue',
        items: [
          'Python',
          'pandas',
          'NumPy',
          'SciPy',
          'SQL',
          'PostgreSQL',
          'CTE',
          'оконные функции',
        ],
      },
      {
        title: 'Backend & MLOps',
        accent: 'yellow',
        items: [
          'FastAPI',
          'Docker',
          'GitHub Actions',
          'CI/CD',
          'pytest',
          'model serving',
          'health checks',
          'логирование',
        ],
      },
      {
        title: 'Quant & Risk',
        accent: 'mint',
        items: [
          'VaR',
          'Expected Shortfall',
          'волатильность',
          'корреляции',
          'stress P&L',
        ],
      },
      {
        title: 'Product Delivery',
        accent: 'blue',
        items: [
          'data quality',
          'метрики',
          'дашборды',
          'REST API',
          'Excel / CSV',
          'работа со стейкхолдерами',
        ],
      },
    ],
    wideCards: [
      {
        title: 'Данные, с которыми работаю',
        items: ['табличные', 'текстовые', 'геопространственные', 'спутниковые'],
      },
      {
        title: 'Что довожу до рабочего результата',
        items: ['pipeline', 'baseline', 'обучение', 'оценка', 'API', 'Docker', 'визуализация'],
      },
    ],
  },
  projectHighlight: {
    kicker: 'NLP · End-to-end кейс',
    shortcutLabel: 'Главный кейс: FinBERT',
    name: 'Financial News Sentiment Classifier',
    description:
      'Сравнил TF-IDF baseline с дообученным FinBERT, поднял macro F1 на 11 процентных пунктов и оформил модель как воспроизводимый сервис с FastAPI и Docker.',
    metrics: [
      { value: '0,9486', label: 'macro F1' },
      { value: '+11 п.п.', label: 'к baseline' },
      { value: 'FastAPI', label: 'inference API' },
    ],
    cta: { label: 'Смотреть кейс', href: '#journey' },
  },
  education: {
    title: 'Образование',
    items: [
      {
        degree: 'Программная инженерия · бакалавриат · 3 курс · GPA 8,02/10',
        place: 'НИУ ВШЭ · Факультет компьютерных наук',
        years: '2023 — 2027',
        location: 'Москва',
      },
      {
        degree: 'Олимпиадные достижения по математике',
        place: 'Победитель «Высшей пробы» и олимпиады РЭШ · призёр «РосАтом»',
        years: '2023',
        location: 'Россия',
      },
    ],
  },
  languages: {
    title: 'Языки',
    items: [
      { name: 'Русский · родной', level: 5 },
      { name: 'Английский · B1–B2', level: 3 },
    ],
    maxLevel: 5,
  },
  contact: {
    title: 'Связаться',
    subtitle: 'Открыт к задачам на стыке Applied AI, NLP, ML Engineering и финансовых данных.',
    stickyLinks: [
      { label: 'Telegram', href: 'https://t.me/Voiakin_07', color: 'mint' },
      { label: 'Email', href: 'mailto:voyakinkirill88@yandex.ru', color: 'yellow' },
      { label: 'GitHub', href: 'https://github.com/07kir09', color: 'pink' },
    ],
    footerText: '© 2026 Воякин Кирилл. Applied AI · ML Engineering.',
  },
};
