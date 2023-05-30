<template>
  <!-- Main.vue当主体框架 -->
  <div>
    <el-container>
      <el-aside width="auto">
        <!-- 引入侧边栏组件 -->
        <common-aside></common-aside>
      </el-aside>
      <el-container>
        <el-header>
          <commom-header></commom-header>
        </el-header>
        <el-main>
          <!-- router子路由放在主体部分去展示 -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import CommomHeader from '../components/CommomHeader.vue';
//引入侧边栏CommonAside.vue
import CommonAside from "../components/CommonAside.vue";
export default {
  data() {
    return {};
  },
  //引入侧边栏组件
  components: {
    CommonAside,
    CommomHeader,
  },
};
</script>

<style scoped>
.el-header{
  padding: 0;
}
</style>
