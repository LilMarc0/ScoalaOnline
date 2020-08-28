<template>
    <div class="tile is-child box">
        <p v-if="this.grile.length==0">Doar a 12a pe info are</p>
        <article class="grila" v-for="grila in grile" :key="grila">
            <p class="cerinta">
                {{grila.cerinta}}
            </p>
            <Variante
            :variante=grila.variante
            />
        </article>
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
            })
        }
    }

</script>

<style scoped>
    .cerinta {
        padding-bottom: 2rem;
        padding-left: 1rem;
        padding-top: 1rem;

    }
    .grila {
        border-style: groove;
        border-radius: 1rem;
        margin-bottom: 2rem;
    }
</style>