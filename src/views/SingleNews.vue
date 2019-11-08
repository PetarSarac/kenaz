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
                            <h2 class="font-weight-bold text-gray d-sm-block d-none">{{article.article.title}}</h2>
                            <h6 class="font-weight-bold text-gray d-sm-none">{{article.article.title}}</h6>       
                        </div>
                           
                    </div>
                    
                </b-col>
            </b-row>
        </b-container>
        <b-container>
            <b-row>
                <b-col lg="8" cols="12" class="mt30px">
                    <p class="p-4 bg-white" v-html="article.article.content"></p> 
                    <img :src="article.article.urlToImage" class="w-100 py-4" alt="No Image">
                    <b-row class=" mb30px">
                        <b-col cols="12">
                            <div class="banner">Banner 620x120</div>    
                        </b-col>
                    </b-row>
                    <b-container class="mt30px mb30px bg-white p-3">
                        <b-row class="mb-4">
                            
                            <b-col cols="12">                            	
                                <h3 class="text-gray2">{{$t('AboutTheAuthor')}}</h3>
                            </b-col>
                            
                        </b-row>
                        <b-row>
                            
                            <b-col cols="4">
                                <div class="author-image">
                                    <img src="@/assets/author.jpg" alt="Author" class="w-100">
                                </div>
                            </b-col>
                            <b-col cols="8">
                                <p class="text-gray2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores deleniti pariatur eum iure dignissimos iste possimus quaerat laborum voluptate adipisci deserunt natus error ab, repellendus modi quidem in architecto incidunt laudantium a nam vel tempora nulla nihil! Unde omnis eum aut temporibus! Voluptate quibusdam sunt inventore maxime tempora a cupiditate.</p>
                            </b-col>
                            
                        </b-row>
                    </b-container>

                    <b-container class="mt30px mb30px bg-white p-3">
                        <b-row class="mb-4">
                            
                            <b-col cols="12">                            	
                                <h3 class="text-gray2">{{$t('Comments')}}</h3>
                            </b-col>
                            
                        </b-row>
                        <b-row>
                            
                            <b-col cols="4 d-flex align-items-center">
                                <div class="author-image d-flex justify-content-center">
                                    <img src="@/assets/author.jpg" alt="Author" class="w-50">
                                </div>
                            </b-col>
                            <b-col cols="8">
                                <div class="d-flex align-items-center">
                                    <h5 class="text-primary">Matt Adams</h5>
                                    <small class="mx-2 text-gray3">Jan 2nd, 2012 2:35pm</small>
                                    <p class="ml-auto text-primary">Reply</p>
                                </div>
                                <div class="d-flex mt-2">
                                    <p class="text-gray2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nulla maxime sapiente aperiam doloribus accusamus ipsa expedita. Quidem, in cupiditate.</p>
                                </div>
                            </b-col>
                            
                        </b-row>
                        <b-row class="mt30px">
                            
                            <b-col cols="4 d-flex align-items-center">
                                <div class="author-image d-flex justify-content-center">
                                    <img src="@/assets/author.jpg" alt="Author" class="w-50">
                                </div>
                            </b-col>
                            <b-col cols="8">
                                <div class="d-flex align-items-center">
                                    <h5 class="text-primary">Matt Adams</h5>
                                    <small class="mx-2 text-gray3">Jan 2nd, 2012 2:35pm</small>
                                    <p class="ml-auto text-primary">Reply</p>
                                </div>
                                <div class="d-flex mt-2">
                                    <p class="text-gray2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nulla maxime sapiente aperiam doloribus accusamus ipsa expedita. Quidem, in cupiditate.</p>
                                </div>
                            </b-col>
                            
                        </b-row>
                        <b-row class="mt30px">
                            
                            <b-col cols="4 d-flex align-items-center">
                                <div class="author-image d-flex justify-content-center">
                                    <img src="@/assets/author.jpg" alt="Author" class="w-50">
                                </div>
                            </b-col>
                            <b-col cols="8">
                                <div class="d-flex align-items-center">
                                    <h5 class="text-primary">Matt Adams</h5>
                                    <small class="mx-2 text-gray3">Jan 2nd, 2012 2:35pm</small>
                                    <p class="ml-auto text-primary">Reply</p>
                                </div>
                                <div class="d-flex mt-2">
                                    <p class="text-gray2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nulla maxime sapiente aperiam doloribus accusamus ipsa expedita. Quidem, in cupiditate.</p>
                                </div>
                            </b-col>
                            
                        </b-row>

                        <b-row class="mt30px">
                            
                            <b-col cols="12 d-flex align-items-center">
                                <h4 class="text-primary my-4 font-weight-bold">{{$t('AddYourComments')}}</h4>
                            </b-col>
                            <b-col cols="12">
                                <p class="text-gray2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nulla maxime sapiente aperiam doloribus accusamus ipsa expedita. Quidem, in cupiditate.</p>  
                            </b-col>
                            
                        </b-row>

                    </b-container>
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
import Footer from '../app/Layout/Footer'
import Sidebar from '../app/UI/Sidebar'


export default {
    data(){
        return {
            article : this.$route.params
        }
    },
    components: {
        "app-footer": Footer,
        "app-sidebar": Sidebar,
    },
    created() {
        window.scrollTo(0,0)
        if(this.article.article == undefined) {
            this.$router.push({name: 'home'})
        }
        if(localStorage.articles){
            let oldArticles = JSON.parse(localStorage.getItem("articles"))
            oldArticles.unshift(this.article)
            localStorage.setItem("articles", JSON.stringify(oldArticles))
        }else {
            let newArticles = []
            newArticles.push(this.article)
            localStorage.setItem("articles", JSON.stringify(newArticles)) 
        }
        
        
    },
    
}
</script>

<style lang="scss">
.news-big-image {
    position: relative;

    &__title {
        position: absolute !important;
        bottom: 0px;
        padding: 80px 20px 20px 20px;
        width: 100%;
        background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgb(255, 255, 255));
    }
}
</style>