<template>
   <div>
    <div class="modal-card" style="width: auto">
        <header class="modal-card-head">
            <p class="modal-card-title">Schimba fotografia de profil</p>
            <button
                type="button"
                class="delete"
                @click="$emit('close')"/>
        </header>
        <section class="modal-card-body">
            <b-field label="Incarca o poza">
                <b-upload
                    v-model="linkPhoto"
                    expanded
                    drag-drop>
                    <span class="file-cta">
                        <b-icon class="file-icon" icon="upload"></b-icon>
                        <span class="file-label">Incarca o fotografie</span>
                    </span>
                <span class="file-name" v-if="linkPhoto">
                        {{ linkPhoto.name }}
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
            linkPhoto: null,
        }
    },
    methods: {
        handleInput() {
            const fd = new FormData();
            fd.append("photo", this.linkPhoto)
            this.$axios.put(`/user/profile/photo`, fd).then(res => {
                console.log("?? ", res.data);
                this.$emit("changePhoto", res.data)
            })
        }
    }
}
</script>

<style>

</style>