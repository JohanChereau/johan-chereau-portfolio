import type { Locale } from './config';

export const ui = {
  fr: {
    nav: { work: 'Projets', about: 'À propos', expertise: 'Ce que je construis', contact: 'Contact' },
    hero: {
      eyebrow: 'Développeur logiciel · Web & Mobile · France',
      titleA: 'Des produits numériques',
      titleB: 'pensés pour le réel.',
      body: "Je conçois et développe des sites, applications web, expériences mobiles et logiciels utiles, avec un intérêt particulier pour l’EdTech, la mobilité et les usages concrets.",
      primary: 'Découvrir mes projets',
      secondary: 'Me contacter',
      availability: 'Ouvert aux opportunités, collaborations et projets sélectionnés.',
    },
    work: {
      eyebrow: 'Projets phares',
      title: 'Deux produits, deux univers.',
      body: "CTCR Trainer et Cosmify illustrent deux facettes de mon travail : une plateforme d’apprentissage née d’un besoin concret et une application desktop pensée comme un véritable produit utilisateur.",
      all: 'Voir tous les projets',
      caseStudy: 'Découvrir le projet',
    },
    build: {
      eyebrow: 'Ce que je construis',
      title: 'Des produits web, mobiles et desktop.',
      body: "De l’idée à la mise en ligne, je peux intervenir sur la conception, l’expérience utilisateur, l’interface, le développement, l’intégration et l’évolution du produit.",
      cards: [
        ['01', 'Conception produit', "Transformer une idée, un besoin ou un processus en parcours clair, en interface cohérente et en produit réellement utilisable."],
        ['02', 'Web & mobile', "Sites, applications web et expériences mobiles conçus pour être rapides, lisibles et agréables à utiliser sur chaque écran."],
        ['03', 'Applications & outils métier', "Applications desktop, outils internes et produits adaptés à des contextes précis, avec une affinité particulière pour l’EdTech et la mobilité."],
      ],
    },
    about: {
      eyebrow: 'Un parcours hybride',
      title: 'Développeur, et aussi conducteur professionnel.',
      p1: "Formé à la conception et au développement d’applications, j’ai travaillé en environnement professionnel et je continue à construire mes propres produits web, mobiles et logiciels.",
      p2: "En 2026, j’ai également obtenu le titre professionnel de conducteur de transport en commun sur route. Le transport est aujourd’hui un second univers professionnel, pas un virage hors de la tech.",
      note: "Cette double casquette nourrit naturellement certaines idées autour de la mobilité, de la formation et des outils métier, tout en gardant mon travail de développeur volontairement généraliste.",
    },
    experience: {
      eyebrow: 'Expérience',
      title: 'Trois contextes, trois façons de construire.',
      body: "Autonomie en ingénierie, produit grand public multi-écrans et conception collaborative : ces expériences couvrent des façons très différentes d’aborder un produit numérique.",
    },
    stack: {
      eyebrow: 'Outils & technologies',
      title: 'Un socle polyvalent.',
      body: "Front-end, backend, données, desktop et expériences interactives : j’utilise un ensemble de technologies qui me permet de passer de l’interface au produit complet.",
      current: 'Technologies principales',
      next: 'À approfondir ensuite',
      nextBody: "pour prolonger naturellement React et TypeScript vers des applications mobiles natives.",
      creative: 'Design & création',
      creativeTitle: 'Au-delà du code.',
      creativeBody: "Je travaille aussi autour du design d’interface et de l’image, avec un intérêt plus large pour la vidéo et la musique. Figma, Photoshop et Inkscape sont les outils créatifs que je souhaite mettre en avant ici.",
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Une idée ou une opportunité ?',
      body: "Un projet, une opportunité ou une collaboration ? Quelques lignes suffisent pour commencer.",
      name: 'Nom',
      email: 'Email',
      subject: 'Objet',
      message: 'Message',
      send: 'Envoyer le message',
      note: 'Vous pouvez aussi me contacter directement par email.',
      success: 'Message envoyé. Merci — je vous répondrai dès que possible.',
    },
    footer: { tagline: 'Développeur logiciel, web & mobile · France', legal: 'Tous droits réservés.' },
    projects: {
      title: 'Projets',
      intro: 'Chaque projet est présenté avec son contexte, sa conception, ses fonctionnalités et les choix techniques qui l’ont façonné.',
      empty: 'Aucun projet publié pour le moment.',
    },
    project: { back: 'Retour aux projets', context: 'Le projet', stack: 'Technologies', links: 'Liens', preview: 'Aperçu du produit', gallery: 'Captures du produit', live: "Ouvrir l'application", github: 'Voir sur GitHub' },
  },
  en: {
    nav: { work: 'Work', about: 'About', expertise: 'What I build', contact: 'Contact' },
    hero: {
      eyebrow: 'Software, Web & Mobile Developer · France',
      titleA: 'Digital products',
      titleB: 'built for the real world.',
      body: 'I design and build useful web, mobile and software products, with a particular interest in EdTech, mobility and tools shaped around real-world needs.',
      primary: 'Explore my work',
      secondary: 'Contact me',
      availability: 'Open to opportunities, collaborations and selected projects.',
    },
    work: {
      eyebrow: 'Selected work',
      title: 'Two products, two different worlds.',
      body: 'CTCR Trainer and Cosmify show two sides of my work: a learning platform born from a real need and a desktop application designed as a complete user product.',
      all: 'View all projects',
      caseStudy: 'View case study',
    },
    build: {
      eyebrow: 'What I build',
      title: 'Web, mobile and desktop products.',
      body: 'I can work from product framing to deployment: user flows, interface design, development, integration and product evolution.',
      cards: [
        ['01', 'Product design', 'Turn an idea, need or process into a clear flow, a coherent interface and a genuinely usable product.'],
        ['02', 'Web & mobile', 'Websites, web applications and mobile experiences designed to stay fast, clear and enjoyable on every screen.'],
        ['03', 'Applications & business tools', 'Desktop applications, internal tools and products shaped around specific contexts, with a particular interest in EdTech and mobility.'],
      ],
    },
    about: {
      eyebrow: 'A hybrid path',
      title: 'Developer, and also a professional coach driver.',
      p1: 'Trained in application design and development, I have worked in professional software environments and continue to build my own web, mobile and software products.',
      p2: 'In 2026, I also qualified as a professional public transport and coach driver. Transport is now a second professional world for me, not a move away from tech.',
      note: 'That combination naturally feeds some ideas around mobility, learning and field tools while keeping my development work deliberately broad.',
    },
    experience: {
      eyebrow: 'Experience',
      title: 'Three contexts, three ways of building.',
      body: 'Independent engineering work, a large-scale multi-screen consumer product and collaborative product design: three very different ways of approaching digital products.',
    },
    stack: {
      eyebrow: 'Tools & technologies',
      title: 'A versatile toolkit.',
      body: 'Across front-end, backend, data, desktop and interactive experiences, I use a focused set of technologies that lets me move from interface to complete product.',
      current: 'Core technologies',
      next: 'Next to deepen',
      nextBody: 'to extend React and TypeScript naturally into native mobile applications.',
      creative: 'Design & creative',
      creativeTitle: 'Beyond code.',
      creativeBody: 'I also work around interface design and imagery, with a broader interest in video and music. Figma, Photoshop and Inkscape are the creative tools I want to highlight here.',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Have an idea or an opportunity?',
      body: 'A project, an opportunity or a collaboration? A few lines are enough to get started.',
      name: 'Name',
      email: 'Email',
      subject: 'Subject',
      message: 'Message',
      send: 'Send message',
      note: 'You can also reach me directly by email.',
      success: 'Message sent. Thank you — I will get back to you as soon as possible.',
    },
    footer: { tagline: 'Software, Web & Mobile Developer · France', legal: 'All rights reserved.' },
    projects: {
      title: 'Projects',
      intro: 'Each project is presented through its context, product design, key features and the technical choices that shaped it.',
      empty: 'No projects published yet.',
    },
    project: { back: 'Back to projects', context: 'The project', stack: 'Technologies', links: 'Links', preview: 'Product preview', gallery: 'Product gallery', live: 'Open live product', github: 'View on GitHub' },
  },
} as const;

export function t(locale: Locale) {
  return ui[locale];
}

export function alternateLocale(locale: Locale): Locale {
  return locale === 'fr' ? 'en' : 'fr';
}

export function localizePath(pathname: string, locale: Locale) {
  const withoutLocale = pathname.replace(/^\/(fr|en)(?=\/|$)/, '');
  const normalized = withoutLocale === '' ? '/' : withoutLocale;
  return `/${locale}${normalized}`.replace(/\/+/g, '/');
}
