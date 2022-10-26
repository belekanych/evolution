import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { useFontAwesome } from './vendor/font-awesome'
import { usePinia } from './vendor/pinia'

const app = createApp(App)

useFontAwesome(app)
usePinia(app)

app.mount('#app')
