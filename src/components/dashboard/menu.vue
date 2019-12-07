<template>
  <div class="menu">
    <div class="top-menu">
      <b-dropdown aria-role="list">
        <button class="button" slot="trigger">
          <span>
            <p class="is-size-6 has-text-centered">
              <i class="fas fa-user" style="margin-right: 1em;"></i>
              Nome Sobrenome
            </p>
          </span>
          <b-icon icon="menu-down"></b-icon>
        </button>

        <b-dropdown-item aria-role="listitem">Editar perfil</b-dropdown-item>
        <b-dropdown-item aria-role="listitem">Sair</b-dropdown-item>
      </b-dropdown>
    </div>
  </div>
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