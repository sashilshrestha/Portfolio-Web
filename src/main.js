import { createApp } from 'vue';
import App from './App.vue';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import router from './router';
import Vue3Progress from 'vue3-progress';

const options = {
    position: 'fixed',
    height: '0.4375rem',
    // color: "<Your Color>",
};

UIkit.use(Icons);
createApp(App)
    .use(Vue3Progress, options)
    .use(router)
    .mount('#app');
