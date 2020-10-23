import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import directives from './directive'
import 'normalize.css/normalize.css'
import { formatTime } from './util'
import antComponent from './util/import-antd.js'
import 'ant-design-vue/dist/antd.css';
const app = createApp(App)
for (let key in directives) {
    app.directive(key, directives[key].default || directives[key])
}

for (let key in antComponent) {
    app.component(antComponent[key].name, antComponent[key])
}
app.config.globalProperties.$formatTime = formatTime
app.use(router)
app.mount('#app')
console.log(app, 'main')
export default app