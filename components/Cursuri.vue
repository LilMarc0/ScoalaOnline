<template>
  <div class="container column is-12">
    <div class="columns is-mobile">
        <CourseCard v-for="(curs, key) of cursuri"
            :key="key"
            :title=curs.nume
            :subtitle=curs.subtitle
            :content=curs.descriere
            :icon=curs.linkThumbnail
            :to=curs.to
            />
    </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      cursuri: []
    }
  },
  mounted() {
    this.$axios.get('/curs').then((res)=>{
      this.cursuri=res
      console.log(res);
      })
  }
}
</script>

<style>

</style>