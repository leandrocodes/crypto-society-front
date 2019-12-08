<template>
  <!-- TODO: GET USER FUNDS -->
  <div class="funds">
    <div class="columns">
      <div class="column is-3-desktop is-2-fullhd">
        <dashMenu></dashMenu>
      </div>
      <div class="column is-10 has-text-left">
        <h1 class="has-text-dark is-size-2">Fundos</h1>
        <div class="container" style="margin-top: 3em;">
          <div class="columns">
            <div class="column is-10">
              <table class="table" style="margin: 0 auto;">
                <thead>
                  <tr>
                    <th>Fundo</th>
                    <th>Forma de depósito</th>
                    <th>Quantidade</th>
                    <th>Contrato</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(fund, id) in funds" :key="id">
                    <td>{{fund.currency_fund}}</td>
                    <td>{{fund.currency_type}}</td>
                    <td>{{fund.value}}</td>
                    <td>{{fund.time}}</td>
                  </tr>
                </tbody>
              </table>
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
    funds: null,
    id: null,
    isLoading: false,
    data: [
      { 'id': 1, 'first_name': 'Jesse', 'last_name': 'Simmons', 'date': '2016/10/15 13:43:27', 'gender': 'Male' },
      { 'id': 2, 'first_name': 'John', 'last_name': 'Jacobs', 'date': '2016/12/15 06:00:53', 'gender': 'Male' },
      { 'id': 3, 'first_name': 'Tina', 'last_name': 'Gilbert', 'date': '2016/04/26 06:26:28', 'gender': 'Female' },
      { 'id': 4, 'first_name': 'Clarence', 'last_name': 'Flores', 'date': '2016/04/10 10:28:46', 'gender': 'Male' },
      { 'id': 5, 'first_name': 'Anne', 'last_name': 'Lee', 'date': '2016/12/06 14:38:38', 'gender': 'Female' }
    ]
  }),
  components: {
    dashMenu
  },
  computed: {
    localId() {
      return this.$store.state.user.localId
    }
  },
  created() {
    /* eslint-disable no-console */
    this.isLoading = true
    this.axios.get(`/investor/funds?user=${this.localId}`)
      .then((res) => {
        console.log(res.data)
        this.funds = res.data
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        this.isLoading = false
      })
  }

}
</script>

<style scoped>
</style>