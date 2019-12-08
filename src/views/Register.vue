<template>
  <div class="login">
    <div class="container">
      <div class="columns is-centered is-mobile">
        <div class="column is-4-fullhd is-4-desktop is-6-widescreen is-6-tablet is-11-mobile">
          <h1 class="has-text-centered has-text-light title has-text-weight-medium">
            Registro
            <div class="title-dash"></div>
          </h1>
          <b-progress type="is-secondary" :value="progress" size="is-medium" show-value>
            <p class="has-text-dark">Etapa {{step}}/3 do cadastro.</p>
          </b-progress>
          <div class="field">
            <h6 class="has-text-centered has-text-light">Bem-vindo! Siga os passos para criar uma conta e ter acesso a plataforma.</h6>
          </div>

          <div v-if="!created">
            <div class="step1" v-show="step === 1">
              <form class="form-login">
                <figure class="image">
                  <img src="../assets/img/login-illustration.png" alt srcset />
                </figure>

                <b-field label="Email" style="width: 100%">
                  <b-input placeholder="nome@email.com" expanded type="email" icon="email" v-model="email"></b-input>
                </b-field>

                <b-field label="Senha" style="width: 100%">
                  <b-input placeholder="***" expanded type="password" icon="lock" v-model="password"></b-input>
                </b-field>

                <b-field>
                  <div class="control">
                    <button @click.prevent="next" class="button is-link">
                      Dados pessoais
                      <span style="margin-left: 10px">
                        <i class="far fa-hand-point-right"></i>
                      </span>
                    </button>
                  </div>
                </b-field>

                <b-field>
                  Já tem uma conta?
                  <router-link class="has-text-info" to="/login">Faça o Login</router-link>
                </b-field>
              </form>
            </div>

            <div v-show="step === 2">
              <form class="form-login">
                <figure class="image">
                  <img src="../assets/img/checklist.png" alt srcset />
                </figure>

                <b-field label="Nome Completo" style="width: 100%">
                  <b-input placeholder="João Ninguém" expanded type="text" icon="account" v-model="full_name"></b-input>
                </b-field>

                <b-field label="Telefone" style="width: 100%">
                  <b-input placeholder="67 12345 6789" expanded type="text" icon="phone" v-model="telephone"></b-input>
                </b-field>

                <b-field label="CPF" style="width: 100%">
                  <b-input placeholder="123.456.789-10" expanded type="text" icon-pack="fas" icon="fingerprint" v-model="cpf"></b-input>
                </b-field>

                <div class="block">
                  <b-radio v-model="gender" native-value="Feminino">Feminino</b-radio>
                  <b-radio v-model="gender" native-value="Masculino">Masculino</b-radio>
                </div>

                <b-field>
                  <div class="control">
                    <button @click.prevent="next" class="button is-link">
                      Dados de endereço
                      <span style="margin-left: 10px">
                        <i class="far fa-hand-point-right"></i>
                      </span>
                    </button>
                  </div>
                </b-field>

                <b-field>
                  Já tem uma conta?
                  <router-link class="has-text-info" to="/login">Faça o Login</router-link>
                </b-field>
              </form>
            </div>

            <div v-show="step === 3">
              <form class="form-login">
                <figure class="image">
                  <img src="../assets/img/checklist.png" alt srcset />
                </figure>

                <b-field label="Bairro" style="width: 100%">
                  <b-input placeholder="Jardim das Rosas" expanded type="text" icon="map" v-model="bairro"></b-input>
                </b-field>

                <b-field label="Rua" style="width: 100%">
                  <b-input placeholder="Rua Quinze de Maio" expanded type="text" icon="routes" v-model="rua"></b-input>
                </b-field>
                <b-field label="Número" style="width: 100%">
                  <b-input placeholder="123" expanded type="text" icon="map-marker" v-model="numero"></b-input>
                </b-field>

                <b-field>
                  <div class="control">
                    <button @click.prevent="register" class="button is-link">
                      Cadastrar
                      <span style="margin-left: 10px">
                        <i class="far fa-hand-point-right"></i>
                      </span>
                    </button>
                  </div>
                </b-field>

                <b-field>
                  Já tem uma conta?
                  <router-link class="has-text-info" to="/login">Faça o Login</router-link>
                </b-field>
              </form>
            </div>
          </div>

          <div v-else>
            <div class="form-login">
              <figure class="image">
                <img src="https://img.icons8.com/officel/512/000000/inspection.png" />
              </figure>
              <b-field>Conta criada com sucesso!</b-field>
              <b-field>
                <router-link class="has-text-info" to="/login">Fazer o Login agora!</router-link>
              </b-field>
            </div>
          </div>
        </div>
      </div>
    </div>
    <b-loading is-full-page :active.sync="isLoading" :can-cancel="false">
      <b-icon class="has-text-light" pack="fas" icon="sync-alt" size="is-large" custom-class="fa-spin"></b-icon>
    </b-loading>
  </div>
</template>

<script>
export default {
  data: () => ({
    email: '',
    password: '',
    full_name: '',
    gender: '',
    cpf: '',
    telephone: '',
    bairro: '',
    rua: '',
    numero: '',
    step: 1,
    progress: 0,
    isLoading: false,
    created: false
  }),
  methods: {
    next() {
      this.step++
      this.progress += 33.33
    },

    register() {
      this.progress = 100
      this.isLoading = true
      let address = `Bairro ${this.bairro}, Rua ${this.rua}, Número ${this.numero}`

      this.axios.post('register/', {
        email: this.email,
        password: this.password,
        full_name: this.full_name,
        gender: this.gender,
        cpf: this.cpf,
        telephone: this.telephone,
        address
      })
        .then(() => {
          this.created = true
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