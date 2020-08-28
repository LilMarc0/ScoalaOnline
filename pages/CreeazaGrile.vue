<template>
    <section class="container column is-6">
        <section>
        <h1 class="header"> Adauga Grila </h1>
        <b-field label="Cerinta">
        <b-input type="textarea" v-model="model.cerinta"></b-input>
        </b-field>
        <b-field label="Numar variante">
            <b-input value="4" v-model="nrVariante">4</b-input>
        </b-field>
        
        <b-field v-for="idx in Number(this.nrVariante)"
        :key="idx"
        :label="'Varianta ' + idx"
        >
            <b-input type="textarea" v-model="variante[idx-1]"></b-input>
        </b-field>

        <b-field label="Materie">
            <b-select 
            placeholder="Selecteaza materia"
            v-model="model.materie"
            @change.native="PopuleazaCategorii($event)">
                <option v-for="materie in this.materii"
                :key="materie"
                :value="materie"
                > {{materie}} </option>
            </b-select>
        </b-field>
        <b-field label="Categorie">
            <b-select 
            placeholder="Selecteaza categoria"
            v-model="model.categorie">
                <option v-for="cat in this.categorii"
                :key="cat"
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
            nrVariante: 4,
            variante: [],
            materii: [],
            categorii: []
        }
    },
    mounted() {
        this.$axios.get('/materii').then((res)=>{
            this.materii = res.data
        })
    },
    computed: {

    },
    methods: {
        TrimiteGrila: function() {
            this.model.variante = this.variante
            this.model.nrVariante = this.nrVariante
            this.$axios.post('/categorii', this.model)
        },
        PopuleazaCategorii: function(e) {
            this.$axios.get(`/categorii/${this.model.materie}`)
            .then( (res) => {
                this.categorii = res.data
                console.log(this.categorii);
            })
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