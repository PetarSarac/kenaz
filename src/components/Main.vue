<template>
<div>  
  <b-container>
    <b-row>
      <b-col>
        <div class="banner mt-4">Banner 940x120</div>
      </b-col>
    </b-row>
    <app-carousel></app-carousel>

    
      <b-row>
        <b-col lg="8" cols="12" class="mt30px">
          <app-news class="mb30px"></app-news> <!-- Change later margin -->
          <app-news></app-news>

          <div class="banner mt30px mb30px">Banner 620x120</div>
          <app-news></app-news>
          <div class="banner mt30px">Banner 620x120</div>
          <app-news class="mt30px"></app-news>
        </b-col>
        
        <b-col lg="4" cols="12" class="mt30px">
          <app-sidebar></app-sidebar>
          <b-row class="mt30px">
            <b-col cols="12">
              <div class="banner banner--300x250 text-center">Banner <br> 300x250</div>
            </b-col>
          </b-row>   
        </b-col>
      </b-row>

    <b-row class="mt30px mb30px">
      <b-col cols="12">
        <div class="banner">Banner 940x120</div>    
      </b-col>
      <b-col cols="12">
        <app-carousel></app-carousel>
      </b-col>
    </b-row>

  </b-container>

  <app-footer></app-footer>
  
</div>
</template>

<script>
import Carousel from './Carousel.vue'
import News from './News.vue'
import Sidebar from './Sidebar.vue'
import Footer from './Footer.vue'

export default {
  name: 'Main',
  components: {
    "app-carousel": Carousel,
    "app-news": News,
    "app-sidebar": Sidebar,
    "app-footer": Footer
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

</style>
