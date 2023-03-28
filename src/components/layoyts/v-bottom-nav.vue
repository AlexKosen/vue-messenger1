<script>
export default {
    
}
</script>

<template>
    <div class="v-bottom-nav">
        <router-link :to="{name: 'contacts'}">
            <i class="material-icons">rerson_pin</i>
        </router-link>
        <router-link :to="{name: 'contacts'}">
            <i class="material-icons">chat</i>
        </router-link>
        <router-link :to="{name: 'contacts'}">
            <i class="material-icons">setting</i>
        </router-link>
        <router-link :to="{name: 'contacts'}">
            <i class="material-icons">call</i>
        </router-link>
        <router-link :to="{name: 'contacts'}">
            <i class="material-icons">home</i>
        </router-link>
    </div>
</template>

<style></style>