import Vue from 'vue'
import { 
    message,
    Button,
    FormModel,
    Modal,
    Popconfirm,
    Icon,
    Upload,
    Input,
    Avatar,
}  from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

Vue.use(Avatar)
Vue.use(Input)
Vue.use(Button)
Vue.use(FormModel)
Vue.use(Modal)
Vue.use(Icon)
Vue.use(Upload)
Vue.use(Popconfirm)

message.config({
    top: `70px`,
    duration: 2,
    maxCount: 3,
  });
Vue.prototype.$message = message;
Vue.prototype.$info = Modal.info;
Vue.prototype.$success = Modal.success;
Vue.prototype.$error = Modal.error;
Vue.prototype.$warning = Modal.warning;
Vue.prototype.$confirm = Modal.confirm;
