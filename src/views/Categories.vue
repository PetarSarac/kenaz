<template>
    <div>
        <app-header></app-header>
        <b-container>
            <b-row>
                <b-col lg="8" cols="12" class="mt30px">
                    <i v-if="searchValue != undefined">{{$t('YourSearch')}}: <span class="text-gray3">{{searchValue}}</span> </i>
                    <app-news :newsCategory="newsCategory" selectedCountry="us" type="2" numberOfNews="10" color="white" :searchValue="searchValue" ref="newsApp"></app-news>
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
import Header from '../app/Layout/Header'
import Footer from '../app/Layout/Footer'
import Sidebar from '../app/UI/Sidebar'
import News from '../app/Objects/News'

export default {
    data(){
        return {
            searchValue: this.$route.query.q
        }
    },
    components: {
        "app-footer": Footer,
        "app-sidebar": Sidebar,
        "app-header": Header,
        "app-news": News
    },
    computed: {
        newsCategory(){
            return this.$route.params.category
        }
    },
    created(){
        window.scrollTo(0,0)
    },
    watch: {
        '$route.query.q'() {
            this.searchValue = this.$route.query.q
        } ,
        '$route.params.category'(){
            
        }
    }
}
</script>