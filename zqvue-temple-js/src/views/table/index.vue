<template>
  <div>
      table页面{{sideber.opened}}
      and {{sidebar1.opened}}
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed:{
    ...mapGetters([
      'sideber'
    ]),
      sidebar1() {
      return this.$store.state.app.sideber
    }
  }
}
</script>

