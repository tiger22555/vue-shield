<template>
    <div>
     
      <el-row>
        <el-col :span="16">
          <div class="grid-content bg-purple">
  
            <el-table :data="tableData" stripe   @row-click="handleRowClick"  style="width: 100%;">
              <el-table-column prop="id" label="编号" > </el-table-column>
              <el-table-column prop="deviceName" label="名称" > </el-table-column>
              <el-table-column prop="description" label="描述" > </el-table-column>
              <el-table-column prop="ip" label="ip" > </el-table-column>
              <el-table-column prop="state" label="状态" > 
                <template slot-scope="scope">
                  <i v-if="scope.row.state === 0" class="el-icon-success" style="color:green;"></i>
                  <i v-else-if="scope.row.state === 1" class="el-icon-warning" style="color:yellow;"></i>
                  <i v-else class="el-icon-info" style="color:red;"></i>
                </template>
              </el-table-column>
            </el-table>
  
          </div>
  
          <div class="grid-content bg-purple-light">
  
              <el-table v-if="isDropdownVisible" :data="dropdownTableData" >
                <el-table-column prop="id" label="编号" > </el-table-column>
                <el-table-column prop="containerName" label="容器名称" > </el-table-column>
                <el-table-column prop="description" label="描述" > </el-table-column>
                <el-table-column prop="agentName" label="名称" > </el-table-column>
                <el-table-column prop="ip" label="ip" > </el-table-column>
                <el-table-column prop="agentState" label="状态"> 
                  <template slot-scope="scope">
                    <i v-if="scope.row.agentState === 0" class="el-icon-success" style="color:green;"></i>
                    <i v-else-if="scope.row.agentState === 1" class="el-icon-warning" style="color:yellow;"></i>
                    <i v-else class="el-icon-info" style="color:red;"></i>
                  </template>
                </el-table-column>
                <el-table-column prop="" label="功能" > </el-table-column>
              </el-table>
  
          </div>
        </el-col>
        
        <el-col :span="8">
          
        </el-col>
        
      </el-row>
    
      
    </div>
    
  </template>
  
  <style scoped lang="less">
  </style>
  <script>
  
  
  import axios from 'axios'
  
  export default {
    data() {
      return {
        tableData: [],
        isDropdownVisible: false,
        dropdownTableData: [],
        selectedRowIndex: -1
      };
    },
    
    mounted(){
     axios.get('http://192.168.1.108:8081/device').then((res)=>{
       this.tableData = res.data.data
     })
    },
    methods:{
      handleRowClick(row) {
        this.isDropdownVisible = true;
        this.loadDropdownData(row.id);   
       
      },
   
      loadDropdownData(id) {
        const url = `http://192.168.1.108:8081/container?deviceId=${id}`;
        axios.get(url)
          .then((res) => {
            this.dropdownTableData = res.data.data;
          })
        },
  
     
    },   
       
  }
   
  
  </script>
  
  