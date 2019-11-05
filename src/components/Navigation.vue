<template>
<div>
    <b-navbar type="dark" variant="dark-gray">
        <b-container>
            <b-row class="w-100 align-items-center">
                <b-col cols="6">
                            <b-navbar-brand href="/">Kenaz</b-navbar-brand>          
                </b-col>
                <b-col cols="6">
    
                    <b-navbar-nav class="ml-auto justify-content-end">
                        <b-nav-form>
                            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                        </b-nav-form>
                    </b-navbar-nav>
                </b-col>
            </b-row>
  
          
        </b-container>

    </b-navbar>

    <b-navbar toggleable="lg" type="dark" variant="primary">
        <b-container class="justify-content-lg-start justify-content-center">
            <b-row class="w-100 text-center">
                <b-col cols="12">
                    <b-navbar-toggle target="nav-collapse" class="m-2"></b-navbar-toggle>
                        <b-collapse id="nav-collapse" is-nav>
                            <b-navbar-nav>
                                <b-nav-item href="#" class="nav-item-border--news">NEWS</b-nav-item>
                                <b-nav-item href="#" class="nav-item-border--business">BUSINESS</b-nav-item>
                                <b-nav-item href="#" class="nav-item-border--entertainment">ENTERTAINMENT</b-nav-item>
                                <b-nav-item href="#" class="nav-item-border--general">GENERAL</b-nav-item>
                                <b-nav-item href="#" class="nav-item-border--health">HEALTH</b-nav-item>
                                <b-nav-item href="#" class="nav-item-border--science">SCIENCE</b-nav-item>
                                <b-nav-item href="#" class="nav-item-border--sports">SPORTS</b-nav-item>
                                <b-nav-item href="#" class="nav-item-border--technology">TECHNOLOGY</b-nav-item>
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
    name:"Navigation"
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
</style>