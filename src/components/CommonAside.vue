<!-- 将侧边栏代码抽成组件，便于维护和引入，export之后，直接在main.vue中进行引入 -->
<template>
    
  <el-menu
    default-active="1-4-1"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapse"
    active-text-color="#ffd04b"
    background-color="#D3DCE6"
  >
  <!-- background-color="#F0F4C3"控制侧边栏颜色 -->
  <!-- 智能判断是否展开和收起，显示的文字不一样 -->
    <div style="line-height: 48px;text-align: center;">{{ isCollapse? '系统':'智能检测与修复' }}</div>
    <!-- 绑定点击函数进行跳转 -->
    <el-menu-item @click="clickMenu(item)" v-for="item in menuData" :key="item.name" :index="item.name">
      <i :class="`el-icon-${ item.icon }`"></i>
      <span slot="title">{{item.label}}</span>
    </el-menu-item>

   
    <!-- 遍历noChildren，使用数据里面的name作为唯一标识 冒号相当于v-bind -->
    <!-- <el-menu-item v-for="item in noChildren" :key="item.name" :index="item.name"> -->
    <!-- 使用v-bind双向绑定图标 -->
      <!-- <i :class="`el-icon-${ item.icon }`"></i> -->
      <!-- <span slot="title">{{item.label}}</span> -->
    <!-- </el-menu-item> -->

    <!-- <el-submenu v-for="item in hasChildren" :key="item.label" :index="item.label"> -->
      <!-- <template slot="title"> -->
        <!-- <i :class="`el-icon-${ item.icon }`"></i> -->
        <!-- <span slot="title">{{item.label}}</span> -->
      <!-- </template> -->
      <!-- <el-menu-item-group  v-for="subitem in item.children" :key="subitem.path">  -->
        <!-- <el-menu-item :index="subitem.path">{{subitem.label}}</el-menu-item> -->
      <!-- </el-menu-item-group> --> 
    <!-- </el-submenu> -->
    
  </el-menu>
</template>

<!-- 使用less进行编写style -->
<style lang="less" scope> 
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu{
    height:100vh;
    border-right: none;
     
}
</style>

<script>
export default {
  data() {
    return {
      //定义侧边栏不折叠
      // isCollapse: false,
     //menuData把按钮和图标都抽象出来，使用
      menuData:[
        {
          path: '/',
          name: 'home',
          label: '首页',
          icon: 's-home',
          url: 'Home/Home'
        },
        {
          path: '/mall',
          name: 'mall',
          label: '不知道',
          icon: 'video-play',
          url: 'MallManage/MallManage'
        },
        {
          path: '/user',
          name: 'user',
          label: '不知道',
          icon: 'user',
          url: 'UserManage/UserManage'
        },
        // {
        //   label: '其他',
        //   icon: 'location',
        //   children: [
        //     {
        //       path: '/page1',
        //       name: 'page1',
        //       label: '页面1',
        //       icon: 'setting',
        //       url: 'Other/PageOne'
        //     },
        //     {
        //       path: '/page2',
        //       name: 'page2',
        //       label: '页面2',
        //       icon: 'setting',
        //       url: 'Other/PageTwo'
        //     }
        //   ]
        // }
      ]
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    clickMenu(item){
      //当页面路由与跳转不一致才跳转
      if(this.$route.path!== item.path && !(this.$route.path === '/home' && (item.path === '/'))){
        this.$router.push(item.path)
      }
      
    }
  },
  // //计算属性，对数据进行过滤来实现权限管理，以后使用axios进行菜单异步获取，不同权限看到的导航栏不一样
  // computed:{
  //   //没有子菜单
  //   noChildren(){
  //       //过滤掉数据里的子菜单
  //      return this.menuData.filter(item => !item.children)
  //   },
  //   //有子菜单
  //   hasChildren(){
  //       return this.menuData.filter(item => item.children)
  //   }
  // }
  computed:{
    isCollapse(){
      //将这个状态获取到，store就相当于中间商，头部的按钮调用他的方法，侧边栏获取结果进行显示
      return this.$store.state.tab.isCollapse
    }
  }
};
</script>
