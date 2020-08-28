<template>
  <div>
    <Hero/>
    <section>
       <Sidebar/>
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
        nume: ''
    }
  }
}
</script>

<style scoped>

</style>