<template>
    <div>
        <el-container>
            <el-aside width="200px">
                <side-bar></side-bar>
            </el-aside>
            <el-container>
                <el-header>
                  <nav-bar></nav-bar>
                </el-header>
                <el-main>
                  <app-main></app-main>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import {NavBar,AppMain,SideBar} from '../Layout/Compoents/index'

export default {
  name:"layout",
  components:{
    NavBar,
    AppMain,
    SideBar
  }
}
</script>

<style>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 1600px;
  }
  
  body > .el-container {
    margin-bottom: 10px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>