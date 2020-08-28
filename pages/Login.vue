<template>
  <section class="container column is-6">
      <LoginForm
      :model="model"
      />
  </section>
</template>

<script>
export default {
  name: 'Login',
  layout: 'register',
  components: {

  },
  data() {
      return {
        model: {
          email: '',
          password: '',
        }
      }
    }
}
</script>

<style scoped>
  .container {
    background-color: rgb(229, 228, 230);
    border-radius: 2rem;
    bottom: 7rem;
    
    -webkit-animation: fadein 0.25s; /* Safari, Chrome and Opera > 12.1 */
       -moz-animation: fadein 0.25s; /* Firefox < 16 */
        -ms-animation: fadein 0.25s; /* Internet Explorer */
         -o-animation: fadein 0.25s; /* Opera < 12.1 */
            animation: fadein 0.25s;
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