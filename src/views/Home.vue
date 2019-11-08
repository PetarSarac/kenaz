<template>
  <div>
    <app-header></app-header>
    <app-main></app-main>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Main from '@/app/Layout/Main.vue'
import Header from '../app/Layout/Header'
import Footer from '../app/Layout/Footer'

export default {
  name: 'home',
  components: {
    "app-main": Main,
    "app-header": Header,
    "app-footer": Footer
  }
}
</script>
