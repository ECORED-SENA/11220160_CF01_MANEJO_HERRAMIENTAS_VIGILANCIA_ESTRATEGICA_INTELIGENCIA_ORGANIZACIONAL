<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span 2
        h1 Planeación estratégica y roles del proceso
      .row.align-items-center.mb-5
        .col-xl
          .box___style_1.color-1.fit___box_2(data-aos="fade-right")
            p.mb-0 El proceso formativo avanza hacia la planificación operativa de la vigilancia estratégica. El aprendiz podrá estructurar el ciclo, conformar equipos, asignar recursos y delimitar el proyecto, fortaleciendo el “saber hacer” previo a la recolección de datos.
        .col-xl-auto.d-none.d-xl-block(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t2/img1.svg', alt='').m-auto
      .color___box_2
        .px-5
          #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 2.1 Fases metodológicas del ciclo de vigilancia
          p.mb-5 La vigilancia e inteligencia organizacional se desarrolla mediante el ciclo de inteligencia, un modelo iterativo que transforma datos dispersos en decisiones y reconoce la búsqueda como una etapa del proceso. Este ciclo, avalado por normativas de gestión de la innovación, se compone generalmente de cinco fases interdependientes:
          .row.justify-content-center.mb-0
            .col-lg-10
              PasosA.color-acento-contenido(tipo="l").mb-3
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Planeación y dirección
                    p.mb-0 Constituye la fase cero. Aquí se identifican las necesidades (factores críticos de vigilancia), se establecen los objetivos, se asignan los recursos y se definen los entregables esperados.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img2.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img3.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Búsqueda y captura
                    p.mb-0 Se ejecutan ecuaciones de búsqueda en fuentes científicas, comerciales, normativas y tecnológicas.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Procesamiento y análisis
                    p.mb-0 Los datos recopilados se filtran, clasifican, contrastan y valoran según su pertinencia.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img4.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img5.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Difusión y comunicación
                    p.mb-0 La información procesada se empaqueta en productos de inteligencia (boletines, informes estratégicos, alertas) adaptados al perfil del usuario final (gerencia, área de I+D, marketing).
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Toma de decisiones y retroalimentación
                    p.mb-0 La gerencia utiliza los insumos para accionar estrategias. A su vez, los resultados de estas decisiones retroalimentan el ciclo, generando nuevas necesidades de información y reiniciando el proceso de planeación.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img6.png', alt='' style="width: 300px").m-auto
              .box___style_4(data-aos="zoom-in")
                p.mb-0 Es importante comprender que este ciclo no es estrictamente lineal. Si durante la fase de análisis se descubre un vacío de información crítico, el equipo debe tener la agilidad metodológica para retroceder a la fase de búsqueda sin alterar la integridad del proyecto global.
      Separador
      #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.2 Identificación y asignación de recursos y elaboración del cronograma
      p.mb-5 Un proyecto de vigilancia estratégica sin recursos asignados ni tiempos definidos resulta inviable. Por ello, la planeación requiere identificar y presupuestar de manera realista los elementos necesarios para desarrollar el ciclo. El profesional debe organizar esta asignación en tres dimensiones fundamentales (Cepeda Palacio, 2012). Estas son:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t2/img7.png", alt="" ).m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Recursos humanos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Comprenden las personas asignadas al proyecto, sus competencias, responsabilidades y tiempo de dedicación. Los integrantes deben disponer de espacios protegidos en sus agendas para evitar que las actividades operativas interrumpan la vigilancia estratégica.
            .row(titulo="Recursos tecnológicos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Incluyen los equipos y programas necesarios para recopilar, almacenar y procesar información. Pueden incorporar computadores, gestores bibliográficos como Mendeley o Zotero, plataformas de minería de textos y motores de búsqueda semántica.
            .row(titulo="Recursos financieros").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Corresponden al presupuesto destinado a suscripciones, licencias, informes sectoriales y bases de datos especializadas. Aunque existen fuentes de acceso abierto, parte de la información estratégica puede requerir servicios pagos.
            .row(titulo="Cronograma").ajuste-cajaAcordion.ajuste-vineta
              p Organiza las actividades, responsables, hitos y fechas de cada fase. El diagrama de Gantt permite distribuir el trabajo y asegurar que los resultados sean entregados antes de que finalice la oportunidad estratégica.
              p.mb-3 La asignación de estos recursos debe realizarse de manera articulada y realista para sostener el ciclo de vigilancia (Cepeda Palacio, 2012).
      .row.justify-content-center.mb-0
        .col-lg-10
          .box___style_4(data-aos="zoom-in")
            p.mb-0 Una planeación adecuada de recursos y tiempos reduce interrupciones, facilita el seguimiento del proyecto y favorece la entrega oportuna de información para la toma de decisiones.
      Separador
      #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.3 Roles y responsabilidades en el equipo de vigilancia
      p.mb-5 La complejidad del entorno actual hace imposible que un proceso integral de inteligencia sea ejecutado por un "llanero solitario". La calidad de los resultados depende directamente de la sinergia de un equipo multidisciplinario. En la doctrina de la inteligencia organizacional, se han estandarizado tres roles fundamentales que el aprendiz debe estar en capacidad de articular (EQA - España, 2025):
      .bg___slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 El vigía
                  p.mb-0 Es responsable de ejecutar la búsqueda, configurar las herramientas tecnológicas y registrar las estrategias aplicadas. Utiliza alertas RSS, rastreadores web, metabuscadores y operadores booleanos para recuperar información pertinente y garantizar una búsqueda amplia, organizada y trazable durante la fase de captura.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img8.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 El experto
                  p Aporta el conocimiento especializado sobre la temática investigada y actúa como filtro de calidad.
                  p.mb-0 Evalúa la pertinencia de los hallazgos, descarta falsos positivos e identifica tecnologías inviables, patentes sin aplicación práctica o normas desactualizadas. Su intervención contribuye a reducir la infoxicación.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img9.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 El profesional
                  p.mb-0 Coordina el proceso, relaciona la información validada con los objetivos organizacionales, identifica patrones, redacta conclusiones y formula recomendaciones. Además, articula la comunicación entre el equipo técnico y la dirección. La calidad depende de la complementariedad de los roles (EQA-España, 2025).
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img10.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 La asignación clara de funciones fortalece la coordinación del equipo, reduce errores y facilita la transformación de información técnica en decisiones estratégicas.
      .row.justify-content-center.mb-5
        .col-lg-10
          .row.align-items-center
            .col-xl
              .box___style_1(data-aos="fade-right")
                p.mb-0 Una decisión estratégica requiere un equipo capaz de buscar, validar y transformar información en recomendaciones pertinentes. En el siguiente pódcast, se profundizará sobre las funciones del vigía, el experto y el profesional, y comprenderá cómo se articulan dentro del proceso de vigilancia organizacional.
            .col-xl-auto.d-none.d-xl-block(data-aos="fade-left")
              figure
                img(src='@/assets/curso/temas/t2/img11.svg', alt='').m-auto
      .row.align-items-center.m-0.mb-0
        .col-xl
          .row.align-items-center.justify-content-center.box___podcast(data-aos="zoom-in")
            .col-auto.mb-4.mb-lg-0
              figure(data-aos="fade-right")
                img(src="@/assets/curso/temas/t2/img12.svg" style="max-width: 220px").m-auto
            .col
              h4.mb-4 Pódcast
              TarjetaAudio.color-acento-contenido.mb-4(
                  texto="Tres roles, una decisión: el equipo detrás de la vigilancia estratégica"
                  :audio="audio1"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
        .col-xl-auto.d-none.d-xl-block
          figure(data-aos="fade-left")
            img(src="@/assets/curso/temas/t2/img13.png" ).m-auto
      Separador
      #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.4 Delimitación del alcance y priorización de la temática de estudio
      p Uno de los errores más comunes en los procesos formativos y empresariales es intentar abarcar temáticas excesivamente amplias. La delimitación define los límites del proyecto y concentra los recursos en temáticas pertinentes, viables y vinculadas con los objetivos estratégicos. 
      p.mb-5 A continuación, se desarrollan los criterios para delimitar y priorizar el estudio.
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t2/img14.png", alt="" ).m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Delimitación del alcance").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 La delimitación evita que el equipo intente abarcar temáticas demasiado amplias. Este proceso establece qué información será incluida y cuáles asuntos quedarán excluidos, con el fin de reducir la dispersión y utilizar eficientemente los recursos disponibles.
            .row(titulo="Ficha de registro del proyecto").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 La ficha de registro formaliza el inicio del proceso de vigilancia. Debe contener el objetivo general, el marco temporal, el marco geográfico y los idiomas de las fuentes que serán considerados durante la búsqueda (Asociación Española para la Calidad, 2024).
            .row(titulo="Priorización de la temática").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 La priorización se realiza mediante matrices que relacionan el impacto estratégico con la viabilidad. El equipo asigna una valoración a las problemáticas identificadas y selecciona aquellas que inciden directamente en la permanencia, competitividad o crecimiento de la organización.
            .row(titulo="Criterios de selección").ajuste-cajaAcordion.ajuste-vineta
              p Una temática debe cumplir dos condiciones principales:
              ul.fa-ul.mb-3
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Generar un impacto relevante sobre los objetivos empresariales. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Ser viable de acuerdo con el tiempo, el presupuesto, las fuentes y el equipo disponible. 
              p.mb-3 La aplicación de estos criterios evita destinar recursos a asuntos secundarios o difíciles de desarrollar.
      p.mb-5 El siguiente caso aplica estos criterios al sector agroindustrial sostenible.
      .box___style_2.mb-0
        h5 Caso de uso aplicado al sector productivo: agroindustria y sostenibilidad
        .row.justify-content-center.align-items-center.mb-3
          .col-xl.mb-4.mb-lg-0
            .box___style_3.fit___box_2(data-aos="fade-right")
              p.mb-0 Considérese una cooperativa cacaotera de tamaño mediano que busca exportar a la Unión Europea. La cooperativa se enfrenta a un desafío: las nuevas normativas europeas exigen trazabilidad total libre de deforestación y empaques con un 80 % de material compostable.
          .col-xl-auto.col-md-9(data-aos="fade-left")
            figure
              img(src='@/assets/curso/temas/t2/img15.png', alt='').m-auto
        p El caso se desarrolla mediante las siguientes etapas:
        .row.justify-content-center.mb-3
          .col-xl-10
            AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="zoom-in")
              .row(titulo="Planeación y fases").ajuste-cajaAcordion.ajuste-vineta
                p.mb-3 Determinan que el Factor Crítico de Vigilancia (FCV) no es el cultivo del cacao en sí, sino las "Tecnologías de trazabilidad #[i Blockchain] aplicables al agro" y "Nuevos biopolímeros para empaque".
              .row(titulo="Asignación de recursos").ajuste-cajaAcordion.ajuste-vineta
                p.mb-3 Al ser una cooperativa, los recursos financieros son limitados. El cronograma se traza a ocho semanas. Se presupuesta la compra de dos informes sectoriales europeos (recurso financiero) y se reasignan cinco horas semanales a tres colaboradores (recurso humano).
              .row(titulo="Distribución de roles").ajuste-cajaAcordion.ajuste-vineta
                p Se designan los siguientes roles:
                ul.fa-ul.mb-3
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Vigía:] aprendiz del área de sistemas que configura alertas en Espacenet y portales europeos. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Experto:] ingeniero agrónomo que descarta tecnologías inviables y selecciona soluciones sin conexión permanente. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Profesional:] gerente comercial que integra los hallazgos y formula un plan de inversión viable.
              .row(titulo="Delimitación del alcance").ajuste-cajaAcordion.ajuste-vineta
                p.mb-3 En su ficha de registro, el equipo delimitó explícitamente que no se vigilarían empaques de vidrio o metal (exclusión), concentrándose exclusivamente en fibras vegetales biodegradables en un marco temporal de los últimos tres años, evitando así perder tiempo en soluciones obsoletas.
              .row(titulo="Resultado estratégico").ajuste-cajaAcordion.ajuste-vineta
                p.mb-3 La cooperativa obtiene información pertinente para seleccionar soluciones viables, cumplir requisitos europeos y transformar una exigencia normativa en una oportunidad competitiva.
        p.mb-0 Este caso evidencia cómo una planeación meticulosa, una asignación clara de roles y una estricta delimitación del alcance permiten que incluso organizaciones con recursos limitados ejecuten procesos de inteligencia organizacional de clase mundial, transformando un reto regulatorio en una ventaja competitiva.

</template>

<script>
import audio1 from '@/assets/curso/temas/t2/audios/Tres_roles_decision_equipo_detras_vigilancia_estrategica.mp3'
export default {
  name: 'Tema2',
  data: () => ({
    audio1,
    mostrarIndicadorTarjetaAudio: true,
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
