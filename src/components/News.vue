<template>

<b-container class="bg-white p-4 news">
  <b-row class="align-items-center">
    <b-col cols="6">
      <h2>News</h2>
    </b-col>
    <b-col cols="6" class="text-right">
      <a class="text-light-blue">See all</a>
    </b-col>
  </b-row>

  <b-row>
    <b-col md="6" lg="4" cols="12">
      <div class="news-single mt-4">
        <img src="@/assets/news.png" alt="No image">
        <div class="d-flex mt-1 text-gray2">
          <p>12. August 2019</p>
          <p class="ml-auto">15 C</p>
        </div>
        
        <p class="font-weight-bold mt-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
      </div>
    </b-col>
    <b-col md="6" lg="4" cols="12">
      <div class="news-single mt-4">
        <img src="@/assets/news.png" alt="No image">
        <div class="d-flex mt-1 text-gray2">
          <p>12. August 2019</p>
          <p class="ml-auto">15 C</p>
        </div>
        
        <p class="font-weight-bold mt-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
      </div>
    </b-col>
    <b-col md="6" lg="4" cols="12">
      <div class="news-single mt-4">
        <img src="@/assets/news.png" alt="No image">
        <div class="d-flex mt-1 text-gray2">
          <p>12. August 2019</p>
          <p class="ml-auto">15 C</p>
        </div>
        
        <p class="font-weight-bold mt-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
      </div>
    </b-col>
  </b-row>
</b-container>
</template>

<style lang="scss">
.news {
  border-left: 10px solid var(--light-blue);
  
  &-single {
    & img {
      width: 100%;
    }
  }
}
</style>