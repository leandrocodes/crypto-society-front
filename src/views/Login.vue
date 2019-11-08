<template>
  <div class="container login">
    <div class="columns is-centered is-mobile">
      <div class="column is-4-fullhd is-4-desktop is-6-widescreen is-6-tablet is-8-mobile">
        <form class="form-login">
          <figure class="image">
            <img src="../assets/img/login-illustration.png" alt srcset />
          </figure>
          <div class="field">
            <label class="label has-text-dark has-text-weight-semibold is-size-5">Email</label>
            <div class="control has-icons-left has-icons-right">
              <input class="has-text-dark input is-medium" type="email" placeholder="nome@mail.com" />
              <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
              </span>
            </div>
          </div>
          <div class="field">
            <label class="label has-text-dark has-text-weight-semibold is-size-5">Senha</label>
            <div class="control has-icons-left has-icons-right">
              <input class="has-text-dark input is-medium" type="password" placeholder="***" />
              <span class="icon is-small is-left">
                <i class="fas fa-lock"></i>
              </span>
            </div>
          </div>
        </form>
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
      console.log(this.axios.get('pokemon/ditto/'))
      //console.log(this.email, this.senha)
    }
  }
}
</script>

<style>
body {
  background-image: url('../assets/img/bg-login.png') !important;
  background-size: 100%;
  background-position: bottom;
}
</style>