<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      p A continuación, se presenta una síntesis de la temática estudiada por el componente formativo. 
      .row.justify-content-center
        .col-lg-12.mb-5.bgs.p-4.brad
          figure
            img(src="@/assets/curso/sintesis.svg", alt="El esquema sintetiza los fundamentos de la vigilancia estratégica y la inteligencia organizacional, sus tipologías y la Norma UNE 166006. También integra la planeación del proceso mediante Factores Críticos de Vigilancia, fases del ciclo de inteligencia, recursos y cronograma. Asimismo, organiza los roles del vigía, el experto y el profesional, junto con la gestión de fuentes, buscadores, palabras clave, tesauros y criterios de filtrado. Finalmente, incorpora los instrumentos del Sistema PREVIOS: ficha de registro, bitácora de búsqueda y rejilla de vigilancia.")
        .col-auto
          a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/bullets/icono-pdf.svg")
            .anexo__texto
              p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
