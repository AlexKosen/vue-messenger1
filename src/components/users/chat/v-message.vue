<template>
  <div class="v-message" :class="className">
    <div class="v-message__content">
        <p>{{ message.text }}</p>
        <p class="content__time">{{ message.time }}</p>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        message: {
            type: Object,
            defaul: () => {}
        }
    },
    data() {
        return {
            
        }
    },
    computed: {
        className() {
            return {
                'chat__own': this.message.type === 'own',
                'chat__others': this.message.type === 'others'
            }
        }
    }

}
</script>

<style>

</style>