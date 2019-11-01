<template>
  <div class="container">
    <b-navbar class="is-primary">
      <template slot="brand">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img src="../../assets/img/logo.png" alt="Lightweight UI components for Vue.js based on Bulma" />
        </b-navbar-item>
      </template>
      <template slot="end">
        <b-navbar-item href="#">Home</b-navbar-item>
        <b-navbar-item href="#">Detalhes</b-navbar-item>
      </template>

      <template slot="end">
        <b-navbar-item tag="div">
          <div class="buttons">
            <a class="button is-primary">
              <strong>Sign up</strong>
            </a>
            <a class="button is-secondary">Log in</a>
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