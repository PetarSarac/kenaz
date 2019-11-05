<template>
    <b-container class="bg-primary-dark">
        <b-row class="p-3 text-white">
        <b-col cols="4">
            <p class="sidebar-nav mb-0 text-center">Popular</p>
        </b-col>
        <b-col cols="4">
            <p class="sidebar-nav mb-0 text-center">Top Rated</p>
        </b-col>
        <b-col cols="4">
            <p class="sidebar-nav mb-0 text-center">Comments</p>
        </b-col>
        </b-row>
        <b-row class="sidebar-item bg-primary py-4 px-2 border-bottom border-primary-dark">
        <b-col cols="8">
            <small class="mb-0 text-gray3">August 19, 2019</small>
            <p class="mb-0 text-white font-weight-bold">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </b-col>
        <b-col cols="4">
            <img class="border border-white sidebar-img" src="@/assets/news.png" alt="News">
        </b-col>
        </b-row>

        <b-row class="sidebar-item bg-primary py-4 px-2 border-bottom border-primary-dark">
        <b-col cols="8">
            <small class="mb-0 text-gray3">August 19, 2019</small>
            <p class="mb-0 text-white font-weight-bold">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </b-col>
        <b-col cols="4">
            <img class="border border-white sidebar-img" src="@/assets/news.png" alt="News">
        </b-col>
        </b-row>

        <b-row class="sidebar-item bg-primary py-4 px-2 border-bottom border-primary-dark">
        <b-col cols="8">
            <small class="mb-0 text-gray3">August 19, 2019</small>
            <p class="mb-0 text-white font-weight-bold">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </b-col>
        <b-col cols="4">
            <img class="border border-white sidebar-img" src="@/assets/news.png" alt="News">
        </b-col>
        </b-row>

        <b-row class="sidebar-item bg-primary py-4 px-2 border-bottom border-primary-dark">
        <b-col cols="8">
            <small class="mb-0 text-gray3">August 19, 2019</small>
            <p class="mb-0 text-white font-weight-bold">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </b-col>
        <b-col cols="4">
            <img class="border border-white sidebar-img" src="@/assets/news.png" alt="News">
        </b-col>
        </b-row>
    </b-container>
</template>

<style lang="scss">

.sidebar-nav {
  cursor: pointer;
  transition: all .3s;
  border-bottom: 1px solid var(--primary);

  &:hover {
    color: var(--yellow);
    border-bottom: 1px solid var(--yellow);
  }

}
.sidebar-img {
  max-width: 100%;
  height: 100%;
}

.sidebar-item{
  cursor: pointer;
  transition: all .3s;

  &:hover {
    background-color: #3e3668 !important;
  }
}
</style>