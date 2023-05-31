<template>
    <div>
     
      <el-row>
     
          <div class="grid-content bg-purple">
  
            <el-table :data="tableData" stripe   style="width: 100%;" header-align="center">
              <el-table-column prop="id" label="编号"  > </el-table-column>
              <el-table-column prop="deviceName" label="名称" > </el-table-column>
              <el-table-column prop="description" label="描述" > </el-table-column>
              <el-table-column prop="ip" label="ip" align="center"> </el-table-column>
              <el-table-column prop="state" label="状态" > 
                <template slot-scope="scope">
                  <i v-if="scope.row.state === 0" class="el-icon-success" style="color:green;"></i>
                  <i v-else-if="scope.row.state === 1" class="el-icon-warning" style="color:yellow;"></i>
                  <i v-else class="el-icon-info" style="color:red;"></i>
                </template>
              </el-table-column>

              <el-table-column label="Ports" width="300px" >
                <template slot-scope="scope" >
                  <div class="port-item" v-for="port in scope.row.port" :key="port.id">
                      <div class="port-info">
                        <div class="port-label">端口名称:</div>
                        <div class="port-value">{{ port.portName }}</div>
                      </div>
                      <div class="port-info">
                        <div class="port-label">状态:</div>
                        
                          <i v-if="port.state === 200" class="el-icon-success" style="color:green;"></i>
                          <i v-else-if="port.state === 0" class="el-icon-warning" style="color:yellow;"></i>
                          <i v-else class="el-icon-info" style="color:red;"></i>
                        
                      </div>
                    </div>
                </template>
              </el-table-column>
              <el-table-column prop="" label="功能" > 
               
                <template slot-scope="scope">
                  <el-button type="primary" size="mini" @click="navigateToContainer(scope.row.id)">容器</el-button>
                </template>
                
                
              </el-table-column>
            </el-table>
  
          </div>
  
          
       
      </el-row>
    
      
    </div>
    
  </template>
  
  <style scoped lang="less">

.port-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.port-info {
  display: flex;
  margin-right: 10px;
}

.port-label {
  font-weight: bold;
  margin-right: 5px;
}

.port-value {
  color: gray;
}
  </style>
  <script>
  
  
  import axios from 'axios'
  
  export default {
    data() {
      return {
        tableData: [],
       
      };
    },
    methods: {
      navigateToContainer(id) {
        this.$router.push('/device' + id)
      },
    },
    mounted(){
     axios.get('http://192.168.1.108:8081/device?detail=true').then((res)=>{
       this.tableData = res.data.data
     })
    },
   
    
       
  }
   
  
  </script>
  
  