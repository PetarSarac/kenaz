<template>
  <div id="app">
    <app-nav></app-nav>
    <router-view/>
  </div>
</template>

<script>
import Navigation from './components/Navigation'

export default {
  components: {
    "app-nav":Navigation
  }
}
</script>
<style lang="scss">
@import './scss/custom.scss';
</style>
