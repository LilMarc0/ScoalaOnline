<template>
  <section>
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
      <!-- <CourseCard
      title='VueJS'
      subtitle='Invata sa frontend intr-un mod practic'
      content=' Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, '
      icon='matrix'
      to="{name: 'cursuri', params: {nume: VueJS}}"
      /> -->
      <Cursuri/>
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
  },
  mounted(){

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
