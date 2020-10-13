import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import directives from './directive'

const app = createApp(App)
for (let key in directives) {
    app.directive(key, directives[key].default || directives[key])
}

app.use(router)
app.mount('#app')