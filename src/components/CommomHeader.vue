<template>
    <!-- header部分的组件 -->
    <div class="header-container">
        <!-- 定义了一个左边一个右边 -->
        <div class="l-content">
             <!-- 绑定点击时间，执行handleMenu方法 -->
            <el-button @click="handleMenu()" icon="el-icon-menu" size="mini"></el-button>
            <!-- 面包屑 -->
            <span class="text">首页</span>
        </div>
        <!-- 右边区域 -->
        <div class="r-content">
            <el-dropdown>
                <span class="el-dropdown-link">
                    <img class="user" src="../imgs/user.jpg" alt="">
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>个人中心</el-dropdown-item>
                    <el-dropdown-item>退出</el-dropdown-item>
                    
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
    
</template>

<script>
export default{
    data(){
        return{}
    },
    methods:{
        handleMenu(){
            //因为使用main.js对store进行了挂载，所以在这里可以访问到store中引入的tab.js的控制菜单的方法
           this.$store.commit('collapseMenu')
        }
    }
}
</script>
<style lang="less" scoped>
.header-container{
    padding: 0 20px;
    background-color: #333;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .text{
        color:#fff;
        font-size: 14px;
        margin-left:10px ;
    }
    .r-content{
        .user{
            width: 40px;
            height: 40px;
            border-radius:50% ;
        }
    }
}

</style>