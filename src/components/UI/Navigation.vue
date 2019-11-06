<template>
<div>
    <div class="bg-dark-gray">
        <b-container>
            <b-row>
                <b-col cols="12">
                    <div class="d-flex flex-md-row flex-column align-items-center">
                        <div class="d-flex align-items-center">
                            <div class="bg-gray py-3 px-4">
                                <img src="@/assets/LeftArrow-white.png" alt="Arrow left">
                            </div>
                            <h2 class="text-white ml-2">
                                <router-link to="/" class="text-white">Kenaz</router-link>
                            </h2>
                        </div>
                        


                        <div class="d-flex ml-auto align-items-center">
                            <b-form @submit.prevent="submitSearch" class="d-flex">
                                <b-form-input v-model="searchInput" placeholder="Search..." class="p-2"></b-form-input>
                                <b-form-select v-model="selectedCategory" :options="options" class="py-2 pr-4 mx-2"></b-form-select>
                            </b-form>
                            <div class="bg-gray py-3 px-4 search-box mr-md-0" @click="submitSearch">
                                <img src="@/assets/search-icon.png" alt="Search icon">
                            </div>
                        </div>
                    </div>
                </b-col>
            </b-row>
  
          
        </b-container>

    </div>

    <b-navbar toggleable="lg" type="dark" variant="primary">
        <b-container class="justify-content-lg-start justify-content-center">
            <b-row class="w-100 text-center">
                <b-col cols="12">
                    <b-navbar-toggle target="nav-collapse" class="m-2"></b-navbar-toggle>
                        <b-collapse id="nav-collapse" is-nav>
                            <b-navbar-nav>
                                <router-link tag="b-nav-item" class="nav-item-border--news" to="/news">
                                    NEWS
                                </router-link>
                                <router-link tag="b-nav-item" class="nav-item-border--business" to="/business">
                                    BUSINESS
                                </router-link>
                                <router-link tag="b-nav-item" class="nav-item-border--entertainment" to="/entertainment">
                                    ENTERTAINMENT
                                </router-link>
                                <router-link tag="b-nav-item" class="nav-item-border--general" to="/general">
                                    GENERAL
                                </router-link>
                                <router-link tag="b-nav-item" class="nav-item-border--health" to="/health">
                                    HEALTH
                                </router-link>
                                <router-link tag="b-nav-item" class="nav-item-border--science" to="/science">
                                    SCIENCE
                                </router-link>
                                <router-link tag="b-nav-item" class="nav-item-border--sports" to="/sports">
                                    SPORTS
                                </router-link>
                                <router-link tag="b-nav-item" class="nav-item-border--technology" to="/technology">
                                    TECHNOLOGY
                                </router-link>
 
                            </b-navbar-nav>
                        </b-collapse> 
                </b-col>
            </b-row>
        </b-container>
        

    </b-navbar>      
</div>
</template>

<script>
 export default {
     name: "Navigation",
    data() {
      return {
        selected: null,
        options: [
          { value: null, text: 'Select Category' },
          { value: 'business', text: 'Business' },
          { value: 'entertainment', text: 'Entertainment' },
          { value: 'general', text: 'General' },
          { value: 'health', text: 'Health'},
          { value: 'science', text: 'Science'},
          { value: 'sports', text: 'Sports'},
          { value: 'technology', text: 'Technology'}
        ],
        searchInput: '',
        selectedCategory: ''
      }
    },
    methods: {
        submitSearch(){
            this.$router.push({ path: '/' + this.selectedCategory , query: { q:this.searchInput} })
        }
    }
  }
</script>

<style lang="scss">
.nav-item {
    padding: .6rem;
    font-weight: bold;
    transition: all .3s;
}

.navbar {
    padding: 0 !important;
}
.nav-link {
    color:white !important;
}

.nav-item-border{
    &--news {
        border-bottom: 3px solid var(--light-blue);
        &:hover {
            background-color: var(--light-blue);
        }
    }
    &--business {
        border-bottom: 3px solid var(--red);
        &:hover {
            background-color: var(--red);
        }
    }
    &--entertainment {
        border-bottom: 3px solid var(--green);
        &:hover {
            background-color: var(--green);
        }
    }
    &--general {
        border-bottom: 3px solid var(--blue);
        &:hover {
            background-color: var(--blue);
        }
    }
    &--health {
        border-bottom: 3px solid var(--yellow);
        &:hover {
            background-color: var(--yellow);
        }
    }
    &--science {
        border-bottom: 3px solid var(--brown);
        &:hover {
            background-color: var(--brown);
        }
    }
    &--sports {
        border-bottom: 3px solid orange;
        &:hover {
            background-color: orange;
        }
    }
    &--technology {
        border-bottom: 3px solid chartreuse;
        &:hover {
            background-color: chartreuse;
        }
    }
}

.search-box {
    cursor: pointer;
    margin-right: -15px;
    &:hover {
        background-color: var(--primary) !important;
    }
}
</style>