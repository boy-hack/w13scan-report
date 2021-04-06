import Vue from "vue";
import VueClipboard from 'vue-clipboard2'
import {Layout,Button,Card,Table,Modal,Input,Descriptions,Menu,message, Icon,Tabs,Tag,Timeline} from "ant-design-vue";
import App from "./App.vue";


Vue.use(VueClipboard)
Vue.use(Menu)
Vue.use(Icon)
// Vue.use(Divider)
Vue.use(Tabs)
Vue.use(Tag)
Vue.use(Timeline)
Vue.component(Layout.name, Layout)
Vue.component(Layout.Content.name, Layout.Content)
Vue.component(Layout.Header.name, Layout.Header)
Vue.component(Layout.Footer.name, Layout.Footer)
Vue.component(Layout.Sider.name, Layout.Sider)
Vue.component(Button.name, Button)
Vue.component(Card.name, Card)
Vue.component(Table.name, Table)
Vue.component(Table.Column.name, Table.Column)
Vue.component(Modal.name, Modal)
Vue.component(Input.name, Input)
Vue.component(Input.Search.name, Input.Search)
Vue.component(Descriptions.name, Descriptions)
Vue.component(Descriptions.Item.name, Descriptions.Item)

Vue.config.productionTip = false;
Vue.prototype.$message = message
Vue.prototype.$copy = function (data) {
  this.$copyText(data).then(function (e) {
    message.success('Copied', 1)
  }, function (e) {
    message.error('Can not copy', 1)
  })
}

// Vue.filter('humanize', function (timestamp) {
//   let date = new Date(timestamp);

//   let month = date.getMonth() + 1;
//   let day = date.getDate();
//   let hour = date.getHours();
//   let min = date.getMinutes();
//   let sec = date.getSeconds();

//   month = (month < 10 ? "0" : "") + month;
//   day = (day < 10 ? "0" : "") + day;
//   hour = (hour < 10 ? "0" : "") + hour;
//   min = (min < 10 ? "0" : "") + min;
//   sec = (sec < 10 ? "0" : "") + sec;

//   return date.getFullYear() + "-" + month + "-" + day + " " + hour + ":" + min + ":" + sec;
// })

new Vue({
  render: h => h(App)
}).$mount("#app");
