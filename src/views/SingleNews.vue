<template>
    <div>
        <b-container>
             <b-row>
                <b-col>
                    <div class="banner mt-4">Banner 940x120</div>
                </b-col>
            </b-row>
        </b-container>
        <b-container>
            <b-row class="mt-4">
                <b-col cols="12">
                    <div class="news-big-image">
                        <img :src="article.article.urlToImage" class="w-100" alt="No Image">
                        <div class="news-big-image__title">
                            <small>{{article.article.publishedAt}}</small>
                            <h5 class="font-weight-bold">{{article.article.title}}</h5>     
                        </div>
                           
                    </div>
                    
                </b-col>
            </b-row>
        </b-container>
        <b-container>
            <b-row>
                <b-col lg="8" cols="12" class="mt30px bg-white">
                    
                    <p class="p-4" v-html="article.article.content"></p> 
                    <img :src="article.article.urlToImage" class="w-100 py-4" alt="No Image">
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
            </b-row>
        </b-container>
        
        <app-footer></app-footer>
    </div>  
</template>

<script>
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
//import News from '../components/News'

export default {
    data(){
        return {
            article : this.$route.params
        }
    },
    components: {
        "app-footer": Footer,
        "app-sidebar": Sidebar,
        //"app-news": News
    }
}
</script>

<style lang="scss">
.news-big-image {
    position: relative;

    &__title {
        position: absolute !important;
        bottom: 0px;
        padding: 20px;
        width: 100%;
        background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgb(255, 255, 255));
    }
}
</style>