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
                    <nuxt-link class="button is-light" to="/login"> Logare</nuxt-link>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>