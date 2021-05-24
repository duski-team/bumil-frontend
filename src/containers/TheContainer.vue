<template>
  <div :class="{ 'c-dark-theme': $store.state.darkMode }">
      <div class="c-body">
        <main>
          <CContainer fluid>
            <transition name="fade" mode="out-in">
              <router-view :key="$route.path"></router-view>
            </transition>
          </CContainer>
        </main>
      </div>
  </div>
</template>

<script>


export default {
  name: 'TheContainer',
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
