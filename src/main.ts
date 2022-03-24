import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'

const app = createApp(App as any)
app.use(router).mount('#app')
