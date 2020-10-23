<template>
            <section>
        <h1 class="header"> Adauga Grila </h1>
        <b-field label="Cerinta">
            <b-input 
                type="textarea"
                v-model="model.cerinta"
                :value="model.cerinta"></b-input>
            </b-field>
        <b-field label="Numar variante">
            <b-input value="4" v-model="model.nr_variante">4</b-input>
        </b-field>
        
        <b-field v-for="idx in Number(model.nr_variante)"
        :key="idx"
        :label="'Varianta ' + idx"
        >
            <b-input type="textarea" v-model="variante[idx-1]"></b-input>
        </b-field>

        <b-field label="Raspuns corect">
            <b-select 
            placeholder="Alege varianta corecta"
            v-model="model.raspuns_corect">
                <option v-for="i in Number(model.nr_variante)"
                :key="i"
                :value="Number(i)"
                > Varianta {{i}} </option>
            </b-select>
        </b-field>
        <b-field label="Brain points">
            <b-input v-model="model.scor"></b-input>
        </b-field>
        <b-field label="Materie">
            <b-select 
            placeholder="Selecteaza materia"
            v-model="model.materie"
            @change.native="PopuleazaCategorii($event)">
                <option v-for="(materie, idx) in materii"
                :key="idx"
                :value="materie"
                > {{materie.nume_materie}} </option>
            </b-select>
        </b-field>
        <b-field label="Categorie">
            <b-select 
            placeholder="Selecteaza categoria"
            v-model="model.categorie">
                <option v-for="(cat, idx) in categorii"
                :key="idx"
                :value="cat"
                > {{cat.nume_categorie}} </option>
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
            model:{
                cerinta: "Insereaza cerinta",
                nr_variante: 4,
                raspuns_corect: 1,
                creator: "LilMarco",
                idCategorie: 0,
                idMaterie: 0
            },
            variante: [],
            materii: [],
            categorii: [],
        }
    },
    mounted() {
        this.$axios.get('/materii').then((res)=>{
            this.materii = res.data;
        })
        const fp = this.$route.fullPath.split('/')
        const materie = fp[2]
        const categorie = fp[3]

        // const path = `/grila/${materie}/${categorie}/${this.from}` 
        // this.$axios.get(path).then( res => {
        //     this.grila = new Object(res.data)
        // })
    },
    computed: {

    },
    methods: {
        TrimiteGrila: function() {
            this.model.creator = this.$auth.user.username;
            this.model.idMaterie = this.model.materie.idMaterii;
            this.model.idCategorie = this.model.categorie.idCategorii;
            delete this.model.materie;
            delete this.model.categorie;
            for(let i=0; i<this.model.nr_variante; i++){
                const nrv = `Varianta${i+1}`
                this.model[nrv] = this.variante[i];
            }
            this.$axios.post('/grile', this.model)

            this.$buefy.snackbar.open({
                    duration: 5000,
                    message: 'Grila a fost acceptata',
                    position: 'is-bottom-left',
                })
            this.$router.push('/')
        },
        PopuleazaCategorii: function(e) {
            this.$axios.get(`/categorii/dupa_materie/${this.model.materie.idMaterii}`)
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