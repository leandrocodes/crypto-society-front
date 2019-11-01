<template>
  <div class="container">
    <b-navbar class="is-primary">
      <template slot="brand">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img src="../../assets/img/logo.png" alt="Lightweight UI components for Vue.js based on Bulma" />
        </b-navbar-item>
      </template>
      <template slot="end">
        <b-navbar-item href="#" class="is-family-primary">Home</b-navbar-item>
        <b-navbar-item href="#" class="is-family-primary">Detalhes</b-navbar-item>
      </template>

      <template slot="end">
        <b-navbar-item tag="div">
          <div class="buttons">
            <a class="button is-link is-family-primary">
              <strong>Registro</strong>
            </a>
            <a class="button is-secondary is-family-primary"> <strong>Login</strong></a>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>
  </div>
</template>

<script>
export default {

}
</script>

<style>
</style>