<script>
import vMessageVue from './v-message.vue';
import { mapState, mapActions } from 'vuex';

export default {
    components: {
        vMessageVue
    },
    data() {
        return {
            textValue: '',
        }
    },

    computed: {
        ...mapState([
            'currentChat'
        ]),

    },

    methods: {
        ...mapActions([
            'SET_MESSAGE_TO_CHAT'
        ]),

        sendMessage() {
            let user = {...this.currentChat}
            let chat = {
                id: this.currentChat.chat.length + 1,
                time: new Date().toLocaleTimeString('en-US', {
                    hour12: false,
                    hour: 'numeric',
                    minute: 'numeric'
                }),
                text: this.textValue,
                type: 'own'
            }
            user.chat.push(chat)
            console.log(chat)
            this.SET_MESSAGE_TO_CHAT({userId: user.id, chat: user})
            .then(()=> {
                this.textValue = ''
            })
        }
    },
}
</script>

<template>
  <div class="v-user-chat">
    <vMessageVue
        v-for="message in currentChat.chat"
        :key="message.id"
        :message="message"
    />
    <div class="input__field">
        <input type="text" class="v-user-chat__textfield"
            v-model="textValue"
            @keypress.enter="sendMessage"
        >
        <i class="material-icons" @click="sendMessage">send</i>
    </div>
  </div>
</template>


<style>

</style>