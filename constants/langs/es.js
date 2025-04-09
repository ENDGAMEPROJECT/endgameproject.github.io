"use client";

export const es = {
  nav: {
    home: "Home",
    about: "Sobre [proyecto]",
    escaperooms: "Escaperooms",
    events: "Eventos y noticias",
    research: "Investigación e impacto",
  },
  header: {
    publicationstab: "Publicaciones",
  },
  home: {
    title: "",
    description:
      "Combatiendo la nueva desinformación con escaperooms educativas",
    "action-button": "CTA button",
    aboutSection: "Qué es ENDGAME",
    about: {
      title: "Sobre el proyecto",
      content:
        "ENDGAME is an innovative project aimed at ultivating critical thinking and responsible digital citizenship among European youth through educational escape rooms that simulate real-life scenarios of information consumption.",
    },
    mission: {
      title: "Objetivos",
      content: { // pasar a constants
        card1: { icon: "icon", title: "title", description: "description" },
        card2: { icon: "icon", title: "title", description: "description" },
        card3: { icon: "icon", title: "title", description: "description" },
        card4: { icon: "icon", title: "title", description: "description" },
        card5: { icon: "icon", title: "title", description: "description" },
      },
    },
    partners: {
      title: 'Quiénes somos',
      universities: {  // pasar a constants
        title: 'Universidades',
        card1: { icon: "icon", title: "title", description: "description" },
        card2: { icon: "icon", title: "title", description: "description" },
        card3: { icon: "icon", title: "title", description: "description" },
      },
      agencies: {
        title: "Agencias",
      },
    },
    latestContent: {
      title: "Novedades",
      events: {
        title: "News and events",
        button: "See all activity",
        event: {
          title: "Título de evento reciente",
          date: "12 de diciembre de 2025",
        },
      },
      research: {
        title: "Últimas publicaciones",
        button: "Ver todas las publicaciones",
      },
    },
  },

  research: {
    title: "Publicaciones",
    description:
      "Esta sección recopila las publicaciones del GING relacionadas con nuestras líneas de investigación. Puedes filtrar las publicaciones por texto, fecha, línea de investigación, o tipo de publicación.",
    publicationCards: {
      categories: {
        "article-journal": "Artículo de revista",
        "paper-conference": "Acta de congreso",
        book: "Libro",
        chapter: "Capítulo",
      },
    },
    "action-button": "Leer publicación",
    filter: {
      fieldTitle1: "Buscar",
      fieldTitle2: "Tipo de publicación",
      fieldTitle3: "Año",
      "article-journal": "Artículos de revista",
      "paper-conference": "Actas de congreso",
      book: "Libro",
      chapter: "Capítulo",
      document: "Documento",
      all: "Todos",
      text: "Resultados",
    },
    button: "Leer publicación",
    button2: "Ver más",
  },

  projects: {
    title: "Proyectos",
    description:
      "En esta sección puedes explorar los proyectos en los que estamos trabajando actualmente y proyectos pasados. Si lo deseas, puedes filtrar los proyectos según sus líneas de investigación o acceder a las páginas específicas de los proyectos.",
    button: "Detalles",
    researchLines: {
      data: "Datos",
      ai: "Inteligencia Artificial",
      "e-learning": "E-learning",
      videoconference: "Videoconferencia",
      computing: "Computación Fiable",
      other: "Otros",
      all: "Todo",
    },
    filter: {
      fieldTitle1: "Búsqueda por nombre",
      fieldTitle2: "Tipo de proyecto",
      all: "Todo",
      "national-project": "Proyecto nacional",
      "european-project": "Proyecto europeo",
      "private-project": "Proyecto privado",
    },
    card: {
      toggleMore: "Ver más",
      toggleLess: "Ver menos",
      button: "Publicaciones relacionadas",
    },
    type: {
      "european-project": "Proyecto europeo",
      "national-project": "Proyecto nacional",
      "private-project": "Proyecto privado",
    },
  },
  team: {
    title: "Equipo",
    professorCards: {
      roles: {
        professor: "Profesor Titular de Universidad",
        associate: "Profesor Contratado Doctor",
        phd: "Candidato de Doctorado",
        fulltec: "Técnico a Tiempo Completo",
        fullprofessor: "Catedrático de Universidad", // Full Professor
        assistant: "Profesor Ayudante Doctor",
        researcher: "Investigador",
        external: "Personal Externo",
      },
    },
  },

  footer: {
    title1: "Secciones",
    title2: "Síguenos en:",
    title3: "Colaboran",
    logoSub:
      "Redes Futuras para Centros de Datos y Empresas de Telecomunicaciones",
    titleRight: "Departamento de Ingeniería de sistemas telemáticos",
    titleRight2: "ETSI telecomunicación",
    email: "Correo de contacto:",
  },
};
