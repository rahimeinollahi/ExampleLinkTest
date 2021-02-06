<template>
    <div class="continer ">
        <div class="row">
            <div class="col-sm-4 cshome-hight"><cs-menu /></div>
            <div class="col-sm-8">
                <router-view v-slot="{Component}">
                    <transition
                    name="fade">
                        <component :is="Component" />
                    </transition>
                </router-view>
            </div>
        </div>
       
    </div>
</template>

<script>
import CsMenu from '../../components/CSharp/CsMenu.vue'
// import CsHomeContent from './CsHomeContent.vue'
// import CsHomeContent from '../../components/CSharp/CsHomeContent.vue'
    export default {
        name:'CsHome',
        components:{
            CsMenu,
                // CsHomeContent,
            // CsHomeContent
                
        }
    }
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active{
    transition: all 1s;
}
.fade-enter-from,
.fade-leave-to{
    opacity: 0;
    transform: translateY(50px);
}
</style>