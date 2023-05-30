//引入vuex进行组件间通信
import Vue from 'vue'
import Vuex from 'vuex'
//引入编写好展开收起函数的tab
import tab from './tab'

Vue.use(Vuex)

//创建vuex实例
//将rab模块加入，并暴露
export default new Vuex.Store({
    modules: {
        tab
    }

})