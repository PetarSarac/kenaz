<template>
<div>
<b-container v-if="type == 1 || type == 2 || type == 5" class="bg-white p-4 news" :style="'border-left:10px solid ' + color">
  <div v-if="type == 1"> <!---------- Type 1 (Top Headlines component) ------------->
    <b-row class="align-items-center">
      <b-col cols="6">
        <h2>{{$t(newsCategory)}}</h2>
      </b-col>
      <b-col cols="6" class="text-right">
        <router-link :to="`/${$i18n.locale}/Categories/${newsCategory}`" class="text-light-blue">{{$t('see-all')}}</router-link>
      </b-col>
    </b-row>

    <b-row>
      <b-col md="6" lg="4" cols="12" v-for="(article,index) in articles" :key="index" 
      class="news-single--big" @click="goToArticle(article)">
        <article class="news-single mt-4">
          <img :src="article.urlToImage == null ? require('@/assets/no-image.jpg') : article.urlToImage"  alt="No image">
          <div class="d-flex mt-1 text-gray2">
            <p>{{article.publishedAt}}</p>
          </div>
          
          <p class="font-weight-bold mt-2">{{article.title}}</p>
        </article>
      </b-col>
    </b-row>
  </div>


  <div v-if="type == 2"> <!---------- Type 2 (Category news) ------------->
    <b-row class="align-items-center mb-4">
      <b-col cols="6">
        <h2 class="font-weight-bold">{{$t(newsCategory)}}</h2>
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="12" class="mb-4 border-bottom border-gray2 news-single--big" v-for="(article,index) in articles" :key="index"
            @click="goToArticle(article)"
      >
        <h5 class="font-weight-bold mb-4">{{article.title}}</h5>
        <div class="d-flex text-gray2 justify-content-between mb-4">
          <p>{{article.publishedAt}}</p>
          <p v-if="article.author">{{$t('Author')}}: {{article.author}}</p>
        </div>
        <b-row class="news-single mb-4">
          <b-col sm="4" cols="12">
            <img :src="article.urlToImage == null ? require('@/assets/no-image.jpg') : article.urlToImage" alt="No image">
          </b-col>
          <b-col sm="8" cols="12" class="text-gray mt-2">
            <p>{{article.description}}</p>
            <b-button @click="goToArticle(article)" class="mt-4 bg-primary rounded-0 px-4">{{$t('ReadArticle')}}</b-button>
          </b-col>
        </b-row>

        
      </b-col>
      <p v-if="articles.length == 0">{{$t('NoResults')}}</p>
    </b-row>
    
  </div>

<div v-if="type == 5"> <!---------- Type 5 (Carousel news small) ------------->
  <b-row class="align-items-center mb-4">
    <b-col cols="8">
      <h4>{{$t(newsFrom)}}</h4>
    </b-col>
    <b-col cols="4" class="text-right">
      <span @click="leftCarousel" class="custom-carousel-control mr-3"><img src="@/assets/left.png" alt=""></span> 
      <span @click="rightCarousel" class="custom-carousel-control"><img src="@/assets/right.png" alt=""></span>
    </b-col>
  </b-row>


 
  <b-carousel
          id="carousel-2"
          :interval="null"
          background="#fff"
          img-width="600"
          img-height="400"
          style="text-shadow: 1px 1px 2px #333;"
          class="custom-carousel"
          ref="carouselNewsMini" 
        >
         

          <!-- Slides with custom text -->
          <b-carousel-slide v-for="(article,index) in articles.slice(0,5)" :key="index" 
                            :img-src="article.urlToImage == null ? require('@/assets/no-image.jpg') : article.urlToImage"
                            @click.native="goToArticle(article)"
          >
            <small class="text-gray2 text-left">{{article.publishedAt}}</small>
            <h6 class="text-gray text-left font-weight-bold">{{article.title}}</h6>
          </b-carousel-slide>
          
  </b-carousel>

</div>

</b-container>

<div v-if="type == 3"><!---------- Type 3 (Sidebar news) ------------->
  <b-row  class="sidebar-item bg-primary py-4 px-2 border-bottom border-primary-dark"
          v-for="(article,index) in articles" :key="index"
          @click="goToArticle(article)">
    <b-col cols="8">
        <small class="mb-0 text-gray3">{{article.publishedAt}}</small>
        <p class="mb-0 text-white font-weight-bold">{{article.title}}</p>
    </b-col>
    <b-col cols="4" class="align-self-center">
        <img class="border border-white sidebar-img" :src="article.urlToImage" alt="News">
    </b-col>
  </b-row>
</div>

<!---------- Type 4 (News for carousel) ------------->
<b-carousel 
          v-if="type == 4"
          id="carousel-1"
          :interval="4000"
          controls
          indicators
          background="#ababab"
          style="text-shadow: 1px 1px 2px #333;" 
        >
         

          <!-- Slides with custom text -->
          <b-carousel-slide v-for="(article,index) in articles.slice(0,5)" :key="index"
          :img-src="article.urlToImage == null ? require('@/assets/no-image.jpg') : article.urlToImage"
           @click.native="goToArticle(article)">
            <h4 class="p-4 font-weight-bold d-sm-inline d-none">{{article.title}}</h4>
            <p class="p-4 font-weight-bold d-sm-none">{{article.title}}</p>
          </b-carousel-slide>
          
</b-carousel>


<div v-if="type == 6"><!---------- Type 6 (News for footer) ------------->
  <b-row class="align-items-center border-bottom border-gray2 py-2 footer-news" 
  v-for="(article,index) in articles" :key="index"
  @click="goToArticle(article)">
    <b-col cols="8">
      <div class="d-flex flex-column">
        <p>{{article.publishedAt}}</p>
        <p class="text-white font-weight-bold">{{article.title}}</p>
      </div>
    </b-col>
    <b-col cols="4">
      <img :src="article.urlToImage" alt="News" class="w-100 border border-white">
    </b-col>
  </b-row>
</div>

<div v-if="type == 7"><!---------- Type 7 (News for footer recently) ------------->
  <b-row class="align-items-center border-bottom border-gray2 py-2 footer-news" 
  v-for="(article,index) in getRecentlyNews.slice(0,3)" :key="index"
  @click="goToArticle(article)">
    <b-col cols="8">
      <div class="d-flex flex-column">
        <p>{{article.publishedAt}}</p>
        <p class="text-white font-weight-bold">{{article.title}}</p>
      </div>
    </b-col>
    <b-col cols="4">
      <img :src="article.urlToImage" alt="News" class="w-100 border border-white">
    </b-col>
  </b-row>
</div>


</div>
</template>
<script>
  export default {
    name:"News",
    props: ['newsCategory','color','type','searchValue','numberOfNews','selectedCountry','newsFrom'],
    data(){
      return {
        apiKey:'468227549f08499b9891f15d75aca8af',
        apiUrl: '',
        isBusy: false,
        showloader: false,
        currentPage: 1,
        totalResults: 0,
        maxPerPage: this.numberOfNews,
        searchWord: '',
        articles: [],
        country: this.selectedCountry,
        srcImage: ''
      }
    },
    computed:{
      getRecentlyNews(){
        if(localStorage.articles){
          let recentlyNews = []
          let data = JSON.parse(localStorage.getItem('articles'))
          data.forEach((articles) => {
            recentlyNews.push(articles.article)
          })
          return recentlyNews
        }else {
          return []
        } 
      }
    },
    methods: {
      leftCarousel(){
        this.$refs.carouselNewsMini.prev()
      },
      rightCarousel(){
        this.$refs.carouselNewsMini.next()
      },
      goToArticle(article) {
        this.$router.push({name: 'single-news', params: {article}})  
      },
      resetData(){
        this.currentPage = 1
        this.articles = []
      },
      fetchTopSearchNews(){
        if(this.newsCategory == 'News') {
          if(this.searchValue == ''){
            this.apiUrl = "https://newsapi.org/v2/everything?q=news"
                        +"&language=" + `${this.$i18n.locale}` 
                        +"&pageSize=" + this.maxPerPage
                        + "&apiKey=" + this.apiKey;
            this.isBusy = true

            this.resetData()
            this.fetchData()
          }else {
            this.apiUrl = "https://newsapi.org/v2/everything?q=" 
                        + this.searchValue
                        +"&language=" + `${this.$i18n.locale}`
                        +"&pageSize=" + this.maxPerPage
                        + "&apiKey=" + this.apiKey;
            this.isBusy = true

            this.resetData()
            this.fetchData()
          }
          
        }else {
          this.apiUrl = "https://newsapi.org/v2/everything?" 
                        + "q=" + this.searchValue + "&language=" + `${this.$i18n.locale}`
                        +"&pageSize=" + this.maxPerPage
                        + "&apiKey=" + this.apiKey;
          this.isBusy = true

          this.resetData()
          this.fetchData()
        }
        
      },
      fetchTopNews(){
        switch(this.country){
          case 'hr':
            this.country = 'rs'
          break
          case 'en':
            this.country = 'us'
          break
          
        }
        if(this.newsCategory == 'News'){ //It removes category parameter from api(News doesn't exist as category) and get top headlines
          this.apiUrl = "https://newsapi.org/v2/top-headlines?country=" 
                        + this.country
                        +"&pageSize=" + this.maxPerPage
                        + "&apiKey=" + this.apiKey;
          this.isBusy = true
          this.searchWord = ''

          this.resetData()
          this.fetchData()
        }else {
          this.apiUrl = "https://newsapi.org/v2/top-headlines?country=" 
                        + this.country + "&category=" + this.newsCategory
                        +"&pageSize=" + this.maxPerPage
                        + "&apiKey=" + this.apiKey;
          this.isBusy = true
          this.searchWord = ''

          this.resetData()
          this.fetchData()
        }
        
      },
      fetchData(){
        let req = new Request(this.apiUrl + "&page=" + this.currentPage)
        fetch(req)
          .then((resp) => resp.json())
          .then((data) => {
            this.totalResults = data.totalResults
            data.articles.forEach(element => {
              this.articles.push(element)
            });
            this.isBusy = false
            this.showloader = false
          })
          .catch((error) => {
            console.log(error)
          })
        
      }
    },
    created() {
      if(this.searchValue != null){
        this.fetchTopSearchNews()
      }else {
        this.fetchTopNews()
      }  
    },
    watch: {
      searchValue(){
        this.fetchTopSearchNews()
      },
      newsCategory(){
        if(this.searchValue != null){
          this.fetchTopSearchNews()
        }else {
          this.fetchTopNews()
        }
      }
    }
}
</script>
<style lang="scss">

</style>