<template>
    <section>
        <b-field label="Email">
            <b-input type="email"
                maxlength="30">
            </b-input>
        </b-field>

        <b-field label="Parola">
            <b-input type="password" maxlength="30"></b-input>
        </b-field>

        <div class="container">
            <b-button
                tag="input"
                native-type="submit"
                value="Logare" />
        </div>

    </section>
</template>

<script>
export default {
}
</script>

<style scoped>
    .header{
        text-align: center;
        font-weight: bold;
        font-size: 2rem;
    }
</style>