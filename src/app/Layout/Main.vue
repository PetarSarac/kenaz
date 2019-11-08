<template>
<div>  
  <b-container>
      <b-row>
        <b-col lg="8" cols="12" class="mt30px">
          <app-news class="mb30px" newsCategory="News" selectedCountry="us" type="1" numberOfNews="3" color="#299ec3"></app-news> 
          <app-news newsCategory="Sports" selectedCountry="us" type="1" numberOfNews="3" color="#84c14f"></app-news>

          <div class="banner mt30px mb30px">Banner 620x120</div>
          <app-news newsCategory="Business" selectedCountry="us" type="1" numberOfNews="3" color="#ee6151"></app-news>
          <div class="banner mt30px">Banner 620x120</div>
          
          <app-news class="mt30px" newsCategory="News" newsFrom="World" selectedCountry="us" type="5" numberOfNews="5" color="#fcc44d"></app-news>

          <b-row>
            <b-col md="6" cols="12">
              <app-news class="mt30px" newsCategory="News" newsFrom="Germany" selectedCountry="de" type="5" numberOfNews="5" color="#a99765"></app-news>
            </b-col>
            <b-col md="6" cols="12">
              <app-news class="mt30px" newsCategory="News" newsFrom="Local news" :selectedCountry="$i18n.locale" type="5" numberOfNews="5" color="#a99765"></app-news>
            </b-col>
          </b-row>
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
  
</div>
</template>

<script>
import Carousel from '../Objects/Carousel'
import News from '../Objects/News'
import Sidebar from '../UI/Sidebar'

export default {
  name: 'Main',
  components: {
    "app-carousel": Carousel,
    "app-news": News,
    "app-sidebar": Sidebar
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

</style>
