<template>
    <div class="tile is-child box">
        <p v-if="this.grile.length==0">Doar a 12a pe info are</p>
        <ContinutGrila class="grila" 
            v-for="(grila, idx) in grile"
             :key="idx"
             :grila="grila">
        </ContinutGrila>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                radio: 'default',
                grile: []
            }
        },
        props: {

        },
        mounted() {
            const path = this.$route.fullPath.split('/')
            const materie = path[2]
            const categorie = path[3]
            this.$axios.get(`/${materie}/${categorie}`).then((res)=>{
                this.grile = res.data
                console.log(res.data);
            })
        }
    }

</script>

<style scoped>

</style>