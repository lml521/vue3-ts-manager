import { createApp , createVNode} from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

import { store, key } from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
const app = createApp(App)
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const Icon = (props: { icon: string }) => {
    const {icon} = props;
    return createVNode(ElementPlusIconsVue[icon as keyof typeof ElementPlusIconsVue]);
};
app.component('Icon', Icon);
app.use(router).use(store, key ).use(ElementPlus).mount('#app')
