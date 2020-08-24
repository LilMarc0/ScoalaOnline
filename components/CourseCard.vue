<template>
 <div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img src="../assets/info.png" alt="Placeholder image">
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
          <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4">{{title}}</p>
        <p class="subtitle is-6">{{subtitle}}</p>
      </div>
    </div>

    <div class="content">
      {{content}} <a>@bulmaio</a>.
      <a href="#">#css</a> <a href="#">#responsive</a>
      <br>
      <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
    </div>
  </div>
</div>
</template>

<script>
export default {
    data(){
        return {
            img_src: this.icon
        }
    },
    props: {
        title: {
            type: String,
            required: true
        },
        subtitle: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            required: true
        }

    }
}
</script>

<style scoped>
    .card{
        margin: 1rem;
        border-radius: 1rem;
        box-shadow: 10px 10px 8px #888888;
    }
</style>