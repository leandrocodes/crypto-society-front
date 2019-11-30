<template>
  <b-navbar transparent>
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img src="../../assets/img/logo.png" alt="Lightweight UI components for Vue.js based on Bulma" />
      </b-navbar-item>
    </template>
    <template slot="end" style="margin-right: 10%;">
      <b-navbar-item href="#" class="has-text-weight-light">Início</b-navbar-item>
      <b-navbar-item href="#" class="has-text-weight-light">Detalhes</b-navbar-item>
    </template>

    <template slot="end">
      <b-navbar-item tag="div">
        <div class="buttons">
          <a class="button is-link">
            <router-link to="/register" class="has-text-secondary">
              <i class="fas fa-user-plus"></i> Registro
            </router-link>
          </a>
          <a class="button is-secondary">
            <router-link to="/login">
              <i class="fas fa-sign-in-alt"></i> Login
            </router-link>
          </a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {

}
</script>

<style>
</style>