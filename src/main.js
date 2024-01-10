import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './styles/normalize.css'
import App from './App.vue'
import router from './router'
import 'amfe-flexible'
import { Toast } from 'vant';
//导入Uno.css
import 'uno.css'
const app = createApp(App)

app.use(createPinia())
app.use(Toast)
app.use(router)
app.mount('#app')
