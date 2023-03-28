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
        ])
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
        />
    </div>
</template>

<style></style>