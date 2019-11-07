<template>
    <b-row class="mt-4">
      <b-col>
            
          <app-news newsCategory="Sports" selectedCountry="us" type="4" numberOfNews="5" color="white"></app-news>
          
        
      </b-col>
    </b-row>
</template>

<script>
import News from '../Objects/News'
export default {
  components: {
    "app-news": News
  },
  data() {
      return {
        slide: 0,
        sliding: null
      }
  },
  name: "Carousel"
}
</script>