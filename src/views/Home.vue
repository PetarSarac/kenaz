<template>
  <div>
    <app-header></app-header>
    <app-main></app-main>
    <app-footer></app-footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Main from '@/components/Main.vue'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default {
  name: 'home',
  components: {
    "app-main": Main,
    "app-header": Header,
    "app-footer": Footer
  }
}
</script>
