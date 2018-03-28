<template>
  <div class="sidebarItem">
    sidebarItem
  </div>
</template>

<script>
  export default {
    name: 'sidebarItem',
    mounted() {
      console.log(this.$route)
    }
  }
</script>

<style lang="stylus" type="text/stylus">
  .sidebarItem
    height 2.4rem
    line-height 2.4rem
</style>
