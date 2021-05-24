<template>
  <CSidebar
    :minimize="minimize"
    unfoldable
    :show="show"
    @update:show="(value) => $store.commit('set', ['sidebarShow', value])"
  >
    <CSidebarBrand class="d-md-down-none" to="/">
      <h3>Backoffice</h3>
    </CSidebarBrand>
    <CRenderFunction flat :contentToRender="sidebarCS"/>
    <!-- <CSidebarMinimizer
      class="c-d-md-down-none"
      @click.native="$store.commit('toggle', 'sidebarMinimize')"
    /> -->
  </CSidebar>
</template>

<script>
import SidebarCSItems from './SidebarCSItems'
export default {
  name: 'TheSidebarCS',
  extends: SidebarCSItems,
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

