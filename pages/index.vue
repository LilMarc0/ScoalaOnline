<template>
  <section>
    <!-- <div class="columns is-mobile">
      <card
        title="Free"
        icon="github"
      >
        Open source on <a href="https://github.com/buefy/buefy">
          GitHub
        </a>
      </card>

      <card
        title="Responsive"
        icon="cellphone-link"
      >
        <b class="has-text-grey">
          Every
        </b> component is responsive
      </card>

      <card
        title="Modern"
        icon="alert-decagram"
      >
        Built with <a href="https://vuejs.org/">
          Vue.js
        </a> and <a href="http://bulma.io/">
          Bulma
        </a>
      </card>

      <card
        title="Lightweight"
        icon="arrange-bring-to-front"
      >
        No other internal dependency
      </card>
    </div> -->
      <div class="centred">
          <h1 class="title"> Teste </h1>
      </div>
     <div class="container column">
      <Cursuri/>
    </div>
    <SmallHero/>
      <div class="centred">
          <h1 class="title"> Cursuri </h1>
      </div>
     <div class="container column">
      <Cursuri/>
    </div>
  </section>
</template>

<script>
import Card from '~/components/Card'
import CourseCard from '~/components/CourseCard'
import SmallHero from '~/components/SmallHero'
import Level from '~/components/Level'
import Cursuri from '~/components/Cursuri'

export default {
  name: 'HomePage',

  components: {
    Card,
    CourseCard,
    SmallHero,
    Level,
    Cursuri
  }
}
</script>

<style scoped>

  .centred { 
    text-align: center;
    margin-top: 1rem;
  }

  .container.column.is-10{
    margin-top: 2rem;
    margin-bottom: 4rem;
  }
</style>
