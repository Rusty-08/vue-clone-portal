import { createApp } from 'vue'
import style from './style.css'

// BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/js/index.umd.js'

// FONTAWESOME
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

import App from './App.vue'

library.add(faUserSecret)

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');