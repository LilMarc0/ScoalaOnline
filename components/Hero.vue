<template>
  <section class="hero is-primary is-medium">
    <TopNav/>
    <div class="hero-body is-primary">
      <div class="container">
        <h1 class="title">
          Sedu sau cumva
        </h1>
        <h2 class="subtitle">
            Cele mai bune cursuri online lol
        </h2>
      </div>
    </div>
  </section>
</template>

<script>
export default {

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
        box-shadow: inset 0 -5px 15px 2px #202020;
        /* box-shadow: inset 0 -2px 1rem 0.25rem #202020; */
    }
</style>