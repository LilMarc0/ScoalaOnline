<template>
  <div class="card">
  <div class="card-image">
    <figure class="image is-4by3" @click="changePicture">
      <img class="profileImg" :src="avatar" alt="Placeholder image">
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

import ProfilePictureForm from "@/components/ProfilePictureForm"

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
    computed: {
      avatar(){
        console.log(` ---- /${this.profileImage ? this.profileImage : 'empty_profile'}`);
        return `/${this.profileImage ? this.profileImage : 'empty_profile.png'}`
      }
    },
    methods: {
      changePicture() {
          this.$buefy.modal.open({
                parent: this,
                component: ProfilePictureForm,
                hasModalCard: true,
                customClass: 'custom-class custom-class-2',
                trapFocus: true,
                events: {
                  'changePhoto': link => {console.log("in card", link); this.$emit("changePhoto", link)}
                }
            })
      }
    },
    mounted() {

    }

}
</script>

<style>
  .profileImg {
    border-radius: 50%;
  }
</style>