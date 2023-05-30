const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false, //关闭校验，防止命名不规范报错
  devServer:{
    port:7000,
    
  }
})
