<template>
  <!-- TODO: GET USER FUNDS -->
  <div class="funds">
    <div class="columns">
      <div class="column is-3-desktop is-2-fullhd">
        <dashMenu></dashMenu>
      </div>
      <div class="column is-10 has-text-left">
        <h1 class="has-text-dark is-size-2">Fundos</h1>
        <p class="is-danger">{{localId}}</p>
        <div class="container" style="margin-top: 3em;">
          <div class="columns is-centered">
            <div class="column">
              <ul>
                <li v-for="(fund, id) in funds" :key="id">{{fund}} {{id}}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--     <b-loading is-full-page :active.sync="isLoading" :can-cancel="false">
      <b-icon class="has-text-light" pack="fas" icon="spinner" size="is-large" custom-class="fa-spin"></b-icon>
    </b-loading>-->
  </div>
</template>

<script>
import dashMenu from '../components/dashboard/menu'
export default {
  data: () => ({
    funds: [],
    id: null
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
    this.axios.get(`/investor/funds?user=${this.localId}`)
      .then((res) => {
        console.log(res.data)
        this.funds = res.data
      })
      .catch((err) => {
        console.log(err)
      })
  }

}
</script>

<style scoped>
</style>