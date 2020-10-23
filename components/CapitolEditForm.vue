<template>
   <div>
    <div class="modal-card" style="width: auto">
        <header class="modal-card-head">
            <p class="modal-card-title">Capitol nou</p>
            <button
                type="button"
                class="delete"
                @click="$emit('close')"/>
        </header>
        <section class="modal-card-body">
            <b-field label="Nume">
                <b-input
                    :value="model.nume"
                    v-model="model.nume"
                    placeholder="Numele capitolului"
                    required>
                </b-input>
            </b-field>

            <b-field label="Descriere">
                <b-input
                    type="textarea"
                    :value="model.descriere"
                    v-model="model.descriere"
                    placeholder="descriere"
                    required>
                </b-input>
            </b-field>

            <b-field label="Link Video">
                <b-upload
                    v-model="model.linkVideo">
                    <span class="file-cta">
                        <b-icon class="file-icon" icon="upload"></b-icon>
                        <span class="file-label">Incarca un video</span>
                    </span>
                <span class="file-name" v-if="model.linkVideo">
                        {{ model.linkVideo.name }}
                </span>
                </b-upload>
            </b-field>
        </section>
        <footer class="modal-card-foot">
            <button class="button" type="button" @click="$emit('close')">Inchide</button>
            <button class="button is-primary" @click="handleInput">Adauga</button>
        </footer>
    </div>
</div>  
</template>

<script>
export default {
    data() {
        return {
            model: {

            }
        }
    },
    methods: {
        handleInput() {
            const curs = this.$route.fullPath.split('/')[2];

            let fd = new FormData();
            if(!this.model.linkVideo){
                this.$buefy.snackbar.open({
                    duration: 5000,
                    message: 'Niciun video adaugat!',
                    position: 'is-bottom-left',
                    type: "danger"
                })
            } else{
                fd.append('video', this.model.linkVideo)
                fd.append('model', JSON.stringify(this.model))
                this.$axios.put(`/course_has_chapters/${curs}`,
                fd, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }).then((res)=>{
                    this.$buefy.snackbar.open({
                        duration: 5000,
                        message: `Capitolul ${res.data.nume} a fost acceptat. (refresh pentru a vedea)`,
                        position: 'is-bottom-left',
                    })
                    this.$router.push(`/cursuri/${curs}`)
                })
            }

        }
    }
}
</script>

<style>

</style>