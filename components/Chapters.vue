<template>
    <div>
    <h1 class="title">Capitole:</h1>
    <b-field grouped group-multiline>
    <button class="button field is-danger" @click="adaugaCapitol">
            <b-icon icon="plus"></b-icon>
            <span>Adauga Capitol</span>
    </button>
     <button class="button field is-danger" @click="stergeSelectii">
            <b-icon icon="plus"></b-icon>
            <span>Sterge selectiile</span>
    </button>
    <b-checkbox v-model="editing">Click editeaza capitolul (testare)</b-checkbox>
</b-field>

    <section v-if="capitole">
        <b-table 
        :data="capitole" 
        :columns="columns"
        :checked-rows.sync="selectii"
        checkable
        selectable
        checkbox-position="left"
        @select="clickChapter"
        >
            <!-- <template slot="actions" slot-scope="row">
                <b-button @click="clickChapter(row)"> Edit </b-button>
                <b-button @click="deleteChapter(row)"> Delete </b-button>
            </template> -->
        </b-table>
    </section>
    </div>
</template>

<script>

import CapitolForm from "@/components/CapitolForm"
import CapitolEditForm from "@/components/CapitolEditForm"

export default {
    data() {
        return {
            columns: [
                {
                    field: 'nume',
                    label: 'Nume',
                },
                {
                    field: 'descriere',
                    label: 'Descriere',
                },
                {
                    field: 'createdAt',
                    label: 'Data crearii',
                    centered: true
                },
                {
                    field: 'updatedAt',
                    label: 'Data update',
                    centered: true
                }
            ],
            capitole: null,
            selectii: [],
            editing: false,
        }
    },
    props: {
        chapters: {
            type: Array
        }
    },
    mounted(){
        this.capitole = this.chapters;
    },
    methods: {
        adaugaCapitol() {
            this.$buefy.modal.open({
                parent: this,
                component: CapitolForm,
                hasModalCard: true,
                customClass: 'custom-class custom-class-2',
                trapFocus: true,
                events: {
                    
                    'insert': insertedChapter => {
                        console.log("modal catre chapters: ", insertedChapter);
                        this.$emit('insertChapter', insertedChapter);
                    }
                }
            })
        },
        clickChapter(chapter){
            if(this.editing){
                this.$buefy.modal.open({
                    parent: this,
                    component: CapitolEditForm,
                    hasModalCard: true,
                    customClass: 'custom-class custom-class-2',
                    trapFocus: true,
                    events: {
                    'insert': insertedChapter => {
                        console.log("modal catre chapters: ", insertedChapter);
                        this.$emit('insertChapter', insertedChapter);
                    }
                }
                })
            } else {
                this.$emit('viewChapter', chapter)
            }

        },
        stergeSelectii(){
            this.selectii.forEach((selectie) => {
                this.$axios.delete(`/capitol/${selectie.id}`).then((res)=>{
                    this.$buefy.snackbar.open({
                        duration: 5000,
                        message: `Capitolul ${res.data.nume} a fost sters.`,
                        position: 'is-bottom-left',
                    })
                })
            })
        }
    }
}
</script>

<style>

</style>