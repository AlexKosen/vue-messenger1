<script>
import vMessageVue from './v-message.vue';
import { mapState } from 'vuex';

export default {
    components: {
        vMessageVue
    },
    data() {
        return {
            textValue: '',
        }
    },
    props: {
        // messages: {
        //     type: Array,
        //     default: () => []
        // },
        // user: {
        //   type: Object,
        //   default: () => {}  
        // }
    },
    computed: {
        ...mapState([
            'currentChat'
        ])
    },

    methods: {
        sendMessage() {

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