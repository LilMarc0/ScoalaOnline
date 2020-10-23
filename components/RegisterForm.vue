<template>
    <section>
        <h1 class="header"> Creeaza un cont nou </h1>
        <b-field label="Nume">
        <b-input v-model="model.prenume"></b-input>
        </b-field>
        <b-field label="Prenume">
            <b-input v-model="model.nume"></b-input>
        </b-field>
        <b-field label="Email">
            <b-input
                v-model="model.email" 
                type="email"
                maxlength="30">
            </b-input>
        </b-field>

        <b-field label="Username">
            <b-input 
            v-model="model.username"
            maxlength="30"></b-input>
        </b-field>

        <b-field label="Parola">
            <b-input 
            type="password"
             maxlength="30"
             v-model="model.password"
             ></b-input>
        </b-field>

        <b-field label="Tip cont">
            <b-select 
            placeholder="Selecteaza tipul contului"
            v-model="model.rol">
                <option value="profesor">Profesor</option>
                <option value="elev">Elev</option>
            </b-select>
        </b-field>
        <div class="container">
            <b-button
                tag="input"
                native-type="submit"
                value="Inregistrare"
                @click="handleRegister" />
        </div>

    </section>
</template>

<script>
export default {
    props: {
    model: {
      type: Object,
      default: () => ({}),
    },
  },
    methods: {
        handleRegister(evt) { 
            this.model.createDate = new Date(Date.now()).toISOString().slice(0, 19).replace('T', ' ');
            this.$axios.post("/register", this.model).then((res) => {
                this.$router.push("Login");
            });
        },
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