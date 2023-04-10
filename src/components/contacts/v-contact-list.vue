<script>
import vContactUser from '../contacts/v-contact-user.vue';
import { mapActions, mapState } from 'vuex'

export default {
    components: {
        vContactUser,
    },

    computed: {
        ...mapState([
            'contacts'
        ])
    },

    methods: {
        ...mapActions ([
            'FETCH_CONTACTS'
        ]),
        toContactInfo(contact) {
            this.$router.push({
                name: "contact",
                query: {'id': contact.id}
            })
        }
    },

    mounted() {
       this.FETCH_CONTACTS() 
    },
}
</script>

<template>
    <div class="v-contact-list">
        <vContactUser
        v-for="contact in contacts"
        :key="contact.id"
        :contact_data= contact 
        @to-contact-info="toContactInfo(contact)"
        />
    </div>
</template>

<style></style>