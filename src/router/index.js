import { createRouter, createWebHistory } from 'vue-router'
import vContactList from '../components/contacts/v-contact-list.vue'
import vContactUserInfo from '../components/contacts/v-contact-user-info.vue'
import vUserList from '../components/users/v-users-list.vue'
import vUserChat from '../components/users/chat/v-user-chat.vue'
import { store } from '../vuex/store.js'

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
    {
      path: '/chats',
      name: 'chats',
      component: vUserList
    },
    {
      path: '/chat',
      name: 'chat',
      component: vUserChat,
    },
  ]
});
router.beforeEach((to, from, next) => {
  if(!store.state.isAuth && to.name === 'contact') alert('No autorisation!')
  else next()
})

export default router
