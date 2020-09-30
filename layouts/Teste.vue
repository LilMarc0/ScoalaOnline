<template>
  <div>
    <Hero/>
    <section>
       <Sidebar
        :materie="materie"
        v-if="materie"/>
          <div id="tile is-ancestor">
        <nuxt/>
       </div>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
        materie: null
    }
  },
  methods: {

  },
  mounted(){
    const nume_materie = this.$route.fullPath.split('/')[2];
    var self=this;
    this.$axios.get(`/materii/nume/${nume_materie}`).then(res=> self.materie=res.data.materie)
  }
}
</script>

<style scoped>

</style>