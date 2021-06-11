<template>
  <CSidebar
    :minimize="minimize"
    unfoldable
    :show="show"
    @update:show="(value) => $store.commit('set', ['sidebarShow', value])"
  >
    <CSidebarBrand class="d-md-down-none" to="/" style=" font-family:agencyfb">
      <h3>Media Edukasi</h3>
    </CSidebarBrand>
    <CRenderFunction flat :contentToRender="sidebarAdmin" style=" font-family:agencyfb" />
    <CSidebarMinimizer
      class="c-d-md-down-none"
      @click.native="$store.commit('toggle', 'sidebarMinimize')"
    />
  </CSidebar>
</template>

<script>
import SidebarAdminItems from './SidebarAdminItems'
export default {
  name: 'TheSidebarAdmin',
  extends: SidebarAdminItems,
  computed: {
    show () {
      return this.$store.state.sidebarShow
    },
    minimize () {
      return this.$store.state.sidebarMinimize
    }
  }
}
</script>

