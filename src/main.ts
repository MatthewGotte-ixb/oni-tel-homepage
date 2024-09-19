import { createApp } from 'vue'
import App from './App.vue'
import './assets/index.css'

createApp(App).mount('#app')

const options = {
    publicKey: import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY,
    privateKey: import.meta.env.VITE_EMAIL_JS_PRIVATE_KEY,
    limitRate: {
        throttle: 0
    },
}
//@ts-ignore
emailjs.init(options);


