import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//******************************************************* */
//sass file
// import '@/assets/sass/index.scss'
// import '../src/assets/sass/index.scss'
import './assets/sass/index.scss'
//******************************************************* */

//******************************************************* */
//bootstrap file
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
//******************************************************* */

createApp(App).use(store).use(router).mount('#app')
