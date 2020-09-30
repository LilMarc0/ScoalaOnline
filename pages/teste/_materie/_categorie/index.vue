<template>
  <div class="tile is-parent">
      <Grile/>
  </div>
</template>

<script>
export default {
  name: 'teste',
  layout: 'Teste',
  components: {

  },
  mounted(){
    
  }
}
</script>

<style scoped>
    .container {
      background-color: gray;
      -webkit-animation: fadein 0.25s; /* Safari, Chrome and Opera > 12.1 */
        -moz-animation: fadein 0.25s; /* Firefox < 16 */
          -ms-animation: fadein 0.25s; /* Internet Explorer */
          -o-animation: fadein 0.25s; /* Opera < 12.1 */
              animation: fadein 0.25s;
  }

  @keyframes fadein {
      from { opacity: 0; }
      to   { opacity: 1; }
  }

  /* Firefox < 16 */
  @-moz-keyframes fadein {
      from { opacity: 0; }
      to   { opacity: 1; }
  }

  /* Safari, Chrome and Opera > 12.1 */
  @-webkit-keyframes fadein {
      from { opacity: 0; }
      to   { opacity: 1; }
  }

  /* Internet Explorer */
  @-ms-keyframes fadein {
      from { opacity: 0; }
      to   { opacity: 1; }
    }
</style>