<template>
    <b-container>
        <b-row>
        <b-col>
            <div class="banner mt-4">Banner 940x120</div>
        </b-col>
        </b-row>
        <app-carousel></app-carousel>
    </b-container>
</template>

<script>
import Carousel from './Carousel'

export default {
    components:{
        "app-carousel": Carousel
    }
}
</script>