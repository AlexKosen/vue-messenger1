<script>
import { mapState, mapActions } from 'vuex';

export default {
    data() {
        return {
            contact_data: {}
        }
    },
    computed: {
        ...mapState([
            'contacts',
            'chats',
            'currentChat'
        ])
    },
    methods: {
        ...mapActions([
        'FETCH_CHATS',
        'ADD_CURRENT_CHAT'
        ]),

        checkChats() {
            if(!this.chats.length) {
                this.FETCH_CHATS()
                .then(()=> {
                    this.toChats()
                })
            } else {
                this.toChats()
            }
        },
        toChats() {
            this.chats.map((chat)=> {
                if(chat.id === this.contact_data.id) {
                    this.$router.push({
                        name: 'chat',
                        query: { 'id': chat.id}
                    })
                }
                this.ADD_CURRENT_CHAT(chat)
            })
        }
    },
    mounted() {
        this.contacts.find((contact) => {
            if(contact.id == this.$route.query.id) {
                this.contact_data = contact
            }
        })
    },
}
</script>

<template>
    <div class="v-contact-user-info">
        <div class="info__avatar"></div>
        <div class="info__content">
            <div class="info__name">
                <span>{{ contact_data.phone }}</span>
            </div>
            <div class="info__tools">
                <button class="start-call">Call</button>
                <button class="start-chat" @click="checkChats">Start chat</button>
            </div>
        </div>
    </div>
</template>

<style></style>