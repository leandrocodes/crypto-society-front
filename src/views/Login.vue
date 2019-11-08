<template>
  <div class="container login">
    <input type="text" v-model="email"> <br>
    <input type="text" v-model="senha">
    <button type="submit" @click="login"> login </button>
  </div> 
</template>

<script>
export default {
  data: () => ({
    email: '',
    senha: ''
  }),
  methods: {
    login() {
      /* eslint-disable no-console */
      console.log(this.axios.get('pokemon/ditto/'))
      //console.log(this.email, this.senha)
    }
  }
}
</script>

<style>

body{
  background-image: url('../assets/img/bg-login.png') !important;
  background-size: 100%;
  background-position: bottom;
}

</style>