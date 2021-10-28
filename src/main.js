import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

import { BFormSelect, BImgLazy, BIconChevronRight, BIconChevronLeft, BIconCursor, BIconFullscreenExit, BIconAspectRatio, BIconBrightnessHighFill, BIconCircle, BIconArrowLeft, BIconArrowRight } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'

Vue.component('b-form-select', BFormSelect)
Vue.component('b-img-lazy', BImgLazy)
Vue.component('b-icon-chev-right', BIconChevronRight)
Vue.component('b-icon-chev-left', BIconChevronLeft)
Vue.component('b-icon-cursor', BIconCursor)
Vue.component('b-icon-sun', BIconBrightnessHighFill)
Vue.component('b-icon-circle', BIconCircle)
Vue.component('b-icon-arrow-left', BIconArrowLeft)
Vue.component('b-icon-arrow-right', BIconArrowRight)
Vue.component('b-icon-aspect-ratio', BIconAspectRatio)
Vue.component('b-icon-fs-exit', BIconFullscreenExit)

Vue.config.productionTip = true

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
