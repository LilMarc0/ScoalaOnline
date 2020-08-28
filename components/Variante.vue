<template>
    <section class="var">
        <div class="field"
        v-for="(varianta, key) of variante"
        :key="key">
            <b-radio v-model="radio"
                native-value="default">
                {{varianta}}
            </b-radio>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                radio: 'default'
            }
        },
        props: {
            variante: {
                type: Array,
            },
            raspuns_corect: {
                type: Number,
                default: 2
            }
        }
    }
</script>

<style scoped>
    .var{
        padding-bottom: 2rem;
        padding-left: 4rem;
        padding-top: 1rem;
        padding-right: 1rem;
    }
</style>