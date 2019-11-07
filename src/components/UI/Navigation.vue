<template>
<div>
    <div class="bg-dark-gray">
        <b-container>
            <b-row>
                <b-col cols="12">
                    <div class="d-flex flex-md-row flex-column align-items-center">
                        <div class="d-flex align-items-center">
                            <div class="bg-gray py-3 px-4">
                                <router-link :to="`/${$i18n.locale}`"><img src="@/assets/LeftArrow-white.png" alt="Arrow left"></router-link>
                            </div>
                            <h2 class="text-white ml-2">
                                <router-link :to="`/${$i18n.locale}`" class="text-white">Kenaz</router-link>
                            </h2>
                        </div>
                        


                        <div class="d-flex ml-auto align-items-center">
                            <b-form @submit.prevent="submitSearch" class="d-flex">
                                <b-form-input v-model="searchInput" placeholder="Search..." class="p-2"></b-form-input>
                                <b-form-select v-model="selectedCategory"  :options="options" class="py-2 pr-4 mx-2"></b-form-select>
                            </b-form>
                            <b-form>
                                <b-form-select v-model="$i18n.locale" @change.native="changeLocal($event)">
                                    <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">
                                         {{ lang }}
                                    </option>
                                </b-form-select>
                            </b-form>
                            <div class="bg-gray py-3 px-4 ml-2 search-box mr-md-0" @click="submitSearch">
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
                                <router-link tag="b-nav-item" class="nav-item-border--news" :to="`/${$i18n.locale}/news`">
                                    {{$t('navigation.news')}}
                                </router-link>
                                <router-link tag="b-nav-item" class="nav-item-border--business" :to="`/${$i18n.locale}/business`">
                                    {{$t('navigation.business')}}
                                </router-link>
                                <router-link tag="b-nav-item" class="nav-item-border--entertainment" :to="`/${$i18n.locale}/entertainment`">
                                    {{$t('navigation.entertainment')}}
                                </router-link>
                                <router-link tag="b-nav-item" class="nav-item-border--general" :to="`/${$i18n.locale}/general`">
                                    {{$t('navigation.general')}}
                                </router-link>
                                <router-link tag="b-nav-item" class="nav-item-border--health" :to="`/${$i18n.locale}/health`">
                                    {{$t('navigation.health')}}
                                </router-link>
                                <router-link tag="b-nav-item" class="nav-item-border--science" :to="`/${$i18n.locale}/science`">
                                    {{$t('navigation.science')}}
                                </router-link>
                                <router-link tag="b-nav-item" class="nav-item-border--sports" :to="`/${$i18n.locale}/sports`">
                                    {{$t('navigation.sports')}}
                                </router-link>
                                <router-link tag="b-nav-item" class="nav-item-border--technology" :to="`/${$i18n.locale}/technology`">
                                    {{$t('navigation.technology')}}
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
          { value: 'business', text: this.$t('Business') },
          { value: 'entertainment', text: this.$t('Entertainment') },
          { value: 'general', text: this.$t('General') },
          { value: 'health', text: this.$t('Health')},
          { value: 'science', text: this.$t('Science')},
          { value: 'sports', text: this.$t('Sports')},
          { value: 'technology', text: this.$t('Technology')}
        ],
        searchInput: '',
        selectedCategory: '',
        langs: ['en', 'hr']
      }
    },
    methods: {
        submitSearch(){
            if(this.selectedCategory == null || this.selectedCategory == '' || this.searchInput == ''){
                alert("Search/Category can not be empty ! ")
            }else {
                this.$router.push({ path: `/${this.$i18n.locale}/` + this.selectedCategory , query: { q:this.searchInput} })
                this.searchInput = ''
                this.selectedCategory = ''
            }
            
        },
        changeLocal(event){
            this.$router.push({
                params: {lang: event.target.value}
            })
            this.options = [ // Used only for trigger re-render
                { value: 'business', text: this.$t('Business') },
                { value: 'entertainment', text: this.$t('Entertainment') },
                { value: 'general', text: this.$t('General') },
                { value: 'health', text: this.$t('Health')},
                { value: 'science', text: this.$t('Science')},
                { value: 'sports', text: this.$t('Sports')},
                { value: 'technology', text: this.$t('Technology')}
            ]
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
        &.router-link-active {
            background-color: var(--light-blue);
        }
        &:hover {
            background-color: var(--light-blue);
        }
    }
    &--business {
        border-bottom: 3px solid var(--red);
        &.router-link-active {
            background-color: var(--red);
        }
        &:hover {
            background-color: var(--red);
        }
    }
    &--entertainment {
        border-bottom: 3px solid var(--green);
        &.router-link-active {
            background-color: var(--green);
        }
        &:hover {
            background-color: var(--green);
        }
    }
    &--general {
        border-bottom: 3px solid var(--blue);
        &.router-link-active {
            background-color: var(--blue);
        }
        &:hover {
            background-color: var(--blue);
        }
    }
    &--health {
        border-bottom: 3px solid var(--yellow);
        &.router-link-active {
            background-color: var(--yellow);
        }
        &:hover {
            background-color: var(--yellow);
        }
    }
    &--science {
        border-bottom: 3px solid var(--brown);
        &.router-link-active {
            background-color: var(--brown);
        }
        &:hover {
            background-color: var(--brown);
        }
    }
    &--sports {
        border-bottom: 3px solid orange;
        &.router-link-active {
            background-color: orange;
        }
        &:hover {
            background-color: orange;
        }
    }
    &--technology {
        border-bottom: 3px solid chartreuse;
        &.router-link-active {
            background-color: chartreuse;
        }
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