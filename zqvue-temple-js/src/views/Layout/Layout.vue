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

</style>