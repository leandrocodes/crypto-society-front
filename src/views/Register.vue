<template>
  <div class="login">
    <div class="container">
      <div class="columns is-centered is-mobile">
        <div class="column is-4-fullhd is-4-desktop is-6-widescreen is-6-tablet is-11-mobile">
          <h1 class="has-text-centered has-text-light title">Registro</h1>
          <form class="form-login">
            <figure class="image">
              <img src="../assets/img/login-illustration.png" alt srcset />
            </figure>
            <div class="field">
              <label class="label has-text-dark has-text-weight-semibold is-size-6">Email</label>
              <div class="control has-icons-left has-icons-right">
                <input class="has-text-dark input" type="email" placeholder="nome@mail.com" />
                <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
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
                <button @click.prevent="register" class="button is-link">Criar conta</button>
              </div>
            </div>
            <div class="field">
              Já tem uma conta?
              <a class="has-text-info">Login</a>
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
    register() {
      /* eslint-disable no-console */
      console.log('criando')
      this.axios
        .post('register/', {
          email: this.email,
          password: this.password,
          full_name: 'leandro',
          gender: '1',
          cpf: '123',
          telephone: '123',
          address: 'rua marcelino'
        }, { useCredentails: true })
        .then(function(response) {
          console.log('criou')
          console.log(response)
        })
        .catch(function(error) {
          console.log('errou')
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