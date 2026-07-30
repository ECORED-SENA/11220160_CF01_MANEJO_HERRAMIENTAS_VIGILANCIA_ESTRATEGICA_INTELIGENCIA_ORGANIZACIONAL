<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Introducción
      p.mb-5 En un entorno empresarial cambiante, las organizaciones necesitan anticipar transformaciones tecnológicas, normativas y comerciales para mantener su competitividad. Este componente formativo presenta la vigilancia estratégica y la inteligencia organizacional como procesos sistemáticos orientados a captar, procesar y convertir información del entorno en conocimiento útil para la toma de decisiones.
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/intro/img1.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 Su aplicación permite identificar señales de cambio, evaluar amenazas, reconocer oportunidades de innovación y reducir la incertidumbre gerencial. De esta manera, se supera la simple acumulación de datos y se promueve la generación de inteligencia accionable para fortalecer la capacidad de respuesta de la organización.
      .row.align-items-center.mb-0
        .col-xl
          .box___style_1(data-aos="fade-right")
            p.mb-0 El componente desarrolla una planificación metodológica que comprende el diagnóstico de necesidades, la conformación del equipo de trabajo y la asignación de roles. También aborda la delimitación del alcance temático, la selección de fuentes pertinentes y el uso de instrumentos de registro, como bitácoras de búsqueda y rejillas de vigilancia. Estos elementos establecen las bases para ejecutar proyectos acordes con las necesidades del sector productivo.
        .col-xl-auto.d-none.d-xl-block(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/intro/img2.svg', alt='').m-auto

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
