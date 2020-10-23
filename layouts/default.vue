<template>
  <div  id="page">  
    <Hero/>
    <section class="content">
      <div>
        <nuxt />
      </div>
    </section>
  <Footer/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: { name: 'index' }
        },
        {
          title: 'Inspire',
          icon: 'lightbulb',
          to: { name: 'inspire' }
        }
      ],
      nume: ""
    }
  },
  mounted() {
    
  }
}
</script>

<style>

  #page {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }
  .content {
  flex: 1 0 auto;
  /* Prevent Chrome, Opera, and Safari from letting these items shrink to smaller than their content's default minimum size. */
  padding: 20px;
  }
  .footer {
  flex-shrink: 0;
  /* Prevent Chrome, Opera, and Safari from letting these items shrink to smaller than their content's default minimum size. */
  padding: 20px;
}
</style>