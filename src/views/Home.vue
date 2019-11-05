<template>
  <div class="home">
    <app-main></app-main>
  </div>
</template>

<script>
// @ is an alias to /src
import Main from '@/components/Main.vue'

export default {
  name: 'home',
  components: {
    "app-main": Main
  }
}
</script>
