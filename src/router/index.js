import Vue from 'vue'
import VueRouter from 'vue-router'
//将自己定义好的组件引入路由，组件一般都在views中
import Home from '../views/Home.vue'
import User from '../views/User.vue'
import Main from '../views/Main.vue'
import Mall from '../views/Mall.vue'
import Login from '../views/Login.vue'
import Device1 from '../views/Device1.vue'
Vue.use(VueRouter)


//路由来说，由以下几步，首先就是下载router，然后创建index.js文件进行导入

//1、创建路由组件,在views及逆行创建

//2、将路由和组件进行映射,path即为访问路径，component为组件匹配
// const routes = [
//     {path: '/home',component:Home},
//     {path: '/user',component:User}
// ]

//配置成主路由和子路由的形式
const routes = [
    {
        //主路由，进去之后刷新主路由的内容
        path:'/',
        component:Main,
        redirect: '/home',//首页显示home
        //子路由，根据path看刷新哪个
        children:[
            {path: 'home',component:Home},
            {path: 'user',component:User},
            {path: 'mall',component:Mall},
            {path: 'device1',component:Device1} 

        ]
    },
    //登录的页面
    {
        path:'/login',
        component:Login
    }
]

//3、创建router实例，然后传入routes配置，还可以加其他东西

const router = new VueRouter({
    routes // 相当于routes：routes，名字一样可以简写
})

//4、进行路由暴露，相当于打包，在其他地方使用可以使用import引入
export default router

//5、将router挂载到根节点，根节点是main.js

