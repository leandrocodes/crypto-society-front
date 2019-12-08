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
            <figure class="image">
              <img src="../assets/img/login-illustration.png" alt srcset />
            </figure>

            <b-field label="Email" style="width: 100%">
              <b-input placeholder="nome@email.com" expanded type="email" icon="email" v-model="email"></b-input>
            </b-field>

            <b-field label="Senha" style="width: 100%">
              <b-input placeholder="***" expanded type="password" icon="lock" v-model="password" password-reveal></b-input>
            </b-field>

            <b-field>
              <div class="control">
                <button @click.prevent="login" class="button is-link">
                  Login
                  <span style="margin-left: 10px">
                    <i class="far fa-hand-point-right"></i>
                  </span>
                </button>
              </div>
            </b-field>

            <b-field>
              Não tem uma conta?
              <router-link class="has-text-info" to="/register">Faça o cadastro</router-link>
            </b-field>
          </form>
        </div>
      </div>
    </div>
    <b-loading is-full-page :active.sync="isLoading" :can-cancel="false">
      <b-icon class="has-text-light" pack="fas" icon="spinner" size="is-large" custom-class="fa-spin"></b-icon>
    </b-loading>
  </div>
</template>

<script>
export default {
  data: () => ({
    email: '',
    password: '',
    isLoading: false
  }),
  methods: {
    login() {
      this.isLoading = true
      this.axios.post('login/', {
        email: this.email,
        password: this.password
      })
        .then((response) => {
          this.$router.push('/dashboard')
          this.$store.state.user.email = response.data.email
          this.$store.state.user.localId = response.data.localId
          this.$store.state.user.logado = true

        })
        .catch(() => {

        })
        .finally(() => {
          this.isLoading = false
        })
    }
  }
}
</script>

<style scoped>
.login {
  height: 100vh;
  background-image: url('../assets/img/bg-login.png') !important;
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: bottom;
}
</style>