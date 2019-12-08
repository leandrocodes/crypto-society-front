<template>
  <div class="new-funds">
    <div class="columns">
      <div class="column is-2">
        <dashMenu></dashMenu>
      </div>
      <div class="column is-10 has-text-left">
        <h1 class="has-text-dark is-size-2">Novo Fundo</h1>
        <div class="container" style="margin-top: 3em;">
          <div class="columns is-centered">
            <div class="column is-4">
              <form style="display: block; margin: 0 auto;">
                <b-field label="Tempo de contrado (em meses)">
                  <b-select v-model="time" placeholder="Selecione um contrato">
                    <option>12 meses</option>
                    <option>6 meses</option>
                    <option>4 meses</option>
                  </b-select>
                </b-field>
                <b-field label="Forma de depósito">
                  <b-select v-model="currency_type" placeholder="Selecione o depósito">
                    <option>Em cripto</option>
                    <!-- <option> Em real</option>
                    <option> Em dólar</option>-->
                  </b-select>
                </b-field>
                <b-field label="Moeda do fundo">
                  <b-select v-model="currency_fund" placeholder="Selecione a moeda">
                    <option>BTC</option>
                    <option>USDT</option>
                    <option>TUSD</option>
                  </b-select>
                </b-field>
                <b-field label="Valor solicitado">
                  <b-input v-model="value" placeholder="30" width="50"></b-input>
                </b-field>
                <button class="button is-primary" @click.prevent="newFund">
                  Novo Fundo
                  <i style="margin-left: 10px;" class="fas fa-check"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <b-loading is-full-page :active.sync="isLoading" :can-cancel="false">
      <b-icon class="has-text-light" pack="fas" icon="spinner" size="is-large" custom-class="fa-spin"></b-icon>
    </b-loading>
  </div>
</template>

<script>
import dashMenu from '../components/dashboard/menu'
export default {
  data: () => ({
    value: null,
    currency_fund: null,
    currency_type: null,
    time: null,
    isLoading: false
  }),
  components: {
    dashMenu
  },
  computed: {
    localId() {
      return this.$store.state.user.localId
    }
  },
  methods: {
    newFund() {
      this.isLoading = true
      this.axios.post('/investor/funds/', {
        localId: this.localId,
        time: this.time,
        currency_type: this.currency_type,
        currency_fund: this.currency_fund,
        value: this.value
      })
        .then(() => {
          this.$buefy.toast.open({
            message: 'Fundo enviado para avaliação com sucesso!',
            type: 'is-success'
          })
        })
        .catch((err) => {
          this.$buefy.toast.open({
            message: err,
            type: 'is-warning'
          })
        })
        .finally(() => {
          this.isLoading = false
          this.value = null
          this.currency_fund = null
          this.currency_type = null
          this.time = null
        })
    },
  }

}
</script>

<style scoped>
</style>