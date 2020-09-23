<template>
  <section class="course">
    <h1 class="title is-1 has-text-centered">{{courseTitle}}</h1>
    <article class="has-text-justified">
        <p>{{description}}</p>
    </article>
    <vue-core-video-player class="player"
  :src="videoSrc"/>
  </section>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    props: {
        videoSrc: {
            type: String,
            required: true,
            default: "../assets/Sample.mp4"
        },
        courseTitle: {
            type: String,
            required: true,
            default: "VueJS de la A la Z",
        },
        description: {
            type: String,
            required: true,
            default: "Curs care acopera conceptele de baza din JS, HTML, CSS, introduce framework-ul VueJS etcetc Curs care acopera conceptele de baza din JS, HTML, CSS, introduce framework-ul VueJS etcetc Curs care acopera conceptele de baza din JS, HTML, CSS, introduce framework-ul VueJS etcetc Curs care acopera conceptele de baza din JS, HTML, CSS, introduce framework-ul VueJS etcetcCurs care acopera conceptele de baza din JS, HTML, CSS, introduce framework-ul VueJS etcetc",
        }
    }
}
</script>

<style>
    .ttl {
        padding-top: 1rem;
    }

    .des {
        padding-top: 2rem;
        padding-left: 1rem;
        padding-right: 1rem;
    }

    .cvi {
        padding-left: 2rem;
        padding-top: 2rem; 
    }

    .content {
        padding-left: 4rem;
    }
    .player { 
        margin-top: 2rem;
        width: 60%;
        height: 60%;
    }
</style>