<template>
  <h3>Teste la materia {{materie}} </h3>
</template>

<script>
export default {
    layout: "Teste",
    data() {
        return {
        materie: ""
        }
    },
    mounted() {
        this.materie = this.$route.fullPath.split('/')[2];
    }
}
</script>

<style>

</style>