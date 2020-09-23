<template>
  <section>
    <div class=" has-text-centered">
    <router-link class="title is-1 ttl" :to="{path: 'view'}" append> {{courseTitle}}</router-link>
    </div>
    
      <article class="has-text-justified des">
          <p>
              {{description}}
          </p>
      </article>
    <h2 class="title is-3 cvi">Ce vei invata: </h2>
    <div class="content is-medium">
        <ol type="1">
            <li v-for="(item, key) of cvi"
            :key="key"> {{item}} </li>
        </ol>
    </div>
  </section>
</template>

<script>
export default {
    data(){
        return {
        }
    },
    methods: {
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
        },
        cvi: {
            type: Array,
            required: true,
            default: ["Html", "CSS", "JavaScript", "VueJS"]
        }
    }
}
</script>

<style scoped>
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
</style>