import { createApp } from 'vue';
import { createPinia } from 'pinia';

import Toast, { type PluginOptions, POSITION } from 'vue-toastification';

import App from './App.vue';
import router from './router';

const app = createApp(App);

const options: PluginOptions = {
  position: POSITION.BOTTOM_RIGHT,
  timeout: 2000,
  closeOnClick: true,
  pauseOnHover: true,
};

app.use(createPinia());
app.use(router);

app.use(Toast, options);

app.mount('#app');
