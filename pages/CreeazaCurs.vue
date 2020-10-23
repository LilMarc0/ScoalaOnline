<template>
  <div class="container column is-10 has-text-centred">
      <b-field label="Titlu">
          <b-input 
            type="text"
            v-model="model.nume">
              
          </b-input>
      </b-field>
    <b-field label="Subtitlu">
          <b-input 
            type="text"
            v-model="model.subtitlu">
              
          </b-input>
      </b-field>
        <b-field label="Descriere">
          <b-input 
            type="textarea"
            v-model="model.descriere">
              
          </b-input>
      </b-field>
    <section>
        <b-field label="Skill-uri dobandite">
            <b-taginput
                v-model="cvi"
                ellipsis
                icon="label"
                placeholder="Adauga skill">
            </b-taginput>
        </b-field>
    </section>
      <section>
        <b-field label="Thumbnail">
            <b-upload v-model="tmb"
                native
                drag-drop
                expanded>
                <section class="section">
                    <div class="content has-text-centered">
                        <p>
                            <b-icon
                                icon="upload"
                                size="is-large">
                            </b-icon>
                        </p>
                        <p>Incarca o fotografie (drag and drop sau click)</p>
                    </div>
                </section>
            </b-upload>
        </b-field>
        <span v-if="tmb" class="tag">{{tmb.name}}
                <button class="delete is-small"
                    type="button"
                    @click="deleteDropFile">
                </button>
        </span>
    </section>

      <section>
        <b-field label="Demo video">
            <b-upload v-model="demo"
                native
                drag-drop
                expanded>
                <section class="section">
                    <div class="content has-text-centered">
                        <p>
                            <b-icon
                                icon="upload"
                                size="is-large">
                            </b-icon>
                        </p>
                        <p>Incarca un video (drag and drop sau click)</p>
                    </div>
                </section>
            </b-upload>
        </b-field>
        <span v-if="demo" class="tag">{{demo.name}}
                <button class="delete is-small"
                    type="button"
                    @click="deleteDropFile">
                </button>
        </span>
    </section>

    <b-button @click.prevent="send">Send</b-button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            model: {
                nume: "",
                subtitlu: "",
                descriere: "",
                ce_vei_invata: "",
                linkThumbnail: "",
                linkDemo: ""
            },
            tmb: null,
            demo: null,
            cvi: []
            }
    },
    methods: {
            deleteDropFile() {
                this.tmb = null
            },
            send() {

                let cv;
                for(cv of this.cvi) this.model.ce_vei_invata += cv + "*";

                this.model.creator = this.$auth.user._id;
                let fd = new FormData();
                fd.append('tmb', this.tmb)
                fd.append('demo', this.demo)
                fd.append('model', JSON.stringify(this.model))
                console.log();
                this.$axios.post('/curs', fd, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }).then(()=>{
                    this.$buefy.snackbar.open({
                        duration: 5000,
                        message: 'Cursul a fost acceptat.',
                        position: 'is-bottom-left',
                    })
                    this.$router.push('/')
                })
            }
        }
}
</script>

<style>

</style>