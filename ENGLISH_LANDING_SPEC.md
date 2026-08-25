# English Landing Page — SPEC for Claude Code

## Overview

Build the English teaching landing pages for auruby.io (Next.js 15, App Router). The site currently serves YKI Finnish content at `/`. Restructure routing so the root becomes a language selector, YKI moves to `/finnish`, and English teaching gets `/english/*`.

**Reference mockup:** `Teen_Club_Landing_dc.html` — a single HTML file with three views (home, teens, adults) switched via hash routing. Convert this into proper Next.js pages with the design system below.

---

## Routing

```
/                  → Language selector (two cards: Финский → /finnish, Английский → /english)
/finnish               → Existing YKI content (move all current root content here, no visual changes)
/english           → English product selector (two product cards: teens / adults)
/english/teens     → Teen English Club landing page
/english/adults    → Speaking Reset landing page
```

All CTA buttons labeled "Попробовать бесплатно", "Записаться", "Записаться на диагностику", "Заполнить заявку" → external link: `https://forms.gle/PLACEHOLDER` (target="_blank"). Anna will replace the URL later.

---

## Design Tokens

### Fonts (Google Fonts)

```css
--font-heading: 'Jost', system-ui, sans-serif;       /* weight: 600, headings */
--font-body: 'Manrope', system-ui, sans-serif;        /* weight: 400/500/600/700, body */
--font-mono: 'JetBrains Mono', monospace;             /* weight: 400/500, labels/accents */
```

### Colors

```css
--aubergine:     #3D3B5C;   /* primary text, dark backgrounds */
--chartreuse:    #D6F549;   /* accent, CTAs, highlights */
--lilac:         #EEEDFE;   /* light cards, secondary backgrounds */
--bg:            #FAFAFF;   /* page background */
--muted:         #6B67A0;   /* secondary text */
--mid:           #4A4770;   /* mid-tone text */
--dark:          #2A2940;   /* footer background */
--chartreuse-hover: #E4FA7D;
```

### Spacing & Layout

```
Max width: 1240px
Page padding: 48px horizontal
Section padding: 96px vertical
Card border-radius: 24px
Button border-radius: 100px (pill)
Secondary card radius: 20px
Step card radius: 18px
Small card radius: 16px
```

### Typography Scale

```
Hero h1: 64–82px, line-height 0.94–1.06, letter-spacing -0.035em
Section h2: 52px, line-height 1.04
Card h3: 34px
Card h4: 22px
Body large: 19.5px, line-height 1.55
Body: 16.5px
Small: 14.5px
Mono labels: 11–11.5px, letter-spacing 0.14–0.16em, uppercase
```

---

## Shared Components

### StickyHeader

Sticky top bar with blur backdrop. Contains:
- Logo: "auruby" + chartreuse dot
- Nav links: "Разговорный клуб для подростков" → /english/teens, "Английский для взрослых" → /english/adults
- CTA button: "Записаться" → scrolls to footer CTA section, or links to Google Form

Show nav links only on /english/* pages. On / and /finnish, show appropriate nav.

### Footer

Two parts:

1. **CTA section** (dark bg, shown on /english/teens and /english/adults):
   - "Набор открыт" label
   - "Две программы. Выберите свою." heading
   - Two cards side by side:
     - Chartreuse card: "Подросткам 13–17 / Разговорный клуб / Первое занятие бесплатно · €80/мес / Заполнить заявку →" → Google Form
     - Dark card with border: "Взрослым / Speaking Reset / Бесплатная диагностика · €40–60/час / Заполнить заявку →" → Google Form
   - Small text: "Заявка занимает пару минут. Обе кнопки ведут на форму заявки."

2. **Site footer** (darker bg #2A2940):
   - "auruby.io" + dot
   - Links: Instagram, Telegram, Email (hrefs TBD)
   - "© 2026 Anna · Английский как инструмент"

### MarqueeStrip

Horizontal auto-scrolling text strip. CSS animation `marq 34s linear infinite`. Used between hero and content sections. Takes an array of strings.

### AnnaSection ("Кто ведёт")

Reused on both /english/teens and /english/adults. Photo placeholder + bio text + stats row.

Content:
- Photo: placeholder (aspect-ratio 4/5, gradient background)
- Label: "Кто ведёт"
- Name: "Анна"
- Subtitle: "Преподаватель английского и разработчик"
- Bio: "Преподаю английский с 2015 года, сертификат CELTA (Cambridge). Параллельно работаю в IT: разработка, продукт, AI-проекты. Знаю, как звучат рабочие созвоны, интервью и код-ревью — изнутри, не в теории. И сама учу языки: финский, немецкий, румынский. Хорошо помню, каково это — понимать, но не мочь сказать."
- Stats: 8+ лет преподавания | CELTA Cambridge | IT разработка и продукт | 3 языка учу сама

---

## Page: `/` (Language Selector)

Minimal full-screen page. No scroll needed.

- Logo centered
- Two equal cards:
  - "Финский → YKI" → /finnish
  - "Английский → English" → /english
- Same visual style as the English product selector (aubergine bg, card design)

---

## Page: `/english` (Product Selector)

Dark background (#3D3B5C). Full viewport height.

### Hero
- Mono label: "АНГЛИЙСКИЙ С АННОЙ НИКОЛАЭ"
- H1: "Английский, на котором думают, спорят и договариваются."
- Photo placeholder (right side): aspect-ratio 4/5, gradient border, with credentials "CELTA · 8+ лет преподавания · разработчик · AI-проекты"

### Two product cards (below hero, side by side)

**Left card (teens):** White/lilac background, clickable → /english/teens
- Mono label: "Набор в сентябрьские группы открыт"
- H2: "Разговорный клуб для подростков"
- Description: "Говорим по-английски о том, что реально интересно: технологии, ИИ, игры, наука, кино."
- Bullet points: 13–17 лет, Уровень B1–C1, Группа 5–6 человек, 2 × 60 мин в неделю, €80/мес · первое занятие бесплатно
- "Подробнее о клубе →"
- CTA button below card (chartreuse): "Попробовать бесплатно →" → Google Form

**Right card (adults):** White/lilac background, clickable → /english/adults
- Mono label: "Запись открыта"
- H2: "Английский для взрослых"
- Description: "Speaking Reset: от «я всё понимаю» к «я могу это сказать»."
- Bullet points: От 18 лет, Уровень A2–C1, Индивидуально, 60–90 мин, Бесплатная диагностика (with sub-bullets: Разбираемся где вы сейчас и что мешает, Определяем цель и сроки, Составляем план: от вашей точки А к вашей точке Б), €40–60/час
- "Подробнее о Speaking Reset →"
- CTA button below card (lilac): "Записаться на диагностику →" → Google Form

### Marquee strip (bottom)
Topics: AI & ethics · Game design · Space · Internet culture · Future jobs · Music · Cinema · Privacy

---

## Page: `/english/teens` (Teen Club)

### Hero (dark bg)
- Labels: "Разговорный клуб для подростков" — "13–17 ЛЕТ · B1–C1"
- Giant text: Speak. / Think. / Connect. / In English. (last line chartreuse)
- Description: "Клуб английского для подростков, которым интересно, как устроен мир: технологии, ИИ, игры, наука, кино, музыка. Здесь английский — не предмет, а способ думать, спорить и договариваться."
- CTA: "Попробовать бесплатно →" (chartreuse button)
- Right side: Format card (dark glass effect):
  - Занятия: 2 × 60 мин в неделю
  - В группе: 5–6 человек
  - Уровень: B1–C1
  - Стоимость: €80/мес (chartreuse, large)
- Under format card: mini Anna card with avatar placeholder + "Ведёт Анна — преподаватель с CELTA и 8 годами практики. И разработчик: она из той индустрии, про которую вы говорите на занятиях."

### Marquee strip
Same as /english page.

### "Что это" section (light bg)
- Badge: "Что это" (chartreuse pill)
- H2: "Разговорный клуб"
- Description: "Группа из пяти-шести человек, которые говорят по-английски о том, что им реально интересно, и учатся делать это уверенно. Нужен уровень примерно B1: понимаешь речь и можешь поддержать разговор, пусть с ошибками."
- 4 skill cards (2×2 grid, last one chartreuse):
  1. Уверенность в речи — Говорить, не выстраивая фразу заранее в голове.
  2. Своё мнение — Сформулировать позицию и объяснить, почему она такая.
  3. Аргументы — Защищать идею и признавать сильный контраргумент.
  4. Своя компания (chartreuse) — Ровесники со схожими интересами.

### "Как проходит занятие" section
4 step cards (horizontal):
1. Материал — Видео, статья, отрывок интервью или геймплей. То, что ты и так смотришь — но теперь понимаешь на 100% и можешь это обсудить.
2. Язык — Выражения, которые нужны именно для этой темы: как возразить, уточнить, согласиться наполовину.
3. Дискуссия — Основная часть. Мнения, аргументы, несогласие. Каждый говорит — в маленькой группе слышно всех.
4. Обратная связь (dark card) — Что прозвучало хорошо, что можно сказать точнее.

### "О чём говорим" section (dark card)
Topic tags (pills):
- Может ли ИИ быть автором?
- Почему одни игры затягивают, а другие — нет (chartreuse)
- Стоит ли колонизировать Марс
- Приватность против удобства
- Профессии, которых ещё нет
- Как алгоритмы решают, что ты посмотришь (lilac)
- Мемы как язык
- Что делает трек хитом
- Нужны ли школе оценки

After tags: "Темы предлагает и группа. Если тебе интересно — это подходящий материал."

Placeholder: dashed border box for future interactive element.

### "Формат и стоимость" section
Left card (lilac):
- 2 × 60 мин / в неделю, онлайн
- 5–6 человек / в группе
- B1–C1 / уровень
- 8 занятий / в месяц
- €80 / месяц · €10 за занятие

Right card (chartreuse): "Приходи на первое занятие бесплатно" — "Заполни короткую заявку — я напишу, предложу время и подберу группу по уровню." + "Записаться →" button

### Anna section
Shared AnnaSection component.

### CTA footer section
Shared footer CTA.

---

## Page: `/english/adults` (Speaking Reset)

### Hero (dark bg)
- Labels: "Английский для взрослых" — "1:1 · A2–C1"
- Giant text: Speaking / Reset. (last line chartreuse)
- Tagline: "От «я всё понимаю» к «я могу это сказать»."
- Description: "Вы понимаете сериалы и созвоны, но собрать мысль в речь — тяжело."
- Chartreuse line: "Разбираюсь в вашем запросе и готовлю индивидуальный план."
- CTA: "Бесплатная диагностика →"
- Right side: Program card:
  - Занятия: 60–90 мин, 1:1
  - Уровень: A2–C1
  - Flow: Диагностика → план → работа по плану
  - Стоимость: €40–60/час
- Mini card: "Сначала диагностика, потом план, потом отработка на ваших реальных ситуациях."

### Marquee strip
Topics: Meetings · Interviews · Presentations · Relocation · Small talk · Code review · Negotiation · Everyday life

### "Что это" section
- Badge: "Что это"
- H2: "Не просто практика — движение к конкретной цели"
- Description: "На занятии говорите в основном вы. Мы берём вашу задачу — созвон, интервью, презентацию, разговор с врачом — и проговариваем её вслух: я даю точные формулировки, поправляю на ходу и отмечаю, что стоит закрепить. Прогресс заметен по скорости: вы дольше держите речь и меньше времени тратите на подбор слов."
- 4 skill cards:
  1. Речь без перевода — Формулировать сразу, а не собирать фразу в голове.
  2. Активный запас — Слова, которые вы знаете, начинают работать в разговоре.
  3. Сложные мысли — Объяснять непростое понятно и своими словами.
  4. Ваши ситуации (chartreuse) — Рабочие встречи, интервью, презентации, жизнь за границей.

### "Как проходит" section
- Label: "Метод"
- H3: "Точка A → Точка B"
- Two cards with arrow between:

Card A (dark): "Где вы сейчас"
- Сначала выстраиваю фразу, потом говорю
- Нужное слово всплывает уже после разговора
- Сложная мысль упрощается до школьной фразы
- На созвонах молчу, потом дописываю в чат

Arrow: "шаг за шагом"

Card B (chartreuse): "Куда приходите"
- Начинаю говорить, не репетируя фразу
- Нужные слова приходят по ходу разговора
- Объясняю сложное понятно
- Веду встречу и отвечаю на вопросы вживую

### "Личный план работы" sub-section
- Label: "На входе вы получаете"
- H4: "Личный план работы"
- 4 step cards:
  1. Диагностика — Что работает, что мешает, какие ситуации важны.
  2. План — Приоритеты и измеримый результат.
  3. Тренировка — Отработка на ваших реальных ситуациях, а не на упражнениях.
  4. Итог — Что изменилось и с чем продолжать дальше.

### "Формат и стоимость" section
Left card (lilac):

**Общий английский:**
€40 / 60 мин
€60 / 90 мин

**Интенсивная подготовка к интервью и презентациям:**
€60 / 60 мин
€90 / 90 мин

Первая диагностика — бесплатно.

Right card (dark): "Начните с бесплатной диагностики" — "Полчаса разговора — и вы поймёте, подходит ли вам этот формат. Если да — составляем план и начинаем." + "Записаться →"

### Anna section
Shared AnnaSection component.

### CTA footer section
Shared footer CTA.

---

## Technical Requirements

- Next.js 15, App Router
- Tailwind CSS (extract design tokens into tailwind.config)
- Google Fonts: Jost, Manrope, JetBrains Mono
- All text in Russian (UTF-8)
- Fully responsive (mobile-first, breakpoint ~768px)
- No client-side state management needed — static pages with external links
- Images: use placeholder divs with gradient backgrounds (same as mockup)
- Animations: marquee strip CSS animation only
- SEO: proper meta tags in Russian for each page
- All external links (Google Form, Instagram, Telegram) open in new tab

## Migration Notes

- Move ALL existing content from `/` to `/finnish/*`
- Update any internal links that pointed to root
- Keep existing YKI styles/components untouched
- The `/` root becomes a minimal language selector page
