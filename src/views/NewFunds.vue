<template>
  <div class="dashboard">
    <div class="columns">
      <div class="column is-2">
        <dashMenu></dashMenu>
      </div>
      <div class="column is-10 has-text-left">
        <h1 class="has-text-dark is-size-2">Novo Fundo</h1>
      </div>
    </div>
  </div>
</template>

<script>
import dashMenu from '../components/dashboard/menu'
export default {
  components: {
    dashMenu
  }

}
</script>

<style scoped>
</style>