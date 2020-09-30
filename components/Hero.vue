<template>
  <section class="hero  is-medium">
    <TopNav/>
    <div class="hero-body is-primary">
      <div class="container">
        <h1 class="title">
          EduMania
        </h1>
        <h2 class="subtitle">
          Flexeaza-ti inteligenta
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
        width: 100%;
    }

    .title{
      color: white;
    }

    .subtitle{
      color: white;
      padding-left: 1rem;
    }
</style>