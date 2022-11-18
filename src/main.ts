import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import setupThrottleDriective from './throttle'

import './assets/base.css'
const app = createApp(App)

app.use(createPinia())
setupThrottleDriective(app)
app.mount('#app')
