<template>
  <div class="container column is-12">
    <div class="columns is-mobile">
        <CourseCard v-for="(curs, key) of cursuri"
              :key=key
              :curs=curs
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
    if(this.$auth.user) this.$store.dispatch("syncOwnedCourses", {idUser: this.$auth.user.id})
    this.$axios.get('/curs').then((res)=>{
      this.cursuri=res.data
      console.log('cursuri: ', res);
      })
  }
}
</script>

<style>

</style>