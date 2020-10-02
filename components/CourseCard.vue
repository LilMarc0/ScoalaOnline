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
        <figure class="image is-48x48">
          <img :src="curs.linkThumbnail" alt="Placeholder image">
        </figure>
      </div>
      <div class="media-content">
        <nuxt-link :to="`/cursuri/${curs.idCurs}`" class="title is-4"> {{curs.nume}} </nuxt-link>
        <p class="subtitle is-6"> {{curs.subtitlu}}</p>
      </div>
    </div>

    <div class="content">
      {{curs.descriere}}
    </div>
  </div>
</div>
</template>

<script>
export default {
    data(){
        return {
            img_src: this.icon
        }
    },
    props: {
      curs: {
        type: Object,
        required: true
      }
    },
    methods: {
      getImg: function(src){
        return ;
      }
    }
}
</script>

<style scoped>
    .card{
        margin: 1rem;
        border-radius: 1rem;
        box-shadow: 10px 10px 8px #888888;
        min-width: 30rem;
        max-width: 20rem;
        min-height: 40rem;
        max-height: 20rem;
    }

    .title {
      display: block;
    }
</style>