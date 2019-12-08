<template>
  <b-menu>
    <img src="../../assets/img/house.png" alt="House Logo" />

    <br />

    <b-menu-list label="Visualizações">
      <router-link to="/dashboard">
        <i class="fas fa-chart-pie" style="margin-right: .5em;"></i> Painel
      </router-link>
      <router-link to="/dashboard">
        <i class="fab fa-bitcoin" style="margin-right: .5em;"></i> Fundos
      </router-link>
      <router-link to="/dashboard">
        <i class="fas fa-file-alt" style="margin-right: .5em;"></i> Planos
      </router-link>
      <router-link to="/dashboard">
        <i class="fas fa-wallet" style="margin-right: .5em;"></i> Saques
      </router-link>
    </b-menu-list>

    <br />

    <b-menu-list label="Solicitações">
      <router-link to="/newfund">
        <i class="fab fa-bitcoin" style="margin-right: .5em;"></i> Novo Fundo
      </router-link>
      <router-link to="/dashboard">
        <i class="fas fa-wallet" style="margin-right: .5em;"></i> Efetuar Saque
      </router-link>
    </b-menu-list>

    <br />

    <div class="actions" style="position: absolute; bottom: 1em;">
      <b-menu-list label="Ações">
        <router-link to="/dashboard">
          <i class="fas fa-user-edit" style="margin-right: .5em;"></i> Editar Perfil
        </router-link>
        <router-link to="/dashboard" class="has-text-warning">
          <i class="fas fa-sign-out-alt" style="margin-right: .5em;"></i> Sair
        </router-link>
      </b-menu-list>
    </div>
  </b-menu>
</template>

<script>
export default {
  data() {
    return {
      isActive: true
    }
  }
}
</script>