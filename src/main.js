import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createVuetify } from 'vuetify/lib/framework.mjs'
import "vuetify/styles";// style cho các components
import * as components from "vuetify/components"
import * as directives from "vuetify/directives"
// khởi tạo ứng dụng
const app = createApp(App)
const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi',
        // aliases,
        sets: {
            // mdi,
        },
    },
})
// sử dụng thư viện bên ngoài
app.use(vuetify)
// gắn component App vào trong ứng dụng
app.mount('#app')
