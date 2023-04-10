import { createRouter, createWebHistory } from 'vue-router'
import vContactList from '../components/contacts/v-contact-list.vue'
import vContactUserInfo from '../components/contacts/v-contact-user-info.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'contacts',
      component: vContactList
    },
    {
      path: '/contact',
      name: 'contact',
      component: vContactUserInfo
    },

  ]
})

export default router
