<template>
        
</template>


<script>
export default {
    name: 'creeazagrile',
    layout: 'default',
    data() {
        return {
            model: {
                type: Object,
                default: () => {
                    return {
                        variante: []
                    };
                },
            },
        }
    },
    mounted() {
        this.$axios.get('/materii').then((res)=>{
            this.materii = res.data
        })
        const fp = this.$route.fullPath.split('/')
        const materie = fp[2]
        const categorie = fp[3]
        const path = `/grila/${materie}/${categorie}/${this.from}` 
        this.$axios.get(path).then( res => {
            this.grila = new Object(res.data)
        })
    },
    computed: {

    },
    methods: {
        TrimiteGrila: function() {
            this.model.variante = this.variante
            this.model.nrVariante = this.nrVariante
            this.model.user = this.$auth.user.username
            this.$axios.post('/categorii', this.model)
        },
        PopuleazaCategorii: function(e) {
            this.$axios.get(`/categorii/${this.model.materie}`)
            .then( (res) => {
                this.categorii = res.data
            })
        }
    },
    props: {
        from: {
            type: String
        }
    }
}
</script>

<style scoped>
    .header { 
        
    }

    .container {
        background-color: rgb(212, 211, 211);
        border-radius: 2rem;
    }
</style>