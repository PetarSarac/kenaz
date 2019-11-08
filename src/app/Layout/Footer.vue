<template>
<footer>
    <b-container>
      <b-row class="mt30px align-items-center align-items-lg-start">
        <b-col lg="4" cols="12" class="mt-lg-0 mt-4">
          <b-container>
            <b-row>
                <b-col cols="12" class="d-flex">
                    <img src="@/assets/LeftArrow.png" alt="Left Arrow" class="mr-3">
                    <h4 class="text-light-blue mb-0 align-self-center">
                        Kenaz
                    </h4>    
                </b-col>
                <b-col cols="12">
                    <p class="mt-4 mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum omnis, minim</p>    
                </b-col>
            </b-row>
            <b-row class="social-items-box"> 
                <div class="social-item social-item--rss text-center">
                <img src="@/assets/Rss.png" alt="Rss">
                </div>
                <div class="social-item social-item--fb">
                    <img src="@/assets/Facebook.png" alt="Facebook">
                </div>
                <div class="social-item social-item--twitter">
                    <img src="@/assets/twitter.png" alt="Twitter">
                </div>
                <div class="social-item social-item--dribble">
                    <img src="@/assets/dribbble.png" alt="Dribble">
                </div>
                <div class="social-item social-item--linkedin">
                    <img src="@/assets/in.png" alt="LinkedIn">
                </div>
                <div class="social-item social-item--youtube">
                    <img src="@/assets/YouTube 3.png" alt="YouTube">
                </div>
                <div class="social-item social-item--skype">
                    <img src="@/assets/Skype.png" alt="Skype">
                </div>        
            </b-row>
          </b-container>
      
          
        </b-col>
        <b-col lg="4" cols="12" class="mt-lg-0 mt-4">
          <b-container>
            <b-row>
                <b-col cols="12">
                    <h4 class="mb-4">Newsletter</h4>    
                </b-col>
                <b-col cols="12">
                    <p class="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, ex?</p>    
                </b-col>
              
            </b-row>
            
            <b-row>
                <b-col cols="12">
                    <div class="d-flex">
                        <input type="text" class="bg-gray border-0 rounded-0 p-2 text-white">
                        <b-button class="bg-primary border-0 p-3 rounded-0">{{$t('Subscribe')}}</b-button> 
                    </div>
                    
                </b-col>
            </b-row>
          </b-container>
  
        </b-col>
        <b-col lg="4" cols="12">
          <b-container>
            <b-row>
                <b-col cols="12">
                    <h4 class="mb-4 ml-1 mt-lg-0 mt-4">Tags Widget</h4>
                </b-col> 
            </b-row>
            <b-row>
                <b-col cols="12">
                    <div class="d-flex flex-wrap">
                        <span class="tag">omnius</span>
                        <span class="tag">asd</span>
                        <span class="tag">omsadasdasnius</span>
                        <span class="tag">omdasius</span>
                        <span class="tag">oconsectuor</span>
                        <span class="tag">omnasius</span>
                        <span class="tag">omnasdus</span>
                        <span class="tag">omnaasius</span>
                        <span class="tag">omnius</span>
                        <span class="tag">asd</span>
                        <span class="tag">omsadasdasnius</span>  
                    </div>  
                </b-col>
            </b-row>
          </b-container>  
        </b-col>
      </b-row>
      
      
    </b-container>

    <b-container>
      <b-row class="mt-4 footer-news">
        <b-col md="4" cols="12" class="mt-sm-4">
          <h4>Featured</h4>
          <app-news newsCategory="Entertainment" selectedCountry="us" type="6" numberOfNews="3" color="white"></app-news>
        </b-col>
        <b-col md="4" cols="12" class="mt-sm-4">
          <h4>Random</h4>
          <app-news newsCategory="News" selectedCountry="us" type="6" numberOfNews="3" color="white"></app-news>
        </b-col>
        <b-col md="4" cols="12" class="mt-sm-4">
          <h4>Recently</h4>
          <app-news type="7" numberOfNews="3"></app-news>
        </b-col>
      </b-row>
    </b-container>

    <hr class="bg-gray2">

    <b-container>
      <b-row class="pb-4">
        <b-col md="6" cols="12">
          <p class="mb-0 text-gray3 text-md-left text-center">&copy; 2013 - Kenaz Template - {{$t('FooterCopyRight')}}</p>
        </b-col>
        <b-col md="6" cols="12">
          <p class="mb-0 text-gray3 text-md-right text-center">Typografy - Templates - Contact Form - 404 page</p>
        </b-col>
      </b-row>
    </b-container>
</footer>
</template>

<script>
import News from '../Objects/News'

export default {
  components: {
    "app-news": News
  }
}
</script>
<style lang="scss">

</style>