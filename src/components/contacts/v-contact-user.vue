<script>

export default {
    props: {
        contact_data: {
            type: Object,
            default: () => {}
        }
    },
    methods: {
        toContactInfo() {
            this.$emit("to-contact-info")
        }
    },
    computed: {
        className() {
            return {
                "online": this.contact_data.status === "online",
                "offline": this.contact_data.status === "offline"
            }
        }
    }
}
</script>

<template>
   <div class="v-contact-user" @click="toContactInfo">
        <div class="user__avatar"></div>
        <div class="user__name">
            <span>{{ contact_data.name }}</span>
        </div>
        <div class="user__status"></div>
   </div> 
</template>