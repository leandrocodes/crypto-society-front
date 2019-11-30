<template>
  <div class="login">
    <div class="container">
      <div class="columns is-centered is-mobile">
        <div class="column is-4-fullhd is-4-desktop is-6-widescreen is-6-tablet is-11-mobile">
          <h1 class="has-text-centered has-text-light title has-text-weight-medium">
            Login
            <div class="title-dash"></div>
          </h1>
          <div class="field">
            <h6 class="has-text-centered has-text-light">Bem-vindo de volta! Faça o login para acessar a plataforma.</h6>
          </div>
          <form class="form-login">
            <div class="field has-text-centered">
              Não tem uma conta ainda?
              <router-link class="has-text-info" to="/register">Criar uma agora</router-link>
            </div>
            <figure class="image">
              <img src="../assets/img/login-illustration.png" alt srcset />
            </figure>
            <div class="field">
              <label class="label has-text-dark has-text-weight-semibold is-size-6">Email</label>
              <div class="control has-icons-left has-icons-right">
                <input class="has-text-dark input" type="email" placeholder="nome@mail.com" />
                <span class="icon is-small is-left">
                  <i class="fas fa-envelope"></i>
                </span>
              </div>
            </div>
            <div class="field">
              <label class="label has-text-dark has-text-weight-semibold is-size-6">Senha</label>
              <div class="control has-icons-left has-icons-right">
                <input class="has-text-dark input" type="password" placeholder="***" />
                <span class="icon is-small is-left">
                  <i class="fas fa-lock"></i>
                </span>
              </div>
            </div>
            <div class="field is-grouped">
              <div class="control">
                <button @click.prevent="login" class="button is-link">Login</button>
              </div>
            </div>
            <div class="field has-text-left">
              <a class="has-text-info">Esqueci minha senha</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    email: '',
    password: ''
  }),
  methods: {
    login() {
      /* eslint-disable no-console */
      this.axios
        .post('register/', {
          email: this.email,
          password: this.password
        })
        .then(function(response) {
          console.log(response)
        })
        .catch(function(error) {
          console.log(error)
        })
      //console.log(this.email, this.senha)
    }
  }
}
</script>

<style scoped>
.login {
  overflow: hidden;
  height: 100vh;
  background-image: url('../assets/img/bg-login.png') !important;
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: bottom;
}
</style>