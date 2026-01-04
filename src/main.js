import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import AOS from 'aos'

import 'aos/dist/aos.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './assets/main.css' // Tailwind CSS

const app = createApp(App)

app.use(router)
app.mount('#app')

// Initialize AOS
AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true,
  mirror: false
})
