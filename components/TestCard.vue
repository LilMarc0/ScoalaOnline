<template>
 <div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img :src="getImg(this.icon)" alt="Placeholder image">
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
          <img :src="getImg(this.icon)" alt="Placeholder image">
        </figure>
      </div>
      <div class="media-content">
        <nuxt-link :to="`/teste/${title.toLowerCase()}`" class="title is-4"> {{title}} </nuxt-link>
        <p class="subtitle is-6"> {{subtitle}}</p>
      </div>
    </div>

    <div class="content">
      {{content}}
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
        title: {
            type: String,
            required: true
        },
        subtitle: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            required: true
        },
        to: {
            type: String,
            required: true
        }
    },
    methods: {
      getImg: function(src){
        const images = require.context('../assets/', false, /\.png$/)
        return images('./' + src + ".png")
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