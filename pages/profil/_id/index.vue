<template>
  <div v-if="user" class="tile is-ancestor main">
  <div class="tile is-vertical is-8 red">
    <h1 class="title has-text-centered">Profilul lui {{user.username}}</h1>
    <article class="content">
        <h1 class="title">Bio:</h1>
        <p>{{user.descriere}}</p>

        <div v-if="user.rol=='profesor'">
          <h1 class="title">Statistici profesor</h1>
          <p>Numar grile concepute: {{nr_grile}}</p>
          <p>Numar cursuri concepute: {{nr_cursuri}}</p>
          <p>Rating mediu grile : {{rating_grile ? rating_grile : "nu inca"}}</p>
          <p>Rating mediu cursuri: {{rating_cursuri ? rating_cursuri : "nu inca"}}</p>
          <p>Vanzari cursuri: {{nr_vanzari_cursuri}}</p>
        </div>
        <h1 class="title">Statistici utilizator</h1>
        <p>Numar cursuri cumparate: {{nr_cursuri}}</p>
        <p>Numar grile rezolvate: {{nr_cursuri}}</p>
        <p>Credit intern(EduCredit or some shit): {{user.brainPoints}}</p>

    </article>
  </div>
  <div class="tile is-vertical yellow">
    <article class="tile is-child">
      <div class="content">
        <p class="title">Card</p>
        <div class="content">
          <ProfileCard
          :bio="user.descriere"
          :userName="user.username"
          :profileImage="user.linkPhoto"
          @changePhoto="changePhoto($event)"/>
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
            user: null
        }
    },

    computed: {
      lnkPhoto() {
        return this.user.linkPhoto
      }
    },
    mounted() {
      this.$axios.get(`/user/${this.$auth.user.id}`).then((res) => {
        this.user = res.data;
        this.nr_grile = this.user.grile?.length;
        this.nr_cursuri = this.user.courses?.length;
        // this.rating_grile = this.user.quizzez.mean la rating 
        console.log(this.user);
      })
    },
    methods: {
      changePhoto(ph) {
        if(ph){
          console.log("In index", ph);
          this.user.linkPhoto = ph
        }
      }
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