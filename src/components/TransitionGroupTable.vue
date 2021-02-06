<template>
    <div>
            <transition-group name="list" tag="tbody">
                <!-- <span v-for="item in items" :key="item">
                {{ item }}
                </span> -->
                <slot />
            </transition-group>
    </div>
</template>

<script>
    export default {
        name:'TransitionGroupTable',
    }
</script>

<style lang="scss" scoped>
.list-enter-active,
.list-leave-active {
  transition: all 1s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>