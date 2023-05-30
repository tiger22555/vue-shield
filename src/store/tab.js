export default{
    state: {
        isCollapse: false, //控制侧边栏展开和收起，将他绑定在头部区域的按钮上，因为使用组件通信，所以把他单独提取出来    
    },
    mutations:{
        //修改菜单展开和收起的方法
        collapseMenu(state){
            //直接取反，即每次点击按钮取反控制收起和展开
            state.isCollapse = !state.isCollapse
        }
    }
}