export const locales = ['zh', 'en'] as const;
export type Locale = (typeof locales)[number];

export const copy = {
  zh: {
    brand: '沃兹伦科技',
    nav: {
      about: '关于我们',
      values: '我们的坚持',
      notes: '文字',
      contact: '联系',
    },
    theme: '切换主题',
    language: 'English',
    heroEyebrow: 'VOZREN / 沃兹伦科技',
    heroTitle: '用技术放大\n每一个声音。',
    heroLead: '让复杂的技术，成为人人可用的简单工具。',
    discover: '了解我们',
    contact: '联系我们',
    heroAside: '我们相信，好的技术不喧哗。它安静地解决问题，然后改变世界。',
    aboutKicker: '01 / 关于我们',
    aboutTitle: '以技术为底色，\n以人为出发点。',
    aboutBody:
      '沃兹伦科技是一家以技术为底色的创新公司。我们关注真实的问题，思考如何让每一次创造都被世界听见。',
    missionLabel: '使命',
    mission: '让复杂的技术，成为人人可用的简单工具。',
    visionLabel: '愿景',
    vision: '成为最受信赖的技术伙伴，让每一次创造都被世界听见。',
    valuesKicker: '02 / 我们的坚持',
    valuesTitle: '做事的方式，\n和做什么一样重要。',
    values: [
      {
        number: '01',
        title: '真诚',
        english: 'Honesty',
        text: '对用户、对伙伴、对代码都不说谎。',
      },
      {
        number: '02',
        title: '好奇',
        english: 'Curiosity',
        text: '保持提问，保持探索，保持学习。',
      },
      {
        number: '03',
        title: '极致',
        english: 'Craftsmanship',
        text: '把每一个细节做到无愧于心。',
      },
      {
        number: '04',
        title: '开放',
        english: 'Openness',
        text: '拥抱开源，拥抱协作，拥抱不同。',
      },
      {
        number: '05',
        title: '长期主义',
        english: 'Long-termism',
        text: '做难而正确的事，时间会给答案。',
      },
    ],
    notesKicker: '03 / 文字',
    notesTitle: '一些正在形成的想法。',
    readMore: '阅读文章',
    allNotes: '查看全部文字',
    notesIntro: '关于技术、创造，以及我们所相信的事。',
    back: '返回文字',
    contactKicker: '04 / 保持联系',
    contactTitle: '一起把想法\n变成可能。',
    contactBody: '有问题、想法，或只是想打个招呼？我们期待听到你的声音。',
    email: '发送邮件',
    footer: '用技术放大每一个声音。',
    rights: '保留所有权利',
  },
  en: {
    brand: 'Vozren',
    nav: {
      about: 'About',
      values: 'Values',
      notes: 'Journal',
      contact: 'Contact',
    },
    theme: 'Toggle theme',
    language: '中文',
    heroEyebrow: 'VOZREN / TECHNOLOGY WITH PURPOSE',
    heroTitle: 'Amplifying\nevery voice.',
    heroLead: 'Turning complex technology into simple tools for everyone.',
    discover: 'Discover our approach',
    contact: 'Get in touch',
    heroAside:
      "We believe great technology doesn't shout. It quietly solves problems, then changes the world.",
    aboutKicker: '01 / ABOUT US',
    aboutTitle: 'Built on technology.\nGrounded in people.',
    aboutBody:
      'Vozren is a technology-driven company. We focus on real problems and imagine a world where every creation can be heard.',
    missionLabel: 'OUR MISSION',
    mission: 'Turn complex technology into simple tools for everyone.',
    visionLabel: 'OUR VISION',
    vision:
      'Become the most trusted technology partner, where every creation is heard.',
    valuesKicker: '02 / OUR VALUES',
    valuesTitle: 'How we work matters\nas much as what we make.',
    values: [
      {
        number: '01',
        title: 'Honesty',
        english: '真诚',
        text: 'No lies to users, partners, or code.',
      },
      {
        number: '02',
        title: 'Curiosity',
        english: '好奇',
        text: 'Keep asking, exploring, and learning.',
      },
      {
        number: '03',
        title: 'Craftsmanship',
        english: '极致',
        text: 'Sweat every detail. Ship with pride.',
      },
      {
        number: '04',
        title: 'Openness',
        english: '开放',
        text: 'Open source, open collaboration, open minds.',
      },
      {
        number: '05',
        title: 'Long-termism',
        english: '长期主义',
        text: 'Do the hard right thing. Time will tell.',
      },
    ],
    notesKicker: '03 / JOURNAL',
    notesTitle: 'Ideas in progress.',
    readMore: 'Read the note',
    allNotes: 'Explore the journal',
    notesIntro: 'Thoughts on technology, creation, and what we believe.',
    back: 'Back to journal',
    contactKicker: '04 / SAY HELLO',
    contactTitle: 'Let’s make ideas\npossible together.',
    contactBody:
      "Have a question, an idea, or just want to say hello? We'd love to hear from you.",
    email: 'Send an email',
    footer: 'Amplifying every voice through technology.',
    rights: 'All rights reserved',
  },
} as const;

export function localeFromUrl(url: URL): Locale {
  return url.pathname.startsWith('/en/') ? 'en' : 'zh';
}
