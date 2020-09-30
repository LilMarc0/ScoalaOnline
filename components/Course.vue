<template>
  <section class="course">
    <h1 class="title is-1 has-text-centered">{{courseTitle}}</h1>
    <article class="has-text-justified">
        <p>{{description}}</p>
    </article>
    <video-player  class="video-player-box "
                 ref="videoPlayer"
                 :options="playerOptions"
                 :playsinline="true"
                 @ready="playerReadied">
  </video-player>
  </section>
</template>

<script>
export default {
    data() {
        return {
            playerOptions: {
             // videojs options
            muted: true,
            language: 'en',
            playbackRates: [0.7, 1.0, 1.5, 2.0],
            sources: [{
                type: "video/mp4",
                src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
            }],
            }
        }
    },
    props: {
        videoSrc: {
            type: String,
            required: true,
            default: "../assets/Sample.mp4"
        },
        courseTitle: {
            type: String,
            required: true,
            default: "VueJS de la A la Z",
        },
        description: {
            type: String,
            required: true,
            default: "Curs care acopera conceptele de baza din JS, HTML, CSS, introduce framework-ul VueJS etcetc Curs care acopera conceptele de baza din JS, HTML, CSS, introduce framework-ul VueJS etcetc Curs care acopera conceptele de baza din JS, HTML, CSS, introduce framework-ul VueJS etcetc Curs care acopera conceptele de baza din JS, HTML, CSS, introduce framework-ul VueJS etcetcCurs care acopera conceptele de baza din JS, HTML, CSS, introduce framework-ul VueJS etcetc",
        }
    },
     mounted() {
      console.log('this is current player instance object', this.player)
    },
    computed: {
      player() {
        return this.$refs.videoPlayer.player
      }
    },
    methods: {
      // listen event
      onPlayerPlay(player) {
        // console.log('player play!', player)
      },
      onPlayerPause(player) {
        // console.log('player pause!', player)
      },
      // ...player event

      // or listen state event
      playerStateChanged(playerCurrentState) {
        // console.log('player current update state', playerCurrentState)
      },

      // player is ready
      playerReadied(player) {
        console.log('the player is readied', player)
        // you can use it to do something...
        // player.[methods]
      }
    }
}
</script>

<style>
    .ttl {
        padding-top: 1rem;
    }

    .des {
        padding-top: 2rem;
        padding-left: 1rem;
        padding-right: 1rem;
    }

    .cvi {
        padding-left: 2rem;
        padding-top: 2rem; 
    }

    .content {
        padding-left: 4rem;
    }
    .player { 
        margin: auto;
        
    }
</style>