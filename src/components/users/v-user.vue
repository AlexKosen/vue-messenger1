<template>
  <div class="v-user" @click="toUserChat">
    <div class="v-user__avatar"></div>
    <div class="v-user__info">
        <p class="info__name">{{ user_data.name }}</p>
        <p class="info__last-message">{{ user_data.chat[user_data.chat.length-1].text }}</p>
    </div>
    <div class="v-user__time">{{ user_data.chat[user_data.chat.length-1].time }}</div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    props: {
        user_data: {
            type: Object,
            default: () => {}
        }
    },
    methods: {
        ...mapActions([
            'ADD_CURRENT_CHAT'
        ]),
        toUserChat() {
            this.$router.push({
                name: 'chat',
            })
            this.ADD_CURRENT_CHAT(this.user_data)
        }
    },

}
</script>

<style>

</style>