<template>
  <div class="tile is-ancestor main">
  <div class="tile is-vertical is-8 red">
    <h1 class="title has-text-centered">Profilul lui {{user}}</h1>
    <article class="content">
        <h1 class="title">Bio:</h1>
        <p>{{descriere}}</p>

        <h1 class="title">Statistici profesor</h1>
        <p>Numar grile concepute: {{nr_grile}}</p>
        <p>Numar cursuri concepute: {{nr_cursuri}}</p>
        <p>Rating mediu grile : {{rating_grile}}</p>
        <p>Rating mediu cursuri: {{rating_cursuri}}</p>
        <p>Vanzari cursuri: {{nr_vanzari_cursuri}}</p>

        <h1 class="title">Statistici utilizator</h1>
        <p>Numar cursuri cumparate: {{nr_cursuri}}</p>
        <p>Numar grile rezolvate: {{nr_cursuri}}</p>
        <p>Credit intern(EduCredit or some shit): {{nr_cursuri}}</p>

    </article>
  </div>
  <div class="tile is-vertical yellow">
    <article class="tile is-child">
      <div class="content">
        <p class="title">Card</p>
        <div class="content">
          <ProfileCard
          :bio="descriere"
          :userName="user"/>
        </div>
      </div>
    </article>
  </div>
</div>
</template>

<script>
export default {
    data(){
        return {
            descriere: "Programator extrem de bun, stie VueJS, NodeJS, Python, AI"
        }
    },

    computed: {
        user() {return this.$auth.user.username}
    }
}
</script>

<style>
    .red {
        margin-bottom: 2rem;
    }

    .title{
        padding-left: 1rem;
    }

    .yellow{
        margin-bottom: 2rem;
        margin-right: 2rem;
        margin-left: 2rem
    }

    .main {
        padding-top: 1rem;
        padding-left: 5rem;
    }

    .content{
        padding-left: 3rem;
        font-size: 16px;
    }
</style>