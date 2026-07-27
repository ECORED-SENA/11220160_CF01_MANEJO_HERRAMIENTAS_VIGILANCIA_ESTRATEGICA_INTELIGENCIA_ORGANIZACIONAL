<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>

</template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'El ciclo de la inteligencia en acción',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> fortalecer la capacidad analítica del aprendiz para planificar y ejecutar procesos de vigilancia estratégica e inteligencia organizacional, mediante la apropiación de conceptos técnicos, la definición de roles de equipo y la aplicación de herramientas metodológicas que permitan transformar los datos del entorno en información útil para la toma de decisiones gerenciales, con menor incertidumbre y riesgo.',
      barajarPreguntas: false,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es la principal diferencia entre la Vigilancia Estratégica (VE) y la Inteligencia Organizacional (IO)?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La VE se enfoca en decisiones operativas inmediatas y la IO solo recopila los datos internos sin analizarlos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La VE capta información del exterior de forma sistemática y la IO la transforma en decisiones estratégicas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Ambas disciplinas son equivalentes y se aplican únicamente en procesos tecnológicos y en el área de sistemas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La VE funciona como una consulta ocasional de fuentes y la IO organiza archivos sin apoyar decisiones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. <em>Board</em> del <em>software</em> EAGLE.',
        },
        {
          id: 2,
          texto:
            '¿Qué norma técnica internacional se menciona como referente para implantar un Sistema de Gestión de Vigilancia e Inteligencia?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'ISO 9001',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'IEEE 802.11',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'UNE 166006',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'ISO 14001',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué tipo de vigilancia se centra exclusivamente en los avances científicos y las innovaciones técnicas que pueden disrumpir un sector?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Vigilancia del entorno.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Vigilancia Competitiva.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Vigilancia Comercial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Vigilancia Tecnológica.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            'Si una empresa decide rastrear sistemáticamente las estrategias de precios y los movimientos corporativos de sus rivales, ¿qué tipo de vigilancia está ejecutando?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Vigilancia Competitiva.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Vigilancia de suministro.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Vigilancia de la legalidad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Vigilancia de patentes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Cuál es el objetivo principal de la Vigilancia Comercial?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Analizar la legislación tributaria y los cambios en la política de importaciones y políticas aduaneras.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Estudiar las tendencias de consumo, necesidades de los usuarios y solvencia de proveedores.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Buscar patentes en la base de datos de la Oficina Europea de Patentes y consultar registros web.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Evaluar las capacidades financieras internas, los niveles de endeudamiento y la liquidez.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Cómo se denominan las temáticas específicas o variables críticas en las cuales una organización debe concentrar sus recursos de búsqueda?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Factores de Éxito Comercial (FEC)',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Variables de Búsqueda Aleatoria (VBA)',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Factores Críticos de Vigilancia (FCV)',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Indicadores de Gestión Externa (IGE)',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿En qué fase del ciclo de inteligencia se filtran, categorizan y evalúan los datos crudos para convertirlos en información de valor?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Búsqueda y captura.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Planeación y dirección.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Toma de las decisiones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Procesamiento y análisis.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Cuál es la responsabilidad principal del rol denominado "Vigía" (Scout)?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Validar técnicamente si una patente tiene aplicación práctica.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Parametrizar herramientas tecnológicas y ejecutar ecuaciones de búsqueda.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Realizar el cruce de información para la toma de decisiones finales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Aprobar el presupuesto financiero para la compra de bases de datos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué rol en el equipo de vigilancia actúa como un filtro de calidad para descartar los "falsos positivos" y mitigar la infoxicación?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El Profesional.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El Gerente General.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El Experto.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'El Vigía.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            'Dentro del Sistema PREVIOS, ¿cuál es la función de la "Bitácora de búsqueda"?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Registrar la aplicabilidad organizacional de los hallazgos encontrados y establecer su nivel de relevancia.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Documentar la fecha, el motor de búsqueda y la ecuación booleana utilizada para garantizar trazabilidad.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Definir los objetivos generales, el alcance temático y el marco geográfico establecido para el proceso.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Presentar los resultados finales a la junta directiva mediante un cronograma de actividades y responsables.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            '¿Qué es la "Deep Web académica" en el contexto de la vigilancia?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Un sitio ilegal destinado a descargar programas académicos gratuitos sin licencias ni controles de seguridad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La parte superficial de internet, indexada por buscadores comunes como Google, Bing y otros motores generales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Ecosistema de bases de datos profundas y repositorios especializados no indexados por buscadores comunes.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Una red social especializada en la publicación de vacantes, perfiles laborales y ofertas de empresas competidoras.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            '¿Por qué es fundamental el uso de tesauros en la identificación de palabras clave?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Porque permiten traducir el lenguaje comercial a vocabularios técnicos controlados y estandarizados.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Porque facilita la organización del cronograma y la distribución de actividades entre los integrantes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Porque permite acceder a contenidos restringidos y superar los muros de pago de plataformas académicas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Porque impide que el equipo emplee términos en inglés u otros idiomas durante la búsqueda de información.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            '¿Qué herramienta se recomienda para la elaboración del cronograma de un proyecto de vigilancia?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Análisis DOFA.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Rejilla de vigilancia.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Mapa de empatía.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Diagrama de Gantt.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            '¿Cuál de los siguientes es un criterio de filtrado para controlar el volumen de información y evitar el ruido documental?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Filtro según la reputación del responsable de la vigía.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Filtro cronológico (ej. limitar a los últimos 3 o 5 años).',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Filtro según el color de la interfaz de búsqueda utilizada.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Filtro según la velocidad de descarga del navegador utilizado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            '¿Cuál es el instrumento que funciona como "puente" entre los saberes de proceso y la toma de decisiones al consignar la aplicabilidad del hallazgo?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ficha de registro del proyecto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Bitácora de búsqueda algorítmica.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Rejilla de vigilancia.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Tesauro de la UNESCO.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            'Caso Agroindustria: una cooperativa cacaotera detecta que la Unión Europea exige empaques compostables. El Vigía encuentra 500 tipos de biopolímeros, pero el Experto (ingeniero agrónomo) los descarta casi todos porque requieren refrigeración constante, algo imposible en sus fincas. ¿Qué concepto metodológico evitó que la empresa invirtiera erróneamente en esos materiales?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La exhaustividad del Vigía al recolectar datos masivos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El filtro de calidad basado en la experiencia técnica del Experto.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El uso de una base de datos de patentes gratuita.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La aplicación de un filtro cronológico de 10 años.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            'Una empresa busca innovar en prótesis 3D. El equipo decide usar la ecuación de búsqueda "Additive Manufacturing" AND "Prosthesis" en lugar de "prótesis de plástico". ¿Cuál es la razón estratégica de esta decisión?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Evitar que los competidores locales identifiquen los términos técnicos empleados durante la búsqueda.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Reducir el costo de suscripción a la base de datos mediante el uso de términos técnicos en inglés.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Adaptarse al software de búsqueda, debido a que solo procesa ecuaciones formuladas en idioma inglés.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Utilizar términos técnicos y el idioma estándar de la literatura científica para mejorar la precisión.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            'En una ferretería, tras realizar vigilancia comercial, la gerencia descubre que los clientes abandonan el carrito de compras por costos ocultos de envío. Cruzan esta información con la normativa de la DIAN sobre facturación. ¿Qué fase del ciclo de inteligencia están ejecutando cuando deciden contratar un desarrollo a medida que incluya cálculo de fletes y certificación de la DIAN?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Búsqueda y captura de datos primarios para el análisis de venta.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Planeación estratégica del equipo multidisciplinario de trabajo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Inteligencia Organizacional para la toma de decisiones asertiva.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Elaboración de una ficha de registro y seguimiento del proyecto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            'Una PYME quiere iniciar vigilancia, pero no tiene presupuesto para suscripciones de pago. El consultor les sugiere enfocarse en bases de datos de patentes como Espacenet. ¿Cuál es la ventaja estratégica de esta fuente según el documento?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Permite copiar diseños y reproducir invenciones registradas sin reconocer la autoría ni respetar sus derechos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Ofrece información técnica detallada y gratuita debido a la obligación legal de los inventores de describir su innovación.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Es la única forma de acceder a noticias macroeconómicas verificadas y confiables sin tener que pagar suscripciones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Reemplaza la necesidad de contar con un experto en el equipo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            'Un analista de inteligencia deja la empresa repentinamente a mitad de un proyecto de vigilancia. El nuevo analista logra retomar la investigación exactamente donde se dejó, repitiendo las mismas búsquedas y obteniendo los mismos resultados. ¿Qué herramienta del Sistema PREVIOS permitió esta continuidad?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El cronograma en el Diagrama de Gantt con complementos de registros de detalles.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La Bitácora de búsqueda, que garantiza la reproducibilidad y trazabilidad algorítmica.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'La ficha de registro del proyecto, que resume sus objetivos, alcance y responsables.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El glosario de términos técnicos, que reúne los conceptos usados en la investigación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
