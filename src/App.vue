<template>
      <h2 id="h2home">test project of computer website</h2>

    <div class="continer">
      <nav-home />
      <hr>
    </div>
    <router-view v-slot="{Component,route}">
      <transition
      :name="route.meta.transition">
        <component :is="Component" />
      </transition>
    </router-view>
    
</template>
<script>
import NavHome from './components/NavHome.vue'
export default {
  name:'App',
  components:{
    NavHome
  }
}
</script>

<style lang="scss">
//vuejs


hr{
  background-color: red;
  height: 2px;
}
body,h2{
    text-align: center;
    align-items: center;
}
#h2home{
  text-shadow: 6px 8px 5px red,
  5px 5px 10px #26d820;
}
@font-face {
  font-family: 'pagefont';
  src: url('./assets/fonts/AlexandriaFLF.ttf');
}
*{
  font-family: 'pagefont';
}
</style>
