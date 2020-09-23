<template>
  <div>
    <Hero/>
    <section>
       <Sidebar/>
       <div id="tile is-ancestor">
          <nuxt/>
       </div>
      <Footer/>
    </section>
  </div>
</template>

<script>
export default {
    name: "CursLayout"
}
</script>

<style>

</style>