<template>
  <div>
    <Hero/>
    <section id="main">
       <div>
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

<style scoped>
  .tile{
    margin: auto;
    width: 50%;
    padding: 10px
  }

</style>