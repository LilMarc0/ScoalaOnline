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
            curs: null
        }
    },
    mounted() {
         this.$axios.get()
    }
}
</script>

<style>

</style>