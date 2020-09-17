<template>
    <div class="card">

    <div v-if="!editing">
        <!-- VIEW FORM -->
        <div class="card-content">
            <div class="content">
                {{cerinta}}
            <br>
            <Variante :variante="variante"/>
            <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </div>
        </div>
        <footer class="card-footer">
            <b-button v-if="!editing" @click.native="Edit" class="card-footer-item">Edit</b-button>
            <b-button v-if="!editing" @click.native="Delete" class="card-footer-item">Delete</b-button>
        </footer>
    </div>
    <div v-if="editing">
        <!-- EDIT FORM -->
        <div class="card-content">
            <section>
        <h1 class="header"> Modifica grila </h1>
        <b-field label="Cerinta">
            <b-input 
                type="textarea"
                v-model="cerinta"
                ></b-input>
            </b-field>
        <b-field label="Numar variante" >
            <b-input v-model="nr_variante" ></b-input>
        </b-field>
        
        <b-field v-for="idx in Number(nr_variante)"
        :key="idx"
        :label="'Varianta ' + idx"
        >
            <b-input type="textarea" v-model="variante[idx-1]"></b-input>
        </b-field>

        <b-field label="Raspuns corect">
            <b-select 
            placeholder="Alege varianta corecta"
            v-model="raspuns_corect">
                <option v-for="i in Number(this.nr_variante)"
                :key="i"
                :value="Number(i)"
                > Varianta {{i}} </option>
            </b-select>
        </b-field>

        <b-field label="Materie">
            <b-select 
            placeholder="Selecteaza materia"
            @change.native="PopuleazaCategorii($event)"
            v-model="materie">
                <option v-for="(materie, idx) in this.materii"
                :key="idx"
                :value="materie"
                > {{materie}} </option>
            </b-select>
        </b-field>
        <b-field label="Categorie">
            <b-select 
            placeholder="Selecteaza categoria"
            v-model="categorie">
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
        </div>
        <footer class="card-footer">
            <b-button v-if="editing" @click.native="Save" class="card-footer-item">Save</b-button>
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
            cerinta: this.grila.cerinta,
            raspuns_corect: this.grila.raspuns_corect,
            nr_variante: Number(this.grila.nr_variante),
            Varianta1: this.grila.Varianta1,
            Varianta2: this.grila.Varianta2,
            Varianta3: this.grila.Varianta3,
            Varianta4: this.grila.Varianta4,
            Varianta5: this.grila.Varianta5,
            idMaterie: this.grila.idMaterie,
            idCategorie: this.grila.idCategorie,
            categorii: [],
            materii: [],
            editing: false,
            nume_materie: "",
            nume_categorie: "",
            variante: []
        }
    },
    computed: {
        isEditing: function(){return this.editing},
        cnume_categorie: function(){return this.nume_categorie},
        cnume_materie: function(){return this.nume_materie},

    },
    methods: {
        Save: function(){
            this.$axios.post('')
        },
        Edit: function(){
            this.editing = true
        },
        Delete: function(){
            this.editing = false 
        }, 
        TrimiteGrila: function() {
            this.model.variante = this.variante
            this.model.nr_variante = this.nr_variante
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
    mounted(){
        console.log("Cer nume materie si categorie ", this.idMaterie, this.idCategorie);
        this.nume_materie = this.$axios.get(`/materii/${this.materie}`);
        this.nume_categorie = this.$axios.get(`/categorii/${this.categorie}`)
        for(let i=0; i<this.nr_variante; i++){
                const nrv = `Varianta${i+1}`;
                this.variante[i] = this[nrv];
        }
    }
}
</script>