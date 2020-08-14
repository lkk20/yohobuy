import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import http from './network/request'
//导入公共样式
import './assets/css/base.css'
//导入vant的样式
import 'vant/lib/index.less'
//导入iconFont.js,本地图标库
import './assets/iconfont/iconfont'
//vant图片懒加载与提示框,按需加载
import {
	Lazyload,
	Toast,
	Icon,
	GoodsAction,
	GoodsActionIcon,
	GoodsActionButton,
	Tab,
	Tabs,
	Tabbar,
	TabbarItem,
	Search,
	Image as VanImage,
	Swipe,
	SwipeItem,
	TreeSelect,
	DropdownMenu,
	DropdownItem,
	Divider,
	Button,
	ImagePreview,
	Popup,
	Sku,
	NoticeBar,
	SubmitBar,
	Checkbox,
	Card,
	AddressList,
	AddressEdit,
	Field,
	Form
} from 'vant'
Vue.use(Lazyload)
	.use(Toast)
	.use(ImagePreview)
	.use(Icon)
	.use(GoodsAction)
	.use(GoodsActionButton)
	.use(GoodsActionIcon)
	.use(Tabbar)
	.use(TabbarItem)
	.use(Search)
	.use(VanImage)
	.use(Swipe)
	.use(SwipeItem)
	.use(Tab)
	.use(Tabs)
	.use(TreeSelect)
	.use(DropdownMenu)
	.use(DropdownItem)
	.use(Divider)
	.use(Button)
	.use(Popup)
	.use(Sku)
	.use(NoticeBar)
	.use(SubmitBar)
	.use(Checkbox)
	.use(Card)
	.use(AddressList)
	.use(AddressEdit)
	.use(Field)
	.use(Form)

Vue.config.productionTip = false
//挂载方法
Vue.prototype.$http = http
//挂载方法
Vue.prototype.$toast = Toast
new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
