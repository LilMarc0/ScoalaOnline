<template>
    <div class="tile is-child box">
        <p v-if="this.grile.length==0">Doar a 12a pe info are</p>
        <ContinutGrila class="grila" 
            v-for="(grila, idx) in grile"
             :key="idx"
             :grila="grila"
             >
        </ContinutGrila>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                radio: 'default',
                grile: [],
                materie: null,
                categorie: null
            }
        },
        props: {

        },
        mounted() {
            const path = this.$route.fullPath.split('/')
            const nume_materie = path[2]
            const nume_categorie = path[3]
            this.$axios.get(`/materii/nume/${nume_materie}`).then(res => {
                this.materie=res.data.materie;
                this.$axios.get(`/categorii/nume/${nume_categorie}/${this.materie.idMaterii}`).then(res => {
                    this.categorie=res.data
                    this.$axios.get(`/grile/${this.materie.idMaterii}/${this.categorie.idCategorii}`).then((res)=>{
                                    this.grile = res.data
                    })
                })
            })
            
        }
    }

</script>

<style scoped>

</style>