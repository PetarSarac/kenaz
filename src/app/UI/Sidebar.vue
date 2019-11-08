<template>
    <b-container class="bg-primary-dark">
        <b-row class="p-3 text-white">
        <b-col cols="4">
            <p class="sidebar-nav sidebar-nav--active mb-0 text-center">{{$t('sidebar.Popular')}}</p>
        </b-col>
        <b-col cols="4">
            <p class="sidebar-nav mb-0 text-center">{{$t('sidebar.TopRated')}}</p>
        </b-col>
        <b-col cols="4">
            <p class="sidebar-nav mb-0 text-center">{{$t('sidebar.Comments')}}</p>
        </b-col>
        </b-row>
        
        <app-news newsCategory="News" selectedCountry="us" type="3" numberOfNews="5" color="white"></app-news>
        
    </b-container>
</template>

<script>
import News from '../Objects/News'

export default {
    components:{
        "app-news": News
    }
}
</script>
<style lang="scss">
</style>