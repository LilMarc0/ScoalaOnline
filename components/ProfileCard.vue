<template>
  <div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img :src="getImg(profileImage)" alt="Placeholder image">
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-left">
      </div>
      <div class="media-content">
        <p class="title is-4">{{userName}}</p>
      </div>
    </div>

    <div class="content">
      {{bio}}
    </div>
  </div>
</div>
</template>

<script>
export default {

    data(){
        return {

        }
    },

    props: {
        profileImage: {
            type: String,
            required: true,
            default: "empty_profile"
        },
        userName: {
            type: String,
            required: true
        },
        bio: { 
            type: String
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

<style>

</style>