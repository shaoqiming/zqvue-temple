<template>
  <div>
    <a @click="sudebar">222</a>
    <bread-crumb>
    </bread-crumb>
  </div>
</template>

<script>
import BreadCrumb from "../../../components/Breadcrumb";

export default {
  name:"anvbar",
  components:{
    BreadCrumb
  },
  methods:{
    sudebar(){
      this.$store.dispatch('ToggleSideBar')
    }
  }
};
</script>
