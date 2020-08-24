<template>
    <div class="columns is-mobile">
        <CourseCard v-for="(curs, key) of cursuri"
            :key="key"
            :title=curs.title
            :subtitle=curs.subtitle
            :content=curs.content
            :icon=curs.imagine
            />
    </div>
</template>

<script>
import Card from "./CourseCard"

export default {
    components: {
        Card
    },

    data () {
    return {
      cursuri: [
        {
          title: 'Informatica',
          subtitle: 'Invata sa programezi intr-un mod interactiv',
          content: 'Descriere amanuntita etc, Descriere amanuntita etc, Descriere amanuntita etc, Descriere amanuntita etc, ',
          imagine: 'info.png'
        },
        {
          title: 'Matematica',
          subtitle: 'Grile de matematica',
          content: 'Descriere amanuntita etc, Descriere amanuntita etc, Descriere amanuntita etc, Descriere amanuntita etc, ',
          imagine: 'mate.webp'


        },
        {
          title: 'Istorie',
          subtitle: 'Grile de istorie',
          content: 'Descriere amanuntita etc, Descriere amanuntita etc, Descriere amanuntita etc, Descriere amanuntita etc, ',
          imagine: '~assets/matrix.jpg'
        },
        {
          title: 'Fotografie',
          subtitle: 'curs fotografie ',
          content: 'Descriere amanuntita etc, Descriere amanuntita etc, Descriere amanuntita etc, Descriere amanuntita etc, ',
          imagine: '~assets/matrix.jpg'
        },
      ]
    }
  }
}
</script>