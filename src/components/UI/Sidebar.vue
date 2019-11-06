<template>
    <b-container class="bg-primary-dark">
        <b-row class="p-3 text-white">
        <b-col cols="4">
            <p class="sidebar-nav sidebar-nav--active mb-0 text-center">Popular</p>
        </b-col>
        <b-col cols="4">
            <p class="sidebar-nav mb-0 text-center">Top Rated</p>
        </b-col>
        <b-col cols="4">
            <p class="sidebar-nav mb-0 text-center">Comments</p>
        </b-col>
        </b-row>
        
        <app-news newsCategory="News" type="3" numberOfNews="10" color="white"></app-news>
        
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

.sidebar-nav {
  cursor: pointer;
  transition: all .3s;
  border-bottom: 1px solid var(--primary);

  &--active {
      color: var(--yellow);
      border-bottom: 1px solid var(--yellow);
  }
  &:hover {
    color: var(--yellow);
    border-bottom: 1px solid var(--yellow);
  }

}
.sidebar-img {
  width: 100%;
}

.sidebar-item{
  cursor: pointer;
  transition: all .3s;

  &:hover {
    background-color: #3e3668 !important;
  }
}
</style>