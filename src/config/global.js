export default {
  global: {
    Name: 'Fundamentos y planeación de la vigilancia e inteligencia organizacional',
    Description:
      'Este componente formativo introduce al aprendiz en la estructuración metodológica de los procesos de vigilancia e inteligencia organizacional. Aborda los fundamentos conceptuales, la identificación de necesidades corporativas y la conformación de equipos de trabajo. Asimismo, fortalece habilidades para planificar el ciclo de vigilancia, delimitar el alcance del estudio y diseñar herramientas de recolección de información, con el fin de establecer una base sólida para el análisis del entorno competitivo.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.png',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.png',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo:
          'Teoría de vigilancia e inteligencia y reconocimiento del entorno organizacional',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo:
              'Conceptualización de la vigilancia estratégica y la inteligencia organizacional',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Tipologías de la vigilancia',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo:
              'Diagnóstico del entorno: reconocimiento de oportunidades, problemas y necesidades de la organización',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Planeación estratégica y roles del proceso',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Fases metodológicas del ciclo de vigilancia',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo:
              'Identificación y asignación de recursos y elaboración del cronograma',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Roles y responsabilidades en el equipo de vigilancia',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo:
              'Delimitación del alcance y priorización de la temática de estudio',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Fuentes de información y formatos de registro',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo:
              'Ecosistema de buscadores: concepto, clasificación y utilidad estratégica',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo:
              'Identificación de bases de datos y fuentes de información delimitadas',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Instrumentos metodológicos (Sistema PREVIOS)',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo:
              'Introducción a la identificación de palabras clave y criterios de filtrado',
            hash: 't_3_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Bitácora de búsqueda',
      significado:
        'instrumento metodológico que documenta detalladamente las bases de datos, fechas y ecuaciones utilizadas para garantizar la reproducibilidad del proceso.',
    },
    {
      termino: '<i>Blockchain</i>',
      significado:
        'tecnología de registro descentralizado e inmutable que garantiza la trazabilidad, transparencia y seguridad de los datos en transacciones digitales.',
    },
    {
      termino: 'Estado del arte',
      significado:
        'nivel más avanzado de desarrollo alcanzado en un momento determinado sobre una tecnología, investigación o disciplina científica a nivel global.',
    },
    {
      termino: 'Factor Crítico de Vigilancia (FCV)',
      significado:
        'temática, tecnología o variable de alto impacto estratégico a la cual la organización decide destinar formalmente recursos de observación y análisis.',
    },
    {
      termino: 'Infoxicación',
      significado:
        'sobrecarga de información que dificulta la capacidad de análisis y toma de decisiones debido al exceso de datos irrelevantes o no filtrados.',
    },
    {
      termino: 'Inteligencia Organizacional',
      significado:
        'capacidad de una empresa para procesar y contextualizar la información estratégica, transformándola en decisiones gerenciales con mínimo riesgo.',
    },
    {
      termino: 'Licencias <i>Creative Commons</i>',
      significado:
        'modelos de contratos legales de alcance internacional que otorgan permisos estandarizados para compartir, usar y modificar obras bajo derechos de autor.',
    },
    {
      termino: 'Open Access',
      significado:
        'movimiento internacional que promueve el acceso libre, gratuito y sin restricciones a la literatura científica, técnica y académica a través de internet.',
    },
    {
      termino: 'Operador booleano',
      significado:
        'término lógico (AND, OR, NOT) utilizado para conectar palabras clave y estructurar ecuaciones precisas en los motores de búsqueda y bases de datos.',
    },
    {
      termino: 'Rejilla de vigilancia',
      significado:
        'instrumento metodológico que organiza los hallazgos relevantes e incorpora datos como título, autor, año, resumen técnico y aplicabilidad organizacional.',
    },
    {
      termino: 'Reproducibilidad',
      significado:
        'posibilidad de repetir una búsqueda bajo las mismas condiciones metodológicas y obtener resultados equivalentes o verificables.',
    },
    {
      termino: 'Sistemas de Gestión de Contenidos (CMS)',
      significado:
        'plataforma de <i>software</i> que permite a los usuarios crear, administrar y publicar contenido digital de forma estructurada en entornos web.',
    },
    {
      termino: 'Tesauros',
      significado:
        'vocabularios técnicos, controlados y jerarquizados que agrupan palabras clave y sinónimos para estandarizar la búsqueda y recuperación de información.',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'capacidad de reconstruir y comprobar las etapas, fuentes, criterios y decisiones aplicadas durante un proceso de vigilancia estratégica.',
    },
    {
      termino: 'Vigilancia estratégica',
      significado:
        'proceso sistemático y permanente de captura, análisis y transformación de información del entorno externo e interno en conocimiento de alto valor.',
    },
  ],
  referencias: [
    {
      referencia:
        'Aguirre, J. (2014). Inteligencia estratégica: un sistema para gestionar la innovación. Estudios gerenciales. Journal of management and economics for Iberoamerica. Obtenido de ',
      link: 'https://www.icesi.edu.co/revistas/index.php/estudios_gerenciales/article/download/1933/html_12/6452?inline=1',
    },
    {
      referencia:
        'Arboleda Jaramillo, C., Pérez Sánchez, E., Quirama, U., & Sepúlveda Aguirre, J. (2018). Análisis de los factores críticos de vigilancia para la competitividad de una empresa de base tecnológica. Revista Virtual Universidad Católica del Norte, (55), 2 – 21. Obtenido de',
      link: 'https://revistavirtual.ucn.edu.co/index.php/RevistaUCN/article/download/993/1439/4205',
    },
    {
      referencia:
        'Asociación Española para la Calidad. (4 de Enero de 2024). QAEC. Obtenido de Vigilancia tecnológica:',
      link: 'https://www.aec.es/conocimiento/centro-del-conocimiento/vigilancia-tecnologica/',
    },
    {
      referencia:
        'Cepeda Palacio, S. (2012). La crítica a las marcas en el período 1991-2010 : una investigación documental. Obtenido de Universidad EAFIT:',
      link: 'https://repository.eafit.edu.co/entities/publication/b6e1adca-d9b5-49b9-a22c-2127819b7fe8',
    },
    {
      referencia:
        'EQA - España. (2025). UNE 166006 – Sistema de Gestión de I+D+i: Vigilancia e inteligencia. Obtenido de EQA: ',
      link: 'https://eqa.es/certificacion-sistemas/une-166006',
    },
    {
      referencia:
        'Palaéz Baena, E. (2023). Repositorio trabajo de grados UPB. Obtenido de Universidad Pontificia Bolibariana - Escuel de ingenierías:',
      link: 'https://repository.upb.edu.co/server/api/core/bitstreams/dd8e9d4e-1526-4ee4-bfbc-c9178a291a3d/content',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06. Responsable del Ecosistema Virtual de Recursos Educativos Digitales ',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción Huila',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Experto temático',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Paula Marcela Vidal Quintero',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carlos Julian Ramirez Benitez',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Robinson Javier Ordoñez Barreiro',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Maria Carolina Tamayo Lopez',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Ricardo Oliveros Zambrano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
