<template>
     <div class="continer item1 btn "> 
        <div class="row ">
               <router-link class="col-sm-12 btn btn-light" v-for="item in csItems" :key="item.id" :to="{path:item.router}"
               ><h3 @click="item.show=!item.show">{{item.name}}</h3>
               
                   <!-- home part -->
                   <transtion-menu >
                    <div v-if="item.show">
                            <div v-if="item.id==1">
                                <div v-for="value in csHomeItems" :key="value.id">
                                    <a class="text-dark col-sm-12" href="#router-link">{{value.header}}</a>
                                    </div>
                            </div>   
                    </div>      
                   </transtion-menu> 

                   <!-- //beginer part -->
                   <transtion-menu >
                        <div v-if="item.show">
                            <div v-if="item.id==2" >
                                <div v-for="value in csHomeBeginer" :key="value.id">
                                    <a class="text-dark col-sm-12" href="value.section">{{value.header}}</a>
                                </div>
                            </div>
                        </div>
                   </transtion-menu>

                   <!-- normal -->
                   <transtion-menu >
                        <div v-if="item.show">
                            <div v-if="item.id==3" >
                                <div v-for="value in csHomeNoraml" :key="value.id">
                                    <a class="text-dark col-sm-12" href="value.section">{{value.header}}</a>
                                </div>
                            </div>
                        </div>
                   </transtion-menu>
                    <!-- advanced -->
                    <transtion-menu >
                        <div v-if="item.show">
                            <div v-if="item.id==4" >
                                <div v-for="value in csHomeAdvanced" :key="value.id">
                                    <a class="text-dark col-sm-12" href="value.section">{{value.header}}</a>
                                </div>
                            </div>
                    </div>
                    </transtion-menu>
                   <!-- refrenced -->
                   <transtion-menu >
                        <div v-if="item.show">
                            <div v-if="item.id==5" >
                                <div v-for="value in csHomeRefrenced" :key="value.id">
                                    <a class="text-dark col-sm-12" href="value.section">{{value.header}}</a>
                                </div>
                            </div>
                        </div>
                   </transtion-menu>
               </router-link>     
       </div>           
    </div>  
</template>

<script>
import {mapState} from 'vuex'
import TranstionMenu from '../TranstionMenu.vue'
    export default {
        name:'CsMenu',
        components:{
            TranstionMenu
        },
        computed:{
           ...mapState(['csItems','csHomeItems','csHomeBeginer','csHomeNoraml',
           'csHomeAdvanced','csHomeRefrenced','csMenuShow'
           ])
            },
            methods:{
                add(){
                    alert('ho');
                }
            }
    }
</script>

<style lang="scss" scoped>
.item1{
   
    height: 100%;
    background-color: #fffeee;
    
}
</style>