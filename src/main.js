import { createApp } from 'vue';
import VueSweetalert2 from 'vue-sweetalert2';
import App from './App.vue';
import 'sweetalert2/dist/sweetalert2.min.css';
import './assets/tailwind.css';

const app = createApp(App);

app.use(VueSweetalert2);
app.mount('#app');
