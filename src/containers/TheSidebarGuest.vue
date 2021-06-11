<template>
  <CSidebar
    :minimize="minimize"
    unfoldable
    :show="show"
    @update:show="(value) => $store.commit('set', ['sidebarShow', value])"
  >
    <CSidebarBrand class="d-md-down-none" to="/" style="font-family:agencyfb">
      <h3>Media Edukasi</h3>
    </CSidebarBrand>
    <CRenderFunction flat :contentToRender="sidebarGuest" style="font-family:agencyfb; font-size:18px"/>
    <!-- <CSidebarMinimizer
      class="c-d-md-down-none"
      @click.native="$store.commit('toggle', 'sidebarMinimize')"
    /> -->
  </CSidebar>
</template>

<script>
import SidebarGuestItems from './SidebarGuestItems'
export default {
  name: 'TheSidebarGuest',
  extends: SidebarGuestItems,
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

