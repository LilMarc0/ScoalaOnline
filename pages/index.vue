<template>
  <section>
      <div class="centred">
          <h1 class="title"> Teste </h1>
      </div>
     <div>
      <Teste/>
    </div>
    <SmallHero/>
      <div class="centred">
          <h1 class="title"> Cursuri </h1>
      </div>
     <div class="container">
      <Cursuri/>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomePage',
  auth: 'guest',
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
