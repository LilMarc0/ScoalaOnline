<template>
  <div>  
    <Hero/>
    <section>
      <div>
        <nuxt />
      </div>
      <Footer/>
    </section>
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
