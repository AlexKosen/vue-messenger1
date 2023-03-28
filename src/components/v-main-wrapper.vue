<script>
import vHeader from './layoyts/v-header.vue';
import vBottomNav from './layoyts/v-bottom-nav.vue';
    export default {
        components: {
            vHeader,
            vBottomNav
        },

        props: {},
        data() {
            return {
                
            }
        },
        computed: {}
    }
</script>

<template>
    <div class="v-main-wrapper">
        <vHeader/>
        <RouterView/>
        <vBottomNav/>
    </div>
</template>

<style>
</style>