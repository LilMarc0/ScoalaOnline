<template>
    <b-navbar class="navbar is-primary is-spaced">
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src="../assets/buefy.png"
                    alt="Lightweight UI components for Vue.js based on Bulma"
                >
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item href="">
                Acasa
            </b-navbar-item>
            <b-navbar-item href="">
                Cursuri
            </b-navbar-item>
            <b-navbar-item href="">
                Teste
            </b-navbar-item>
            <b-navbar-item href="/admin">
                Admin Zone
            </b-navbar-item>
            <nuxt-link v-if="isProf"  class="button is-success" to="/creeazagrile">
                Creeaza Grile
            </nuxt-link>
            <nuxt-link v-if="isProf"  class="button is-danger" to="/creeazacurs">
                Creeaza Curs
            </nuxt-link>
            <b-navbar-dropdown label="Cont">
                <b-navbar-item  v-if="this.$auth.user" :href="'/profil/' + this.$auth.user.id">
                    Profil
                </b-navbar-item>
                <b-navbar-item href="/progres">
                    Progres
                </b-navbar-item>
            </b-navbar-dropdown>
        </template>

        <template slot="end">
            <b-navbar-item tag="div">
                <div class="buttons">
                    <nuxt-link v-if="!isLoggedIn" class="button is-primary" to="/register"> Creeaza cont </nuxt-link>
                    <nuxt-link v-if="!isLoggedIn" class="button is-light" to="/login"> Logare</nuxt-link>
                    <p class="info" v-if="isLoggedIn"> Bine ai venit, {{userName}}, credit: {{credit}}  </p>
                    <b-button v-if="isLoggedIn" class="button is-light" @click="logout"> Log out </b-button>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    data() {
        return {
        }
    },
    props: {

    },
    computed: {
        userName: function() {try {return this.$auth.user.username} catch{return "eroare userName"}},
        isProf: function() {try {return this.$auth.user.role == 'profesor'} catch {return false}},
        isLoggedIn: function() {try { return this.$auth.loggedIn } catch{ return false}},
        credit: function() { return this.$store.getters.brainPoints}
    },
    methods: {
        logout() {
            this.$auth.logout()
            this.$router.push('/')
      },
    },
    mounted(){
    }
}
</script>

<style scoped>
    .info {
        margin-right: 1rem;
    }
</style>