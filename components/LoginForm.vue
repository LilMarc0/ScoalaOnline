<template>
    <section>
        <h1 class="header"> Logheaza-te </h1>
        <b-field label="Email">
            <b-input type="email"
                maxlength="30"
                v-model="model.email"
                >
            </b-input>
        </b-field>

        <b-field label="Parola">
            <b-input type="password" maxlength="30"
            v-model="model.password"></b-input>
        </b-field>

        <div class="container">
            <b-button
                tag="input"
                native-type="submit"
                @click="handleLogin"
                value="Logare" />
        </div>

    </section>
</template>

<script>
export default {
    props: {
        model: {
            type: Object,
            default: () => {
                return {};
            },
        },
    },
     data() {
    return {
        loading: false,
      badLogin: false
    }
  },
  computed: {
    rBadLogin() {return this.badLogin;}
  },
 methods: {
    // handleLogin() {
    //     console.log(this.model);
    //   this.loading = true;
    //     if (this.model.email && this.model.password) {
    //       this.$store.dispatch('login', this.model).then(
    //         () => {
    //           this.$router.push('/');
    //         },
    //         error => {
    //           this.loading = false;
    //           this.message =
    //             (error.response && error.response.data) ||
    //             error.message ||
    //             error.toString();
    //         }
    //       );
    //     }
    //         this.$router.push("/")

    // }
        async handleLogin() {
        this.loading = true;
        if (this.model.email && this.model.password) {
          await this.$auth.loginWith('local', {data: this.model})
          console.log(this.$auth.loggedIn);
          this.$router.push("/")
        }

    }
  }
}
</script>

<style scoped>
    .header{
        text-align: center;
        font-weight: bold;
        font-size: 2rem;
    }
</style>