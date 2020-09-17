<template>
            <section>
        <h1 class="header"> Adauga Grila </h1>
        <b-field label="Cerinta">
            <b-input 
                type="textarea"
                v-model="model.cerinta"
                :value="this.grila.cerinta"></b-input>
            </b-field>
        <b-field label="Numar variante">
            <b-input value="4" v-model="nr_variante">4</b-input>
        </b-field>
        
        <b-field v-for="idx in Number(this.nr_variante)"
        :key="idx"
        :label="'Varianta ' + idx"
        >
            <b-input type="textarea" v-model="variante[idx-1]"></b-input>
        </b-field>

        <b-field label="Raspuns corect">
            <b-select 
            placeholder="Alege varianta corecta"
            v-model="model.raspuns_corect">
                <option v-for="i in Number(this.nr_variante)"
                :key="i"
                :value="Number(i)"
                > Varianta {{i}} </option>
            </b-select>
        </b-field>

        <b-field label="Materie">
            <b-select 
            placeholder="Selecteaza materia"
            v-model="model.materie"
            @change.native="PopuleazaCategorii($event)">
                <option v-for="(materie, idx) in this.materii"
                :key="idx"
                :value="materie"
                > {{materie}} </option>
            </b-select>
        </b-field>
        <b-field label="Categorie">
            <b-select 
            placeholder="Selecteaza categoria"
            v-model="model.categorie">
                <option v-for="(cat, idx) in this.categorii"
                :key="idx"
                :value="cat"
                > {{cat}} </option>
            </b-select>
        </b-field>
        <div class="container">
            <b-button
                tag="input"
                native-type="submit"
                value="Trimite in baza de date"
                @click="TrimiteGrila" />
        </div>
    </section>
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
            nr_variante: 4,
            variante: [],
            materii: [],
            categorii: [],
            grila: {},
            raspuns_corect: 1
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
            delete this.model.variante;
            this.model.nr_variante = this.nr_variante
            this.model.creator = this.$auth.user.username
            for(let i=0; i<this.nr_variante; i++){
                const nrv = `Varianta${i+1}`
                this.model[nrv] = this.variante[i];
            }
            this.$axios.post('/grile', this.model)
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