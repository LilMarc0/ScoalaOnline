<template>
  <h3>Cursul {{id}}</h3>
</template>

<script>
export default {
    data() {
        return {
            id: 0
        }
    },
    mounted(){
         this.id = this.$route.fullPath.split('/')[2];
    }
}
</script>

<style>

</style>