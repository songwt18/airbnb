import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('../views/home/Home')
const Heart = () => import('../views/heart/Heart')
const Earth = () => import('../views/earth/Earth')
const Message = () => import('../views/message/Message')
const Search = () => import('../views/search/Search')
const MyDate = () => import('../views/home/components/date/MyDate')
const City = () => import('../views/city/City')
const SearchCrad = () => import('../views/search/components/searchCard/SearchCard')
const MyWishList = () => import('../views/heart/components/MyWishList')

Vue.use(Router)

const routes = [
  {path:'/',redirect:'/home'},
  {path:'/home',component:Home},
  {path:'/heart',component:Heart},
  {path:'/earth',component:Earth},
  {path:'/message',component:Message},
  {path:'/search',component:Search},
  {path:'/selectdate',component:MyDate},
  {path:'/selectcity',component:City},
  {path:'/searchcard',component:SearchCrad},
  {path:'/mywishlist',component:MyWishList},

]
export default new Router({
  routes,
  mode: 'history'
})
