import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './styles/normalize.css'
import App from './App.vue'
import router from './router'
//导入Uno.css
import 'uno.css'
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
