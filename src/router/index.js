import { createRouter, createWebHistory } from 'vue-router'
import vContactList from '../components/contacts/v-contact-list.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'contacts',
      component: vContactList
    },

  ]
})

export default router
