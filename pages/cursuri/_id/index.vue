<template>
<div class="tile is-parent">
    <CourseOverview/>
</div>  
</template>

<script>
export default {
    layout: "CursLayout",
    data() {
        return {
            id: 0
        }
    },
    mounted(){
         this.id = this.$route.fullPath.split('/')[2];
    }
}
</script>

<style>
    .h1 {
        font-weight: bold;
        text-align: center;
    }
</style>