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
            <b-navbar-item href="#">
                Acasa
            </b-navbar-item>
            <b-navbar-item href="#">
                Cursuri
            </b-navbar-item>
            <b-navbar-dropdown label="Cont">
                <b-navbar-item href="#">
                    Profil
                </b-navbar-item>
                <b-navbar-item href="#">
                    Altceva
                </b-navbar-item>
            </b-navbar-dropdown>
        </template>

        <template slot="end">
            <b-navbar-item tag="div">
                <div class="buttons">
                    <nuxt-link class="button is-primary" to="/register"> Creeaza cont </nuxt-link>
                    <a class="button is-light">Logare</a>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<style scoped>
    .navbar {
        background-image:
    linear-gradient(to bottom, rgba(140,103,239,0.57),rgba(140,103,239,0.77)),
    url('../assets/elevi.jpg');        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>
