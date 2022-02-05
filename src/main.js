import Vue from 'vue'
import ChatApp from './ChatApp.vue'
import VueChatScroll from 'vue-chat-scroll'

Vue.config.productionTip = false
Vue.use(VueChatScroll)

new Vue({
  render: h => h(ChatApp),
}).$mount('#chat-app')
