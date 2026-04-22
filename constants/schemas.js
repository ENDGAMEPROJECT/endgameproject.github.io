// Schema.org Structured Data para SEO semántico
// https://schema.org/

export const baseOrganizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  'name': 'ENDGAME Project',
  'url': 'https://endgameproject.github.io',
  'logo': 'https://endgameproject.github.io/assets/images/logos/endgame/png/logo_ENDGAME_main_darkBg.png',
  'description': 'Empowering citizens against online manipulation through digital literacy and critical thinking',
  'sameAs': [
    'https://x.com/endgame_project',
    'https://www.instagram.com/endgame.project'
  ],
  'foundingDate': '2025',
  'knowsAbout': [
    'Digital Literacy',
    'Misinformation Detection',
    'Dark Patterns',
    'Online Manipulation',
    'Critical Thinking',
    'Media Literacy'
  ]
};

export const homePageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  'name': 'ENDGAME - Empowering Citizens Against Online Manipulation',
  'url': 'https://endgameproject.github.io',
  'description': 'ENDGAME project develops tools and strategies to combat online manipulation through critical digital literacy',
  'publisher': baseOrganizationSchema,
  'author': baseOrganizationSchema
};

export const aboutPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  'name': 'About ENDGAME',
  'url': 'https://endgameproject.github.io/about',
  'description': 'Learn about ENDGAME project, our mission and partner universities',
  'mainEntity': baseOrganizationSchema
};

export const researchPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  'name': 'Research Publications - ENDGAME',
  'url': 'https://endgameproject.github.io/research',
  'description': 'Explore ENDGAME research publications and scientific contributions',
  'publisher': baseOrganizationSchema,
  'author': baseOrganizationSchema
};

export const eventsPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'EventSeries',
  'name': 'ENDGAME Events and Workshops',
  'url': 'https://endgameproject.github.io/events',
  'description': 'Discover ENDGAME workshops and participatory design activities across Europe',
  'organizer': baseOrganizationSchema
};

export const escapeRoomsPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'EducationalActivityBase',
  'name': 'ENDGAME Escape Rooms',
  'url': 'https://endgameproject.github.io/escaperooms',
  'description': 'Experience interactive educational escape rooms designed to teach critical thinking',
  'creator': baseOrganizationSchema
};

// Breadcrumb List Schema
export function createBreadcrumbSchema(breadcrumbs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': item.url
    }))
  };
}

// Event Schema para un evento específico
export function createEventSchema(event) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    'name': event.name,
    'description': event.description,
    'url': event.url,
    'startDate': event.startDate,
    'endDate': event.endDate,
    'eventStatus': 'https://schema.org/EventScheduled',
    'eventAttendanceMode': 'https://schema.org/MixedEventAttendanceMode',
    'location': {
      '@type': 'Place',
      'name': event.location,
      'address': {
        '@type': 'PostalAddress',
        'addressCountry': event.country
      }
    },
    'organizer': baseOrganizationSchema
  };
}

// Article Schema para publicaciones
export function createArticleSchema(article) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ScholarlyArticle',
    'headline': article.title,
    'description': article.abstract || article.description,
    'url': article.url,
    'author': {
      '@type': 'Person',
      'name': article.author
    },
    'datePublished': article.publishDate,
    'dateModified': article.modifiedDate || article.publishDate,
    'keywords': article.keywords,
    'publisher': baseOrganizationSchema
  };
}

// Course Schema para Escape Rooms (como cursos educativos)
export function createCourseSchema(course) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    'name': course.name,
    'description': course.description,
    'url': course.url,
    'provider': baseOrganizationSchema,
    'educationalLevel': 'https://schema.org/HighSchoolOrCollege',
    'learningResourceType': 'Interactive Game',
    'teaches': course.teaches || [
      'Critical Thinking',
      'Digital Literacy',
      'Manipulation Detection',
      'Media Literacy'
    ]
  };
}
