import Vue from 'vue'
import VueRouter from 'vue-router'
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}
//按组分块，懒加载
const Index = () => import(/* webpackChunkName: "index" */ '@views/Index.vue')
const Home = () => import(/* webpackChunkName: "home" */ '@views/home/Home.vue')
const Classify = () =>
	import(/* webpackChunkName: "classify" */ '@views/classify/Classify.vue')
const Cart = () => import(/* webpackChunkName: "cart" */ '@views/cart/Cart.vue')
const Mine = () => import(/* webpackChunkName: "mine" */ '@views/mine/Mine.vue')
const BuyProduct = () =>
	import(/* webpackChunkName: "product" */ '@views/product/BuyProduct.vue')
const Question = () =>
	import(/* webpackChunkName: "Question" */ '@views/product/Question.vue')
const List = () => import(/* webpackChunkName: "List" */ '@views/list/List.vue')
const SimilarList = () =>
	import(/* webpackChunkName: "SimilarList" */ '@views/list/SimilarList.vue')
const Search = () =>
	import(/* webpackChunkName: "Search" */ '@views/search/Search.vue')
const Address = () =>
	import(/* webpackChunkName: "Address" */ '@views/mine/Address.vue')
const Login = () =>
	import(/* webpackChunkName: "Login" */ '@views/mine/Login.vue')
const Register = () =>
	import(/* webpackChunkName: "Register" */ '@views/mine/Register.vue')
const NotFound = () =>
	import(/* webpackChunkName: "NotFound" */ '@views/NotFound.vue')
Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		redirect: '/home'
	},
	{
		path: '/',
		name: 'Index',
		component: Index,
		children: [
			{
				path: '/home',
				name: 'Home',
				component: Home
			},
			{
				path: '/classify',
				name: 'Classify',
				component: Classify
			},
			{
				path: '/cart',
				name: 'Cart',
				component: Cart
			},
			{
				path: '/mine',
				name: 'Mine',
				component: Mine
			}
		]
	},
	{
		path: '/product/:id?',
		name: 'Product',
		component: BuyProduct
	},
	{
		path: '/question',
		name: 'Question',
		component: Question
	},
	{
		path: '/list/:class?/:id?/:text?',
		name: 'List',
		component: List
	},
	{
		path: '/similar',
		name: 'SimilarList',
		component: SimilarList
	},
	{
		path: '/search',
		name: 'Search',
		component: Search
	},
	{
		path: '/address/:user?',
		name: 'Address',
		component: Address
	},
	{
		path: '/login',
		name: 'Login',
		component: Login
	},
	{
		path: '/register',
		name: 'Register',
		component: Register
	},
	{
		path: '*',
		component: NotFound
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
