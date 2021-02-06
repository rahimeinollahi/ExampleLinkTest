<template>
    <div>
        <transition
        name='left-side-transion'
        mode="out-in">
        <slot />
        </transition>
    </div>
</template>

<script>
    export default {
        name:'TranstionMenu',
    }
</script>

<style lang="scss" scoped>
.left-side-transion-enter-active,
.left-side-transion-leave-active{
  transition: opacity 0.5s,  transform 0.7s;
}
.left-side-transion-enter-from,
.left-side-transion-leave-to{
  opacity: 0;
  transform: scale(3);
  }
</style>