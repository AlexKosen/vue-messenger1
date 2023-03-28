import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'material-design-icons-iconfont'
import './assets/styles/styles.scss'
import { store } from './vuex/store'

const app = createApp(App)

app.use(router)
app.use(store)
app.mount('#app')
