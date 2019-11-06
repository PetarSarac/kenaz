<template>

<b-container class="bg-white p-4 news" :style="'border-left:10px solid ' + color">
  <div v-if="type == 1"> <!-- TYPE 1 ----------------->
    <b-row class="align-items-center">
      <b-col cols="6">
        <h2>{{newsCategory}}</h2>
        <p v-if="isBusy">Loading</p>
        <form @submit.prevent="fetchSearchNews">
          <input type="text" placeholder="Search..." v-model="searchWord">
        </form>
      </b-col>
      <b-col cols="6" class="text-right">
        <router-link :to="'/'+ newsCategory" class="text-light-blue">See all</router-link>
      </b-col>
    </b-row>

    <b-row>
      <b-col md="6" lg="4" cols="12" v-for="(article,index) in articles" :key="index" @click="goToArticle(article)">
        <div class="news-single mt-4">
          <img v-if="article.urlToImage" :src="article.urlToImage" alt="No image">
          <div class="d-flex mt-1 text-gray2">
            <p>{{article.publishedAt}}</p>
          </div>
          
          <p class="font-weight-bold mt-2">{{article.title}}</p>
        </div>
      </b-col>
    </b-row>
  </div>

  <!-- TYPE 2 ------------------------>

  <div v-if="type == 2">
    <b-row class="align-items-center mb-4">
      <b-col cols="6">
        <h2 class="font-weight-bold">{{newsCategory}}</h2>
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="12" class="mb-4 border-bottom border-gray2" v-for="(article,index) in articles" :key="index">
        <h5 class="font-weight-bold mb-4">{{article.title}}</h5>
        <div class="d-flex text-gray2 justify-content-between mb-4">
          <p>{{article.publishedAt}}</p>
          <p v-if="article.author">Author: {{article.author}}</p>
        </div>
        <b-row class="news-single mb-4">
          <b-col cols="4">
            <img v-if="article.urlToImage" :src="article.urlToImage" alt="No image">
          </b-col>
          <b-col cols="8" class="text-gray">
            <p>{{article.description}}</p>
            <b-button @click="goToArticle(article)" class="mt-4 bg-primary rounded-0 px-4">Read article</b-button>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
  

</b-container>
</template>
<script>
export default {
  name:"News",
  props: ['newsCategory','color','type','searchValue','numberOfNews'],
  data(){
    return {
      apiKey:'8ee9460ff3fb40a99f15427639f74a7a',
      apiUrl: '',
      isBusy: false,
      showloader: false,
      currentPage: 1,
      totalResults: 0,
      maxPerPage: this.numberOfNews,
      searchWord: '',
      articles: [],
      country: 'us'
    }
  },
  methods: {
    goToArticle(article) {
      this.$router.push({name: 'single-news', params: {article}})
    },
    resetData(){
      this.currentPage = 1
      this.articles = []
    },
    fetchSearchNews(){
      this.apiUrl = "https://newsapi.org/v2/everything?q=" 
                      + this.searchWord
                      +"&pageSize=" + this.maxPerPage
                      + "&apiKey=" + this.apiKey;
      this.isBusy = true

      this.resetData()
      this.fetchData()
    },
    fetchTopSearchNews(){
      this.apiUrl = "https://newsapi.org/v2/top-headlines?country=" 
                      + this.country + "&q=" + this.searchValue + "&category=" + this.newsCategory
                      +"&pageSize=" + this.maxPerPage
                      + "&apiKey=" + this.apiKey;
      this.isBusy = true

      this.resetData()
      this.fetchData()
    },
    fetchTopNews(){
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
      if(this.searchValue != null){
        this.fetchTopSearchNews()
      }
    }
  }
}
</script>
<style lang="scss">
.news {
  border-left: 10px solid var(--light-blue);
  
  &-single {
    cursor: pointer;
    & img {
      width: 100%;
    }
  }
}
</style>