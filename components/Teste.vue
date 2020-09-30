<template>
<div class="container column is-12">
    <div class="columns is-mobile">
        <TestCard v-for="(curs, key) of teste"
            :key="key"
            :title=curs.title
            :subtitle=curs.subtitle
            :content=curs.content
            :icon=curs.imagine
            :to=curs.to
            />
    </div>
</div>
</template>

<script>

export default {
    components: {
    },

    data () {
    return {
      teste: [
        {
          title: 'Informatica',
          subtitle: 'Invata sa programezi intr-un mod interactiv',
          content: 'Descriere amanuntita etc, Descriere amanuntita etc, Descriere amanuntita etc, Descriere amanuntita etc, ',
          imagine: 'matrix',
          to: "{name: 'teste', params: {nume: 'informatica'}}"
        },
        {
          title: 'Matematica',
          subtitle: 'Grile de matematica',
          content: 'Descriere amanuntita etc, Descriere amanuntita etc, Descriere amanuntita etc, Descriere amanuntita etc, ',
          imagine: 'mate',
          to: "/teste"


        },
      ]
    }
  }
}
</script>

<style scoped>
.container {
    margin-top: 25px;
    margin-bottom: 25px;
    font-size: 21px;
    text-align: center;

    -webkit-animation: fadein 1s; /* Safari, Chrome and Opera > 12.1 */
       -moz-animation: fadein 1s; /* Firefox < 16 */
        -ms-animation: fadein 1s; /* Internet Explorer */
         -o-animation: fadein 1s; /* Opera < 12.1 */
            animation: fadein 1s;
}

@keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Firefox < 16 */
@-moz-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Safari, Chrome and Opera > 12.1 */
@-webkit-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Internet Explorer */
@-ms-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}
</style>