<template>
<section class="hero is-primary">
  <div class="hero-body">
    <div class="container">
        <Level/>
    </div>
  </div>
</section>
</template>

<script>

import Level from '~/components/Level'

export default {
    name: "SmallHero",
    components: {
        Level
    }
}
</script>

<style scoped>
  .hero {
        background-image:
    linear-gradient(to bottom, rgba(140,103,239,0.57),rgba(140,103,239,0.77)),
    url('../assets/elevi.jpg');        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
  }
</style>