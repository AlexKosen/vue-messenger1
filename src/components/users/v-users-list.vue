<script>
import vUser from './v-user.vue'
import { mapActions, mapState } from 'vuex';

export default {
    components: {
        vUser
    },
    computed: {
        ...mapState([
            'chats'
        ])
    },
    methods: {
        ...mapActions([
            'FETCH_CHATS',
            'SET_USER_TO_HEADER'
        ])
    },
    mounted() {
        this.FETCH_CHATS(),
        this.SET_USER_TO_HEADER()
    }

}
</script>

<template>
    <div class="v-users-list">
      <vUser
        v-for="chat in chats"
        :key="chat.id"
        :user_data = chat
      />
    </div>
  </template>

<style>

</style>