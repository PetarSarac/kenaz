<template>
  <div id="app">
    <!--<div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
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
