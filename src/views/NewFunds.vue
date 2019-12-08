<template>
  <div class="dashboard">
    <div class="columns">
      <div class="column is-2">
        <dashMenu></dashMenu>
      </div>
      <div class="column is-10 has-text-left">
        <h1 class="has-text-dark is-size-2">Novo Fundo</h1>
        {{localId}}
        <div class="container columns" style="margin-top: 3em;">
          <div class="column">
            <form>
              <b-field label="Tempo de contrado (em meses)">
                <b-select placeholder="Selecione um contrato" v-model="time">
                  <option>12 meses</option>
                  <option>6 meses</option>
                  <option>4 meses</option>
                </b-select>
              </b-field>
              <b-field label="Forma de depósito">
                <b-select placeholder="Selecione o depósito" v-model="currency_type">
                  <option>Em cripto</option>
                  <!-- <option> Em real</option>
                  <option> Em dólar</option>-->
                </b-select>
              </b-field>
              <b-field label="Moeda do fundo">
                <b-select placeholder="Selecione a moeda" v-model="currency_fund">
                  <option>BTC</option>
                  <option>USDT</option>
                  <option>TUSD</option>
                  <!-- <option> Em real</option>
                  <option> Em dólar</option>-->
                </b-select>
              </b-field>
              <b-field label="Valor solicitado">
                <b-input v-model="value" placeholder="30" width="50"></b-input>
              </b-field>
              <button class="button is-primary" @click.prevent="newFund">Novo Fundo</button>
              <button @click.prevent="getTest">Get Test</button>
              {{value}}
              {{currency_fund}}
              {{currency_type}}
              {{time}}
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dashMenu from '../components/dashboard/menu'
export default {
  data: () => ({
    value: '',
    currency_fund: '',
    currency_type: '',
    time: ''
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

      // eslint-disable-next-line no-console
      // console.log(data)
      this.axios.post('/investor/funds/', {
        localId: this.localId,
        time: this.time,
        currency_type: this.currency_type,
        currency_fund: this.currency_fund,
        value: this.value
      })
        .then(() => {
          // eslint-disable-next-line no-console
          //console.log('inserido com sucesso')
        })
        .catch(() => {
          // eslint-disable-next-line no-console
          //console.log(err)
        })
        .finally(() => {

        })
    },
  }

}
</script>

<style scoped>
</style>