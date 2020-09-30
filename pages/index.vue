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
      <Teste/>
    </div>
    <SmallHero/>
      <div class="centred">
          <h1 class="title"> Cursuri </h1>
      </div>
     <div class="container column">
      <CourseCard
      title='VueJS'
      subtitle='Invata sa frontend intr-un mod practic'
      content=' Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, '
      icon='matrix'
      to="{name: 'cursuri', params: {nume: VueJS}}"
      />
      <!-- <Cursuri/> -->
    </div>
  </section>
</template>

<script>
import Card from '~/components/Card'
import SmallHero from '~/components/SmallHero'
import Level from '~/components/Level'
import Teste from '~/components/Teste'

export default {
  name: 'HomePage',
  auth: 'guest',
  components: {
    Card,
    SmallHero,
    Level,
    Teste
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
