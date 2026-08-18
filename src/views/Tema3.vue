<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span 3
        h1 Fuentes de información y formatos de registro
      .row.align-items-center.mb-5
        .col-xl
          .box___style_1.color-1.fit___box_4(data-aos="fade-right")
            p.mb-0 Definidos el alcance y los recursos, el proceso continúa con la selección de fuentes y herramientas para recopilar y documentar información. El aprendiz podrá identificar fuentes científicas y comerciales confiables, y utilizar formatos institucionales que garanticen la trazabilidad y rigurosidad de la vigilancia estratégica.
        .col-xl-auto.d-none.d-xl-block(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t3/img1.svg', alt='').m-auto
      #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.1 Ecosistema de buscadores: concepto, clasificación y utilidad estratégica
      p En inteligencia organizacional, los buscadores comerciales resultan insuficientes para una vigilancia rigurosa, porque solo indexan la web superficial. Gran parte de la información académica, técnica y comercial permanece en bases profundas, por lo que deben emplearse ecosistemas de búsqueda especializados.
      p.mb-5 Para superar esta limitación, se debe dominar el concepto y la clasificación de los ecosistemas de búsqueda, los cuales se dividen en tres grandes categorías estratégicas:
      .bg___slider.mb-0
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Buscadores genéricos y metabuscadores 
                  p.mb-0 Son el punto de partida exploratorio. Sirven para mapear el estado general del arte, identificar competidores evidentes o noticias macroeconómicas. Sin embargo, su utilidad estratégica es baja debido a la alta presencia de "ruido" informativo y fuentes no verificadas.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img2.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Buscadores especializados y académicos
                  p.mb-0 Plataformas diseñadas para indexar literatura científica, tesis y artículos revisados por pares (ej. Google Scholar, Scopus, Web of Science, PubMed). Su utilidad estratégica radica en la validación del conocimiento; permiten al equipo de vigilancia confirmar si una nueva tecnología está sustentada por investigaciones sólidas o si es una simple especulación comercial.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img3.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Bases de datos de patentes
                  p.mb-0 Constituyen una fuente fundamental para la vigilancia tecnológica. Plataformas como #[i Espacenet] (Oficina Europea de Patentes), #[i WIPO PATENTSCOPE] (Organización Mundial de la Propiedad Intelectual) o la base de datos de la SIC en Colombia (<a href="https://sipi.sic.gov.co/sipi/Extra" target="_blank" class="link___1">https://sipi.sic.gov.co/sipi/Extra</a>) albergan la información técnica más avanzada del mundo. Su utilidad es invaluable, ya que la legislación obliga a los inventores a describir detalladamente el funcionamiento de sus innovaciones para obtener protección, lo que las convierte en una fuente de inteligencia tecnológica predictiva inigualable.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img4.png', alt='' style="max-width: 500px").m-auto
      Separador
      #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.2 Identificación de bases de datos y fuentes de información delimitadas
      p.mb-5 La calidad de las decisiones depende de fuentes pertinentes, confiables y obtenidas mediante criterios técnicos, legales y éticos. A continuación, se presentan los criterios para seleccionar y utilizar fuentes:
      .bg___slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Calidad de la información
                  p La selección de fuentes no debe realizarse de manera aleatoria. El experto evalúa su pertinencia, actualidad, confiabilidad y relación con los objetivos del proyecto.
                  p.mb-0 Una fuente inadecuada puede generar análisis deficientes y afectar la calidad de las decisiones organizacionales.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img5.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Fuentes primarias
                  p Contienen información original y directa, como patentes, normas técnicas, tesis doctorales, investigaciones y encuestas.
                  p.mb-0 Estas fuentes aportan datos de primera mano y permiten fundamentar el análisis con evidencias específicas.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img6.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Fuentes secundarias
                  p Integran, interpretan o sintetizan información procedente de fuentes primarias. Entre ellas se encuentran los informes sectoriales, las revisiones sistemáticas y las noticias financieras.
                  p.mb-0 Su utilidad consiste en contextualizar tendencias, comparar resultados y facilitar la comprensión del entorno.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img7.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Acceso legal y ético
                  p La inteligencia competitiva debe diferenciarse del espionaje industrial, considerado una práctica ilegal. 
                  p.mb-0 La información debe obtenerse mediante procedimientos legítimos y respetuosos de los derechos de autor (Aguirre, 2014).
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img8.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Condiciones de uso
                  p La recolección debe limitarse a contenidos de dominio público, publicaciones de acceso abierto o bases de datos contratadas legalmente.
                  p.mb-0 También deben respetarse las licencias Creative Commons, los derechos de autor y las condiciones establecidas por cada fuente.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img9.png', alt='' style="max-width: 500px").m-auto
      p.mb-0 La selección rigurosa y el acceso legal a las fuentes fortalecen la confiabilidad del proceso y reducen riesgos para la organización.
      Separador
      #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.3 Instrumentos metodológicos (Sistema PREVIOS)
      p.mb-5 Para evitar que los hallazgos se conviertan en datos aislados sin contexto, se requiere estandarizar la documentación. En este marco, el Sistema de Prospectiva, Vigilancia e Inteligencia Organizacional (#[b Sistema PREVIOS]) establece una arquitectura documental de obligatorio cumplimiento que estructura el registro metódico del proyecto. Los tres formatos cardinales que rigen esta etapa son:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t3/img10.png", alt="" ).m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Ficha de registro del proyecto").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Funciona como el "contrato" metodológico de la vigilancia. Es el documento maestro que recopila los Factores Críticos de Vigilancia (FCV), el objetivo, el cronograma y el equipo de trabajo definido en la fase de planeación. Delimita qué áreas geográficas, idiomas y periodos de tiempo serán abordados, sirviendo como carta de navegación para no desviar los recursos institucionales hacia temáticas irrelevantes.
            .row(titulo="Bitácora de búsqueda").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Es el equivalente al cuaderno de laboratorio de un científico. En este formato se registra con exactitud la fecha de la búsqueda, el motor o base de datos utilizada, la ecuación booleana ejecutada y la cantidad de resultados obtenidos (ej. #[i PubMed], 24/05/2026, "#[i Blockchain]" #[i AND] "#[i Supply Chain]", 124 resultados). La bitácora de búsqueda garantiza la #[b reproducibilidad]; si un investigador debe ser reemplazado, el nuevo analista puede retomar el trabajo exactamente donde se dejó, garantizando la trazabilidad algorítmica del proceso.
            .row(titulo="Rejilla de vigilancia").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Es la matriz de extracción de conocimiento. Una vez que el experto filtra y lee los documentos capturados, debe extraer los datos de valor y consignarlos en la rejilla. Generalmente, este formato tabular incluye campos como: Título del hallazgo, autor/inventor, año, resumen técnico, y el campo más importante: #[b aplicabilidad o impacto organizacional]. La rejilla es el puente entre los saberes de proceso y la toma de decisiones.
      p El uso articulado de estos instrumentos fortalece la rigurosidad metodológica y transforma datos aislados en información útil para la organización.
      p.mb-5 Una búsqueda sin registro puede ocasionar pérdida de información y duplicación de esfuerzos. En el siguiente video, se profundizará en la función de los instrumentos del Sistema PREVIOS y en el momento del proceso en que debe utilizarse cada formato.
      figure(data-aos="zoom-in").mb-0
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/vFkXHuG4rD8" title="Del dato a la decisión instrumentos del Sistema PREVIOS" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption.fit___figcaption-video Video. Del dato a la decisión instrumentos del Sistema PREVIOS
      Separador
      #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.4 Introducción a la identificación de palabras clave y criterios de filtrado
      p.mb-5 La selección de términos técnicos y criterios de filtrado permite reducir la ambigüedad y recuperar información pertinente para la vigilancia estratégica. A continuación, se presentan los elementos que orientan una búsqueda precisa.
      .bg___slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Polisemia y sinonimia
                  p El lenguaje técnico puede generar dificultades durante la búsqueda. La polisemia ocurre cuando una palabra tiene varios significados, mientras que la sinonimia se presenta cuando diferentes términos representan un mismo concepto.
                  p.mb-0 Estas situaciones pueden aumentar el ruido documental o excluir información pertinente.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img11.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Palabras clave
                  p.mb-0 La necesidad organizacional debe transformarse en palabras clave técnicas y científicas. Esto implica reemplazar expresiones generales o comerciales por términos especializados que sean utilizados en bases de datos académicas, tecnológicas y de patentes.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img12.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Tesauros
                  p Los tesauros son vocabularios controlados y estructurados que permiten identificar términos normalizados, relaciones conceptuales y sinónimos.
                  p.mb-0 Entre los ejemplos mencionados se encuentran el Tesauro de la UNESCO y MeSH, utilizado en el campo de la salud.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img13.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Términos en inglés
                  p.mb-0 Las palabras clave deben complementarse con sus equivalentes en inglés, debido a que una parte importante de la producción científica y tecnológica mundial se publica en este idioma.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img14.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 Para controlar el volumen de información, se aplican criterios de filtrado preliminares. Estos son límites duros impuestos al buscador para evitar el ruido documental. Los criterios más comunes son:
      .row.justify-content-center.mb-5
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .box___style_5.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t3/img15.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Filtro cronológico
              p.mb-0.text-center Restringe los resultados a un periodo determinado, por ejemplo, los últimos tres o cinco años. Es especialmente útil en áreas con rápida obsolescencia, como la biotecnología y el desarrollo de #[i software].
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .box___style_5.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t3/img16.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Filtro geográfico
              p.mb-0.text-center Delimita la búsqueda a regiones con condiciones normativas, productivas o climáticas comparables con las de la organización.
        .col-xl-4.col-md-9(data-aos="zoom-in")
          .box___style_5.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-left")
                  img(src='@/assets/curso/temas/t3/img17.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Filtro por tipo de documento
              p.mb-0.text-center Limita los resultados a fuentes específicas, como artículos de investigación o patentes concedidas, y excluye documentos menos pertinentes, como reseñas o cartas al editor.
      p La aplicación de estos filtros reduce el ruido documental y concentra la búsqueda en información pertinente para el estudio.
      p.mb-5 Para evidenciar la articulación de estos saberes en el sector productivo, se analiza el caso de Bio AndinaTech S.A., una empresa manufacturera dedicada a la producción de órtesis y prótesis de rehabilitación física.
      .box___style_2.mb-0
        h5 Caso de uso aplicado al sector productivo: bio Andinatech S.A.
        .row.justify-content-center.align-items-center.mb-3
          .col-xl.mb-4.mb-lg-0
            .box___style_3.fit___box_2(data-aos="fade-right")
              p.mb-0 La gerencia advierte que la fabricación manual está perdiendo competitividad frente a las prótesis impresas en 3D en el mercado internacional, y deciden activar un proceso de vigilancia estratégica enfocado en la "Impresión 3D con materiales poliméricos de alta resistencia".
          .col-xl-auto.col-md-9(data-aos="fade-left")
            figure
              img(src='@/assets/curso/temas/t3/img18.png', alt='').m-auto
        p El caso se desarrolla mediante las siguientes fases metodológicas:
        .row.justify-content-center.mb-3
          .col-xl-10
            AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="zoom-in")
              .row(titulo="Uso de ecosistemas y bases de datos").ajuste-cajaAcordion.ajuste-vineta
                p.mb-3 El equipo designado descarta realizar búsquedas genéricas por los altos niveles de sesgo comercial. En su lugar, ingresan al ecosistema especializado. Para vigilar la tecnología y los diseños estructurales de las prótesis, acceden de manera gratuita (y legal) a la base de datos #[i Espacenet]. Para comprender si estos materiales poliméricos generan rechazo en el contacto prolongado con la piel de los pacientes, consultan literatura médica a través de #[i PubMed].
              .row(titulo="Identificación de palabras clave").ajuste-cajaAcordion.ajuste-vineta
                p.mb-3 El equipo comprende que "plástico para imprimir" es un término ambiguo y no científico. Utilizan tesauros y diccionarios técnicos para identificar que el concepto formal es "Ácido poliláctico" (#[i Polylactic] Acid o PLA), y "Fabricación aditiva" (#[i Additive Manufacturing]). Identifican que deben usar las siglas en inglés, ya que es el estándar internacional.
        p.mb-3 Seguidamente, se presenta la aplicación de los instrumentos metodológicos empleados:
        .row.justify-content-center.mb-3
          .col-xl-10
            AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="zoom-in")
              .row.align-items-center.justify-content-center(titulo="Ficha de registro").ajuste-cajaAcordion.ajuste-vineta
                .col-xl-7.mb-4.mb-lg-0
                  p.mb-0 En la ficha de registro del proyecto, delimitan que solo buscarán literatura publicada desde el año 2021 a la fecha (filtro cronológico) y únicamente en idioma inglés o español.
                .col-xl-5.col-md-9
                  figure
                    img(src='@/assets/curso/temas/t3/img19.png', alt='' style="width: 350px")
              .row.align-items-center.justify-content-center(titulo="Bitácora de búsqueda").ajuste-cajaAcordion.ajuste-vineta
                .col-xl-7.mb-4.mb-lg-0
                  p.mb-0 El aprendiz a cargo asume el rol de vigía y registra en la Bitácora de búsqueda cada paso: "Base de datos: Espacenet. Ecuación preliminar: '#[i Additive Manufacturing]' #[i AND] '#[i Prosthesis]'. Fecha: 28/05/2026. Hallazgos: 840 patentes".
                .col-xl-5.col-md-9
                  figure
                    img(src='@/assets/curso/temas/t3/img20.png', alt='' style="width: 350px")
              .row.align-items-center.justify-content-center(titulo="Rejilla de vigilancia").ajuste-cajaAcordion.ajuste-vineta
                .col-xl-7.mb-4.mb-lg-0
                  p.mb-0 El ingeniero biomédico, asumiendo el rol de experto, lee los resúmenes y extrae las tres patentes más relevantes, documentándolas en la rejilla de vigilancia. En la columna de Impacto Organizacional de la rejilla, el experto redacta: "La patente EP382910 describe un método para reforzar el filamento PLA con fibra de carbono, haciéndolo 30 % más ligero y 40 % más resistente que nuestro modelo actual de aluminio".
                .col-xl-5.col-md-9
                  figure
                    img(src='@/assets/curso/temas/t3/img21.png', alt='' style="width: 350px")
        p.mb-0 Gracias al estricto apego al método y la correcta selección de las fuentes de información, Bio AndinaTech S.A. logra acceder legalmente al estado del arte tecnológico mundial, preparándose para actualizar su línea de producción, mitigando los riesgos financieros y técnicos.

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
