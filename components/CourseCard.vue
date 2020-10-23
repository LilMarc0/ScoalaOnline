<template>
 <div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img :src="curs.linkThumbnail" alt="Placeholder image">
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure v-if="curs.users.length" class="image is-48x48">
          <img @click="goToProfile()" :src="'/' + curs.users[0].linkPhoto" alt="Placeholder image">
        </figure>
      </div>
      <div class="media-content">
        <nuxt-link :to="`/cursuri/${curs.id}`" class="title is-4"> {{curs.nume}} </nuxt-link>
        <p class="subtitle is-6"> {{curs.subtitlu}}</p>
      </div>
    </div>

    <div class="content">
      {{curs.descriere}}
    </div>
  </div>
  <footer class="card-footer">
      <a class="card-footer-item" @click="handleAction">{{curs.users.length ? "Vezi curs" : "Inscrie-te"}}</a>
    </footer>
</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    data(){
        return {
            img_src: this.icon,
            creatorPhoto: null,
            creatorLink: null,
        }
    },
    computed: {
      ...mapGetters(['ownsCourse']),
    },
    props: {
      curs: {
        type: Object,
        required: true
      }
    },
    methods: {
      goToProfile: function(){
        this.$router.push(this.creatorLink)
      },
      handleAction: function(){
        if(this.curs.users.length){
          this.$router.push(`/cursuri/${this.curs.id}`)
        } else {
          this.$store.dispatch("pushCourse", {curs: this.curs, idUser: this.$auth.user.id})
          this.$router.push(`/cursuri/${this.curs.id}`)
        }
      }
    },
    mounted() {
      this.$axios.get(`/user/${this.curs.creator}`).then((res)=>{
        this.creatorPhoto = res.data.linkPhoto;
        this.creatorLink = '/profil/' + res.data.username;
      });
    }
}
</script>

<style scoped>
    .card{
        margin: 1rem;
        /* border-radius: 1rem; */
        box-shadow: 10px 10px 8px #888888;
        min-width: 30rem;
        max-width: 20rem;
        min-height: 40rem;
        max-height: 50rem;
    }

    .title {
      display: block;
    }
</style>