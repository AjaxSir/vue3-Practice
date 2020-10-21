import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import directives from './directive'
import 'normalize.css/normalize.css'
import { formatTime } from './util'
const app = createApp(App)
for (let key in directives) {
    app.directive(key, directives[key].default || directives[key])
}
app.config.globalProperties.$formatTime = formatTime
app.use(router)
app.mount('#app')