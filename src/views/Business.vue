<template>
    <div>
        <app-header></app-header>
        <b-container>
            <b-row>
                <b-col lg="8" cols="12" class="mt30px">
                    <div class="d-flex">
                        <app-news newsCategory="Business" type="2" numberOfNews="10" color="white" :searchValue="searchValue"></app-news>
                    </div>
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
import Header from '../components/Header'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import News from '../components/News'

export default {
    data(){
        return {
            searchValue: this.$route.query.q
        }
    },
    watch: {
        '$route.query.q'() {
            this.searchValue = this.$route.query.q
        }
    },
    components: {
        "app-footer": Footer,
        "app-sidebar": Sidebar,
        "app-header": Header,
        "app-news": News
    }
}
</script>