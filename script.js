(function () {
  'use strict';

  const content = window.content || {};
  const accentToColor = {
    blue: 'var(--blue)',
    yellow: 'var(--yellow)',
    pink: 'var(--pink)',
    mint: 'var(--mint)',
  };

  function $(selector) {
    return document.querySelector(selector);
  }

  function toArray(value) {
    if (Array.isArray(value)) {
      return value;
    }
    if (!value) {
      return [];
    }
    return Array.from(value);
  }

  function setText(selector, value) {
    const node = $(selector);
    if (node && typeof value === 'string') {
      node.textContent = value;
    }
  }

  function setLink(selector, data) {
    const node = $(selector);
    if (!node || !data) {
      return;
    }
    if (typeof data.label === 'string') {
      node.textContent = data.label;
    }
    if (typeof data.href === 'string') {
      node.href = data.href;
    }
    if (/^https?:\/\//i.test(node.href)) {
      node.target = '_blank';
      node.rel = 'noreferrer';
    }
  }

  function initials(text, maxLength) {
    return String(text || '')
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, maxLength)
      .map(function (part) {
        return part[0].toUpperCase();
      })
      .join('');
  }

  function readableLink(href) {
    if (!href) {
      return '';
    }
    if (href.startsWith('mailto:')) {
      return href.replace('mailto:', '');
    }
    if (href.startsWith('tel:')) {
      return href.replace('tel:', '');
    }
    return href
      .replace(/^https?:\/\//i, '')
      .replace(/\/$/, '');
  }

  function setMetaContent(selector, value) {
    const node = document.querySelector(selector);
    if (node && typeof value === 'string') {
      node.setAttribute('content', value);
    }
  }

  function buildHighlightedText(text, highlights) {
    const palette = ['', 'color-blue', 'color-pink', 'color-mint'];
    let nodes = [String(text || '')];

    toArray(highlights).forEach(function (term, index) {
      const needle = String(term || '').trim();
      if (!needle) {
        return;
      }
      const nextNodes = [];
      let replaced = false;

      nodes.forEach(function (node) {
        if (typeof node !== 'string' || replaced) {
          nextNodes.push(node);
          return;
        }

        const lowerText = node.toLowerCase();
        const lowerNeedle = needle.toLowerCase();
        const position = lowerText.indexOf(lowerNeedle);

        if (position < 0) {
          nextNodes.push(node);
          return;
        }

        const before = node.slice(0, position);
        const match = node.slice(position, position + needle.length);
        const after = node.slice(position + needle.length);

        if (before) {
          nextNodes.push(before);
        }

        const span = document.createElement('span');
        span.className = ['about-highlight', palette[index % palette.length]]
          .filter(Boolean)
          .join(' ');
        span.textContent = match;
        nextNodes.push(span);

        if (after) {
          nextNodes.push(after);
        }

        replaced = true;
      });

      nodes = nextNodes;
    });

    const fragment = document.createDocumentFragment();
    nodes.forEach(function (node) {
      if (typeof node === 'string') {
        fragment.appendChild(document.createTextNode(node));
      } else {
        fragment.appendChild(node);
      }
    });
    return fragment;
  }

  function renderMeta() {
    if (!content.seo) {
      return;
    }
    if (typeof content.seo.title === 'string') {
      document.title = content.seo.title;
    }
    setMetaContent('meta[name="description"]', content.seo.description);
    setMetaContent('meta[property="og:title"]', content.seo.title);
    setMetaContent('meta[property="og:description"]', content.seo.description);
    setMetaContent('meta[property="og:image"]', content.seo.ogImage);
  }

  function renderBrandAndHero() {
    if (content.brand) {
      setText('.brand-logo', content.brand.logoText);
      setText('.brand-tagline', content.brand.tagline);
    }

    if (!content.hero) {
      return;
    }

    setText('.brand-name', content.hero.name);
    setText('#hero-greeting', content.hero.greeting);
    setText('#hero-name', content.hero.name);
    setText('#hero-role', content.hero.role);
    setText('#hero-location', content.hero.location);
    setText('#hero-summary', content.hero.summary);
    setLink('#hero-primary-cta', content.hero.primaryCta);
    setLink('#hero-secondary-cta', content.hero.secondaryCta);

    if (content.hero.avatar) {
      const heroAvatar = $('.hero-avatar');
      if (heroAvatar && typeof content.hero.avatar.image === 'string') {
        heroAvatar.src = content.hero.avatar.image;
      }
      setText('#hero-avatar-caption', content.hero.avatar.caption);
    }

    const socialContainer = $('#hero-social');
    if (socialContainer) {
      socialContainer.innerHTML = '';
      toArray(content.hero.social).forEach(function (link) {
        const anchor = document.createElement('a');
        anchor.className = 'social-pill';
        anchor.textContent = link.label || 'Link';
        anchor.href = link.href || '#';
        if (/^https?:\/\//i.test(anchor.href)) {
          anchor.target = '_blank';
          anchor.rel = 'noreferrer';
        }
        socialContainer.appendChild(anchor);
      });
    }

    const chipsContainer = $('#hero-skill-chips');
    if (chipsContainer) {
      chipsContainer.innerHTML = '';
      toArray(content.hero.skillChips).forEach(function (item) {
        const chip = document.createElement('span');
        chip.className = 'chip';

        const dot = document.createElement('span');
        dot.className = 'chip-dot';
        chip.appendChild(dot);
        chip.appendChild(document.createTextNode(item));

        chipsContainer.appendChild(chip);
      });
    }

    const metricsContainer = $('#hero-metrics');
    if (metricsContainer) {
      metricsContainer.innerHTML = '';
      toArray(content.hero.metrics).forEach(function (metric) {
        const item = document.createElement('div');
        item.className = 'hero-metric';

        const value = document.createElement('strong');
        value.className = 'hero-metric-value';
        value.textContent = metric.value || '';
        item.appendChild(value);

        const label = document.createElement('span');
        label.className = 'hero-metric-label';
        label.textContent = metric.label || '';
        item.appendChild(label);

        metricsContainer.appendChild(item);
      });
    }

    const floatingContainer = $('#hero-floating-icons');
    if (floatingContainer) {
      floatingContainer.innerHTML = '';
      toArray(content.hero.avatar && content.hero.avatar.floatingIcons).forEach(
        function (item) {
          const pill = document.createElement('span');
          pill.className = 'hero-float-pill';
          pill.textContent = item;
          floatingContainer.appendChild(pill);
        }
      );
    }
  }

  function renderAbout() {
    if (!content.about) {
      return;
    }
    setText('#about-title', content.about.title);

    const container = $('#about-content');
    if (!container) {
      return;
    }

    container.innerHTML = '';
    toArray(content.about.paragraphs).forEach(function (paragraph) {
      const text = paragraph && paragraph.text;
      if (!text) {
        return;
      }
      const line = document.createElement('p');
      line.appendChild(buildHighlightedText(text, paragraph.highlights));
      container.appendChild(line);
    });
  }

  function renderJourney() {
    if (!content.journey) {
      return;
    }
    setText('#journey-title', content.journey.title);

    const timeline = $('#journey-timeline');
    if (timeline) {
      timeline.innerHTML = '';
      toArray(content.journey.timeline).forEach(function (entry) {
        const item = document.createElement('article');
        item.className = 'journey-timeline-item';

        const header = document.createElement('div');
        header.className = 'journey-timeline-header';

        const heading = document.createElement('span');
        heading.textContent = [entry.title, entry.company].filter(Boolean).join(' · ');
        header.appendChild(heading);

        const dates = document.createElement('span');
        dates.className = 'journey-dates';
        dates.textContent = entry.dates || '';
        header.appendChild(dates);

        item.appendChild(header);

        if (entry.location) {
          const location = document.createElement('div');
          location.className = 'journey-location';
          location.textContent = entry.location;
          item.appendChild(location);
        }

        const bullets = toArray(entry.bullets);
        if (bullets.length) {
          const list = document.createElement('ul');
          list.className = 'journey-bullets';
          bullets.forEach(function (bullet) {
            const listItem = document.createElement('li');
            listItem.textContent = bullet;
            list.appendChild(listItem);
          });
          item.appendChild(list);
        }

        if (entry.link && entry.link.href) {
          const link = document.createElement('a');
          link.className = 'journey-link';
          link.textContent = entry.link.label || 'Открыть проект';
          link.href = entry.link.href;
          if (/^https?:\/\//i.test(link.href)) {
            link.target = '_blank';
            link.rel = 'noreferrer';
          }
          item.appendChild(link);
        }

        timeline.appendChild(item);
      });
    }

    const workflow = $('#product-flow');
    if (workflow) {
      workflow.innerHTML = '';
      toArray(content.journey.workflow).forEach(function (step) {
        const item = document.createElement('article');
        item.className = 'product-flow-step';

        const number = document.createElement('span');
        number.className = 'product-flow-number';
        number.textContent = step.number || '';
        item.appendChild(number);

        const text = document.createElement('div');
        text.className = 'product-flow-text';

        const title = document.createElement('strong');
        title.textContent = step.title || '';
        text.appendChild(title);

        const description = document.createElement('span');
        description.textContent = step.description || '';
        text.appendChild(description);

        item.appendChild(text);
        workflow.appendChild(item);
      });
    }
  }

  function renderSkills() {
    if (!content.skills) {
      return;
    }
    setText('#skills-title', content.skills.title);

    const groupsContainer = $('#skills-groups');
    if (groupsContainer) {
      groupsContainer.innerHTML = '';

      toArray(content.skills.groups).forEach(function (group) {
        const card = document.createElement('article');
        card.className = 'skill-card';

        const header = document.createElement('div');
        header.className = 'skill-card-header';

        const title = document.createElement('span');
        title.className = 'skill-card-title';
        title.textContent = group.title || '';
        header.appendChild(title);

        const icon = document.createElement('span');
        icon.className = 'skill-card-icon';
        icon.textContent = initials(group.title, 1) || '•';
        icon.style.backgroundColor =
          accentToColor[group.accent] || 'var(--mint)';
        header.appendChild(icon);
        card.appendChild(header);

        const body = document.createElement('div');
        body.className = 'skill-card-body';
        toArray(group.items).forEach(function (skill) {
          const chip = document.createElement('span');
          chip.className = 'chip';

          const dot = document.createElement('span');
          dot.className = 'chip-dot';
          dot.style.backgroundColor = accentToColor[group.accent] || 'var(--mint)';
          chip.appendChild(dot);
          chip.appendChild(document.createTextNode(skill));

          body.appendChild(chip);
        });

        card.appendChild(body);
        groupsContainer.appendChild(card);
      });
    }

    const wideContainer = $('#skills-wide-cards');
    if (wideContainer) {
      wideContainer.innerHTML = '';
      toArray(content.skills.wideCards).forEach(function (wide) {
        const card = document.createElement('article');
        card.className = 'skills-wide-card';

        const title = document.createElement('div');
        title.className = 'skills-wide-title';
        title.textContent = wide.title || '';
        card.appendChild(title);

        const body = document.createElement('div');
        body.className = 'skills-wide-body';
        toArray(wide.items).forEach(function (item) {
          const badge = document.createElement('span');
          badge.textContent = item;
          body.appendChild(badge);
        });
        card.appendChild(body);

        wideContainer.appendChild(card);
      });
    }
  }

  function renderProject() {
    if (!content.projectHighlight) {
      return;
    }

    const shortcut = $('#project-shortcut');
    if (shortcut) {
      shortcut.textContent =
        content.projectHighlight.shortcutLabel ||
        'Проект: ' + (content.projectHighlight.name || '...');
    }

    const container = $('#project-card');
    if (!container) {
      return;
    }

    container.innerHTML = '';

    const textWrap = document.createElement('div');
    textWrap.className = 'project-text';

    const kicker = document.createElement('div');
    kicker.className = 'project-kicker';
    kicker.textContent = content.projectHighlight.kicker || 'Проект';
    textWrap.appendChild(kicker);

    const name = document.createElement('div');
    name.className = 'project-name';
    name.textContent = content.projectHighlight.name || '';
    textWrap.appendChild(name);

    const description = document.createElement('div');
    description.className = 'project-description';
    description.textContent = content.projectHighlight.description || '';
    textWrap.appendChild(description);

    const metrics = document.createElement('div');
    metrics.className = 'project-metrics';
    toArray(content.projectHighlight.metrics).forEach(function (metric) {
      const badge = document.createElement('span');
      badge.className = 'project-metric';

      const value = document.createElement('strong');
      value.textContent = metric.value || '';
      badge.appendChild(value);

      if (metric.label) {
        badge.appendChild(document.createTextNode(' · ' + metric.label));
      }

      metrics.appendChild(badge);
    });
    if (metrics.children.length) {
      textWrap.appendChild(metrics);
    }

    const cta = document.createElement('a');
    cta.className = 'btn btn-primary project-cta';
    cta.textContent =
      (content.projectHighlight.cta && content.projectHighlight.cta.label) ||
      'Подробнее';
    cta.href =
      (content.projectHighlight.cta && content.projectHighlight.cta.href) || '#';
    if (/^https?:\/\//i.test(cta.href)) {
      cta.target = '_blank';
      cta.rel = 'noreferrer';
    }
    textWrap.appendChild(cta);

    const logo = document.createElement('div');
    logo.className = 'project-logo';
    logo.textContent = initials(content.projectHighlight.name, 2) || 'PR';

    container.appendChild(textWrap);
    container.appendChild(logo);
  }

  function renderEducationAndLanguages() {
    if (content.education) {
      const titleBits = [content.education.title, content.languages && content.languages.title]
        .filter(Boolean)
        .map(function (part) {
          return part.toLowerCase();
        });
      if (titleBits.length === 2) {
        setText('#education-title', content.education.title + ' и ' + titleBits[1]);
      }
    }

    const educationContainer = $('#education-card');
    if (educationContainer) {
      educationContainer.innerHTML = '';
      toArray(content.education && content.education.items).forEach(function (entry) {
        const item = document.createElement('article');
        item.className = 'edu-card-item';

        const degree = document.createElement('div');
        degree.className = 'edu-degree';
        degree.textContent = entry.degree || '';
        item.appendChild(degree);

        const place = document.createElement('div');
        place.className = 'edu-place';
        place.textContent = entry.place || '';
        item.appendChild(place);

        const meta = document.createElement('div');
        meta.className = 'edu-meta';
        meta.textContent = [entry.years, entry.location].filter(Boolean).join(' · ');
        item.appendChild(meta);

        educationContainer.appendChild(item);
      });
    }

    const languagesContainer = $('#languages-card');
    if (languagesContainer) {
      languagesContainer.innerHTML = '';

      const maxLevel = Math.max(1, Number(content.languages && content.languages.maxLevel) || 5);
      toArray(content.languages && content.languages.items).forEach(function (language) {
        const row = document.createElement('div');
        row.className = 'lang-row';

        const name = document.createElement('span');
        name.textContent = language.name || '';
        row.appendChild(name);

        const level = document.createElement('span');
        level.className = 'lang-level';
        const filled = Math.max(0, Number(language.level) || 0);

        for (let i = 0; i < maxLevel; i += 1) {
          const cell = document.createElement('span');
          cell.className = 'lang-level-cell' + (i < filled ? ' filled' : '');
          level.appendChild(cell);
        }

        row.appendChild(level);
        languagesContainer.appendChild(row);
      });
    }
  }

  function renderContactAndFooter() {
    if (content.contact) {
      setText('#contact-title', content.contact.title);
      setText('#contact-subtitle', content.contact.subtitle);
      setText('#footer-text', content.contact.footerText);
    }

    const stickers = $('#contact-stickers');
    if (stickers) {
      stickers.innerHTML = '';
      toArray(content.contact && content.contact.stickyLinks).forEach(function (link) {
        const sticker = document.createElement('article');
        sticker.className = 'sticker';
        sticker.style.backgroundColor =
          accentToColor[link.color] || 'var(--yellow)';

        const label = document.createElement('div');
        label.className = 'sticker-label';
        label.textContent = link.label || 'Контакт';
        sticker.appendChild(label);

        const anchor = document.createElement('a');
        anchor.className = 'sticker-link';
        anchor.href = link.href || '#';
        anchor.textContent = readableLink(link.href) || 'Открыть';
        if (/^https?:\/\//i.test(anchor.href)) {
          anchor.target = '_blank';
          anchor.rel = 'noreferrer';
        }
        sticker.appendChild(anchor);

        stickers.appendChild(sticker);
      });
    }

    const footerSocial = $('#footer-social');
    if (footerSocial) {
      footerSocial.innerHTML = '';
      toArray(content.hero && content.hero.social).slice(0, 3).forEach(function (link) {
        const anchor = document.createElement('a');
        anchor.className = 'social-pill';
        anchor.textContent = link.label || 'Link';
        anchor.href = link.href || '#';
        if (/^https?:\/\//i.test(anchor.href)) {
          anchor.target = '_blank';
          anchor.rel = 'noreferrer';
        }
        footerSocial.appendChild(anchor);
      });
    }
  }

  function initThemeToggle() {
    const root = document.documentElement;
    const toggle = $('#theme-toggle');
    const icon = toggle && toggle.querySelector('.theme-icon');
    if (!toggle) {
      return;
    }

    const key = 'portfolio-theme-manual';

    function readSavedTheme() {
      try {
        const value = localStorage.getItem(key);
        return value === 'dark' || value === 'light' ? value : null;
      } catch (error) {
        return null;
      }
    }

    function saveTheme(theme) {
      try {
        localStorage.setItem(key, theme);
      } catch (error) {
        // Ignore localStorage restrictions in file:// mode.
      }
    }

    function applyTheme(theme) {
      root.setAttribute('data-theme', theme);
      if (icon) {
        icon.textContent = theme === 'dark' ? '☀' : '☾';
      }
    }

    // Always start in light mode unless user explicitly selected a theme.
    applyTheme(readSavedTheme() || 'light');

    toggle.addEventListener('click', function () {
      const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      saveTheme(next);
    });
  }

  function initMobileNavigation() {
    const toggle = $('.nav-toggle');
    const nav = $('#nav-menu');
    if (!toggle || !nav) {
      return;
    }

    function closeMenu() {
      nav.classList.remove('nav-open');
      toggle.setAttribute('aria-expanded', 'false');
    }

    toggle.addEventListener('click', function () {
      const willOpen = !nav.classList.contains('nav-open');
      nav.classList.toggle('nav-open', willOpen);
      toggle.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
    });

    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('click', function (event) {
      if (!nav.contains(event.target) && !toggle.contains(event.target)) {
        closeMenu();
      }
    });
  }

  function initActiveNavigation() {
    const links = toArray(document.querySelectorAll('.nav-list a[data-section]'));
    if (!links.length || !('IntersectionObserver' in window)) {
      return;
    }

    const sections = links
      .map(function (link) {
        return document.getElementById(link.dataset.section);
      })
      .filter(Boolean);

    const sectionState = new Map();

    function setActive(id) {
      links.forEach(function (link) {
        link.classList.toggle('nav-active', link.dataset.section === id);
      });
    }

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            sectionState.set(entry.target.id, entry.intersectionRatio);
          } else {
            sectionState.delete(entry.target.id);
          }
        });

        const sorted = Array.from(sectionState.entries()).sort(function (a, b) {
          return b[1] - a[1];
        });
        if (sorted[0]) {
          setActive(sorted[0][0]);
        }
      },
      {
        rootMargin: '-45% 0px -45% 0px',
        threshold: [0, 0.2, 0.6, 1],
      }
    );

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }

  function initProjectShortcut() {
    const button = $('#project-shortcut');
    const target = $('#project-highlight');
    if (!button || !target) {
      return;
    }

    button.addEventListener('click', function () {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  function init() {
    renderMeta();
    renderBrandAndHero();
    renderAbout();
    renderJourney();
    renderSkills();
    renderProject();
    renderEducationAndLanguages();
    renderContactAndFooter();

    initThemeToggle();
    initMobileNavigation();
    initActiveNavigation();
    initProjectShortcut();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
