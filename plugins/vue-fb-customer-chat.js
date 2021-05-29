import Vue from 'vue'
import VueFbCustomerChat from 'vue-fb-customer-chat'

Vue.use(VueFbCustomerChat, {
  page_id: 112514043495692, //  change 'null' to your Facebook Page ID,
  theme_color: '#8892B0', // theme color in HEX
  locale: 'es_PE', // default 'en_US'
});