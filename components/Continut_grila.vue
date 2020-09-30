<template>
    <div class="card">

    <div v-if="!editing">
        <div class="card-header">
            <h1>Autor: {{grila.creator}}</h1>
        </div>
        <!-- VIEW FORM -->
        <div class="card-content">
            <div class="content">
                {{grila.cerinta}}
            <br>
        <section class="var">
            <div class="field"
            v-for="(varianta, key) of variante"
            :key="key">
                <b-radio v-model="radio"
                    :native-value="key">
                    {{varianta}}
                </b-radio>
            </div>
            <p>{{this.$store.getters.brainPoints}}</p>
        </section>
            <h1>Brain score: {{grila.scor}}</h1>
            <h1>Rating: {{grila.rating}} stele</h1>
            <!-- <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time> -->
            </div>
        </div>
        <footer class="card-footer">
            <b-button @click.native="Raspunde" class="card-footer-item">Raspunde</b-button>
            <b-button v-if="!editing" @click.native="Edit" class="card-footer-item">Edit</b-button>
            <b-button v-if="!editing" @click.native="Delete" class="card-footer-item">Delete</b-button>
        </footer>
    </div>
    <div v-if="editing">
        <!-- EDIT FORM -->
        <h1>NU SE POT SCHIMBA MATERIILE SI CATEGORIILE INCA</h1>
        <div class="card-content">
            <section>
        <h1 class="header"> Modifica grila </h1>
        <b-field label="Cerinta">
            <b-input 
                type="textarea"
                v-model="copie_grila.cerinta"
                ></b-input>
            </b-field>
        <b-field label="Numar variante" >
            <b-input v-model="copie_grila.nr_variante" ></b-input>
        </b-field>
        
        <b-field v-for="idx in Number(copie_grila.nr_variante)"
        :key="idx"
        :label="'Varianta ' + idx"
        >
            <b-input type="textarea" v-model="copie_variante[idx-1]"></b-input>
        </b-field>

        <b-field label="Raspuns corect">
            <b-select 
            placeholder="Alege varianta corecta"
            v-model="copie_grila.raspuns_corect">
                <option v-for="i in Number(copie_grila.nr_variante)"
                :key="i"
                :value="Number(i)"
                > Varianta {{i}} </option>
            </b-select>
        </b-field>

        <b-field label="Brain points">
            <b-input v-model="copie_grila.scor"></b-input>
        </b-field>

        <b-field label="Materie">
            <b-select 
            placeholder="Selecteaza materia"
            @change.native="PopuleazaCategorii($event)"
            v-model="nume_materie">
                <option v-for="(materie, idx) in this.materii"
                :key="idx"
                :value="materie"
                > {{materie}} </option>
            </b-select>
        </b-field>
        <b-field label="Categorie">
            <b-select 
            placeholder="Selecteaza categoria"
            v-model="nume_categorie">
                <option v-for="(cat, idx) in this.categorii"
                :key="idx"
                :value="cat"
                > {{cat}} </option>
            </b-select>
        </b-field>
    </section>
        </div>
        <footer class="card-footer">
            <b-button v-if="editing" @click.native="Save" class="card-footer-item">Save</b-button>
            <b-button v-if="editing" @click.native="Cancel" class="card-footer-item">Cancel</b-button>
            <b-button v-if="editing" @click.native="Delete" class="card-footer-item">Cancel</b-button>
        </footer>
    </div>
</div>
</template>

<script>
export default {
    props:{
        grila: {
            type: Object
        }
    },
    data() {
        return {
            nume_materie: null,
            nume_categorie: null,
            materii: null,
            categorii: null,
            editing: false,
            variante: [],
            copie_variante: [],
            copie_grila: this.grila,
            radio: ""
        }
    },
    computed: {
        isEditing: function(){return this.editing},
    },
    methods: {
        Save: function(){
            this.grila = this.copie_grila;
            this.varainte = this.copie_variante;
            for(let i=0; i<this.variante.length; i++){
                const nrv = `Varianta${i+1}`;
                this.grila[nrv] = this.variante[i];
            }
            this.$axios.put(`/grile/${this.grila.idGrile}`, this.copie_grila).then(res=>this.editing=false);
        },
        Edit: function(){
            this.editing = true
        },
        Cancel: function(){
            this.copie_grila=this.grila
            this.copie_variante=this.variante
            this.editing=false
        },
        Delete: function(){
            this.editing = false 
            this.$axios.delete(`/grile/${this.grila.idGrile}`)
        },
        Raspunde: function(){
            if(Number(this.radio) + 1 == Number(this.grila.raspuns_corect)){
                this.$store.dispatch('incrementBrainPoints', {id: this.$auth.user._id, incr: Number(this.grila.scor)})
            }
            else
                this.$store.dispatch('incrementBrainPoints', {id: this.$auth.user._id, incr: -Number(this.grila.scor)})

        },
        PopuleazaCategorii: function(e) {
            this.$axios.get(`/categorii/dupa_categorii/${this.grila.idMaterie}`).then( (res) => {
                this.categorii = res.data
            })
        }
    },
    mounted(){
        const path = this.$route.fullPath.split('/')
        this.nume_materie = path[2]
        this.nume_categorie = path[3]
        this.$axios.get(`/materii/${this.grila.idMaterie}`).then((res) => {
            this.$axios.get(`/categorii/nume/${this.nume_categorie}/${res.data.idMaterii}`).then((res)=>{
                this.nume_categorie = res.data;
            })
        })
        for(let i=0; i<this.grila.nr_variante; i++){
            const nrv = `Varianta${i+1}`;
            this.variante.push(this.grila[nrv]);
        }
        this.copie_variante = this.variante;
    }
}
</script>

<style scoped>
    .card {
        margin-bottom: 2rem;
    }
    .var{
        padding-bottom: 2rem;
        padding-left: 4rem;
        padding-top: 1rem;
        padding-right: 1rem;
    }
</style>