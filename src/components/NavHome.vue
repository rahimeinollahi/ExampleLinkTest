<template>
    <div class="continer">
          <div class="row">
               <!-- <router-link class="col-sm btn btn-light " v-for="item in navItems" :key="item.id" :to="{path:item.router}">{{item.name}}</router-link> -->
               <router-link class="col-sm btn btn-light " v-for="item in navItems" :key="item.id" :to="{path:item.router}">
                  <div v-if="item.id==4">
                      <div class="dropdown-toggle" data-toggle="dropdown">
                          {{item.name}}
                      </div>
                          <div class="dropdown-menu">
                              <router-link class="dropdown-item" to="/"> C#</router-link>
                              <router-link class="dropdown-item" to="/java"> java</router-link>
                              <router-link class="dropdown-item" to="/js"> JS</router-link>
                          </div>
                  </div>
                      <div v-else>{{item.name}}</div>
                   </router-link>
           </div>
     </div> 
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name:'NavHome',
        computed:mapState(['navItems'])
    }
</script>

<style lang="scss" scoped>

</style>