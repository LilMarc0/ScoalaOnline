<template>
<section class="hero is-primary">
  <div class="hero-body">
    <div class="container">
        <nav class="level is-mobile ">
  <div class="level-item has-text-centered">
    <div>
      <p class="heading">Utilizatori</p>
      <p class="title">3,456</p>
    </div>
  </div>
  <div class="level-item has-text-centered">
    <div>
      <p class="heading">Utilizatori activi</p>
      <p class="title">1240</p>
    </div>
  </div>
  <div class="level-item has-text-centered">
    <div>
      <p class="heading">Cursuri</p>
      <p class="title">1423</p>
    </div>
  </div>
  <div class="level-item has-text-centered">
    <div>
      <p class="heading">Teste</p>
      <p class="title">2312</p>
    </div>
  </div>
</nav>
    </div>
  </div>
</section>
</template>

<script>
export default {
    name: "SmallHero",
}
</script>

<style scoped>
  .hero {
        background-image:
    linear-gradient(to bottom, rgba(140,103,239,0.57),rgba(140,103,239,0.77)),
    url('../assets/elevi.jpg');
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        box-shadow: inset 0 5px 15px 2px #202020;
    width: 100%;    
    }
</style>