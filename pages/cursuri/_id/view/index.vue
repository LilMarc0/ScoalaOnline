<template>
    <section class="tile is-parent">
        <Course
        :videoSrc="curs ? curs.videoSrc : null"
        :description="curs ? curs.description : null"
        :courseTitle="curs ? curs.courseTitle : null"
        />
    </section>
</template>

<script>
export default {
    layout: "CursLayout",
    data() {
        return {
            curs: {
                videoSrc: "../assets/Sample.mp4",
                courseTitle: "VueJS de la A la Z",
                description: "Curs care acopera conceptele de baza din JS, HTML, CSS, introduce framework-ul VueJS etcetc Curs care acopera conceptele de baza din JS, HTML, CSS, introduce framework-ul VueJS etcetc Curs care acopera conceptele de baza din JS, HTML, CSS, introduce framework-ul VueJS etcetc Curs care acopera conceptele de baza din JS, HTML, CSS, introduce framework-ul VueJS etcetcCurs care acopera conceptele de baza din JS, HTML, CSS, introduce framework-ul VueJS etcetc",
                }
        }
    },
    mounted() {
        //this.$axios.get()
    }
}
</script>

<style>

</style>