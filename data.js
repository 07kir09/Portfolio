// Контент сайта. Меняйте значения под себя.
window.content = {
  seo: {
    title: 'Воякин Кирилл — Backend / Data Analyst / Data Scientist',
    description:
      'Портфолио Backend / Data Analyst / Data Scientist: сервисы, аналитика данных и ML в финансах.',
    ogImage: 'assets/og.jpg',
  },
  brand: {
    logoText: 'KV',
    tagline: 'Портфолио про данные и инженерные решения',
  },
  hero: {
    greeting: 'Привет!',
    name: 'Воякин Кирилл',
    role: 'Backend / Data Analyst / Data Scientist',
    location: 'Москва, Россия',
    summary:
      'Строю надежный backend и аналитические решения: собираю данные, считаю риск-метрики и превращаю результаты в понятные отчеты.',
    primaryCta: { label: 'Связаться', href: '#contact' },
    secondaryCta: { label: 'Скачать резюме', href: 'assets/cv.pdf' },
    social: [
      { label: 'GitHub', href: 'https://github.com/07kir09' },
      { label: 'Telegram', href: 'https://t.me/Voiakin_07' },
      { label: 'Email', href: 'mailto:voyakinkirill88@yandex.ru' },
    ],
    skillChips: ['Python', 'SQL', 'Risk Analytics', 'ML', 'PostgreSQL', 'Dashboards'],
    avatar: {
      image: 'assets/avatar.png',
      caption: 'Junior Quant / ML Engineer',
      floatingIcons: ['ML', 'SQL', 'VaR'],
    },
  },
  about: {
    title: 'Обо мне',
    paragraphs: [
      {
        text: 'Я студент 3 курса ФКН НИУ ВШЭ (программная инженерия, 2023-2027, GPA 7.83). Работаю на стыке backend, data analytics и ML в финтех-задачах.',
        highlights: [
          'ФКН НИУ ВШЭ',
          'GPA 7.83',
          'backend',
          'data analytics',
          'ML в финтех-задачах',
        ],
      },
      {
        text: 'Могу быть полезен в построении аналитических сервисов: от сбора и обработки данных до расчетов риск-метрик и визуализации результатов в дашбордах и отчетах.',
        highlights: ['VaR', 'SQL', 'Python', 'дашборды'],
      },
      {
        text: 'Отлично разбираюсь в математике, линейной алгебре, статистике и теории вероятностей. На данный момент являюсь помощником лектора по математическому анализу: у меня в подчинении 16 человек, которых я координирую и направляю по учебным задачам.',
        highlights: [
          'математика',
          'линейная алгебра',
          'статистика',
          'теория вероятностей',
          '16 человек в координации',
        ],
      },
    ],
  },
  journey: {
    title: 'Мой путь',
    timeline: [
      {
        title: 'Risk Calculator (MOEX SPFI)',
        company: 'Курсовой проект',
        dates: '2025 — 2026',
        location: 'HSE, Москва',
        bullets: [
          'Разрабатываю ядро риск-аналитики портфеля: VaR, волатильности/корреляции и производные метрики.',
          'Собрал библиотеку стресс-сценариев и интерфейс выбора метрик и сценариев.',
          'Экспорт результатов в Excel/CSV. Стек: Python, React, PostgreSQL.',
        ],
      },
      {
        title: 'ExSpark',
        company: 'Web3-платформа данных носимых устройств',
        dates: '2024 — 2025',
        location: 'HSE · Милан',
        bullets: [
          'Клиентское шифрование, хранение в IPFS и токенизация данных.',
          'Реализовал полный стек: дашборды, визуализация, backend-логика, безопасность и интеграции с блокчейном.',
          'Проект представлен на международной выставке в Милане и опубликован для изучения.',
        ],
      },
      {
        title: 'HSE Bank Finance Management',
        company: 'Инструмент учета личных и курсовых финансов',
        dates: '2025',
        location: 'HSE, Москва',
        bullets: [
          'Импорт выписок, объединение счетов, автоматическая категоризация операций.',
          'Помесячная аналитика расходов и доходов для принятия решений.',
        ],
      },
      {
        title: 'Олимпиады по математике',
        company: 'Высшая проба · РосАтом',
        dates: '2023',
        location: 'Россия',
        bullets: ['Победитель «Высшая проба».', 'Призер «РосАтом».'],
      },
    ],
    map: {
      mode: 'static',
      points: [
        { label: 'MILAN', lat: 54, lng: 45 },
        { label: 'MOSCOW', lat: 34, lng: 73 },
      ],
      path: true,
    },
  },
  skills: {
    title: 'Навыки',
    groups: [
      {
        title: 'Backend Engineering',
        accent: 'blue',
        items: [
          'Python',
          'backend-логика сервисов',
          'интеграции',
          'безопасность данных',
        ],
      },
      {
        title: 'Data Analytics',
        accent: 'yellow',
        items: ['SQL (select/join/aggregation)', 'pandas', 'numpy', 'дашборды'],
      },
      {
        title: 'Machine Learning',
        accent: 'pink',
        items: [
          'scikit-learn',
          'PyTorch',
          'XGBoost',
          'CatBoost',
          'регрессия/классификация',
        ],
      },
      {
        title: 'Quant & Risk',
        accent: 'mint',
        items: [
          'VaR',
          'волатильности',
          'корреляции',
          'стресс-сценарии',
          'инструменты денежного рынка',
        ],
      },
      {
        title: 'Storage',
        accent: 'blue',
        items: ['PostgreSQL', 'IPFS'],
      },
      {
        title: 'Tools & Workflow',
        accent: 'yellow',
        items: ['Git', 'Docker', 'экспорт Excel/CSV'],
      },
    ],
    wideCards: [
      {
        title: 'Риск-калькулятор Мосбиржи (SPFI)',
        items: [
          'VaR',
          'волатильности/корреляции',
          'библиотека стресс-сценариев',
          'экспорт отчетов',
        ],
      },
      {
        title: 'Data-продукты',
        items: [
          'импорт данных',
          'категоризация операций',
          'помесячная аналитика',
          'визуализация метрик',
        ],
      },
    ],
  },
  projectHighlight: {
    kicker: 'Проект',
    name: 'Risk Calculator MOEX (SPFI)',
    description:
      'Разрабатываю риск-калькулятор для инструментов Московской биржи: VaR, волатильности/корреляции, стресс-сценарии и экспорт в Excel/CSV.',
    cta: { label: 'Подробнее', href: '#journey' },
  },
  education: {
    title: 'Образование',
    items: [
      {
        degree: 'Программная инженерия (бакалавриат, 3 курс, GPA 7.83)',
        place: 'НИУ ВШЭ · Факультет компьютерных наук',
        years: '2023 — 2027',
        location: 'Москва, Россия',
      },
    ],
  },
  languages: {
    title: 'Языки',
    items: [
      { name: 'Русский', level: 5 },
      { name: 'Английский (техническая документация)', level: 4 },
    ],
    maxLevel: 5,
  },
  contact: {
    title: 'Связаться',
    subtitle: 'Обсудим backend, аналитику и data-задачи.',
    stickyLinks: [
      { label: 'Telegram', href: 'https://t.me/Voiakin_07', color: 'mint' },
      { label: 'Email', href: 'mailto:voyakinkirill88@yandex.ru', color: 'yellow' },
      { label: 'GitHub', href: 'https://github.com/07kir09', color: 'pink' },
    ],
    footerText: '© 2026 Воякин Кирилл. Все права защищены.',
  },
};
