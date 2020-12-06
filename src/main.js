import { createApp } from 'vue'
import App from './App.vue'
import { globalyRegisterBaseComponents } from './initUtils'
// import { globalyRegisterBaseComponents } from './initUtils'

// globalyRegisterBaseComponents(Vue)

const app = createApp(App)

globalyRegisterBaseComponents(app)

app.mount('#app')

