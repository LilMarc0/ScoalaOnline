<template>
<div class="tile is-parent">
    <section v-if="curs">
    <div class="has-text-centered">
    <router-link class="title is-1 ttl" :to="{path: 'view'}" append> {{curs.nume}}</router-link>
    </div>
    
      <article class="has-text-justified des">
          <p>
              {{curs.descriere}}
          </p>
      </article>
    <video-player v-if="curs" 
                class="video-player-box "
                 ref="videoPlayer"
                 :options="playerOptions"
                 :playsinline="true"
                 @ready="playerReady($event)"
                 @statechanged="playerReady($event)">
    </video-player>
    <h2 class="title is-3 cvi">Ce vei invata: </h2>

    <section>
        <b-steps v-model="activeStep">
            <template v-for="(step, index) in curs.ce_vei_invata">
                <b-step-item
                    v-if="step"
                    :key="index"
                    :clickable="true"
                    :visible="true"
                    :label="step">
                    {{ step }}
                </b-step-item>
            </template>
        </b-steps>
    </section>
  </section>
</div>  
</template>

<script>
export default {
    layout: "CursLayout",
    data() {
        return {
            activeStep: 0,
            curs: null,
            playerOptions: null
        }
    },
    computed: {
      player() {
        return this.$refs.videoPlayer.player
      }
    },
    mounted(){
        this.$axios.get(`curs/${this.$route.fullPath.split('/')[2]}`).then((res)=>{
            this.curs = res.data[0];
            let cvi = res.data[0].ce_vei_invata.split('*');
            cvi.pop();
            this.curs.ce_vei_invata = cvi;
            this.playerOptions = {
                // videojs options
                muted: false,
                language: 'en',
                playbackRates: [0.7, 1.0, 1.5, 2.0],
                sources: [{
                    type: "video/mp4",
                    src: "http://192.168.1.27:5001/curs/video"
                }],
            }
            console.log(this.playerOptions.sources.src);
        })
    },
    methods: {
        playerReady(player) {
            console.log(player);
        }
    }
}
</script>

<style>
    .h1 {
        font-weight: bold;
        text-align: center;
    }

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
</style>