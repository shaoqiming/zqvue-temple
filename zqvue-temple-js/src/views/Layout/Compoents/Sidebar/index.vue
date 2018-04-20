<template>
  <div>
    <el-row class="tac">
      <el-col :span="12">

      </el-col>
    </el-row>

  </div>
</template>

<script>
export default {
  computed:{
    routes(){
      return this.$routes.options.routes;
    }
  }
};
</script>
