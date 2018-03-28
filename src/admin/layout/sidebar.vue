<template>
  <div class="sidebar">
    <div class="logo">
      <span>W</span>&emsp;Logo
    </div>
    <div class="column-sidebar">
      <SidebarItem></SidebarItem>
    </div>
  </div>
</template>

<script>
  import SidebarItem from './sidebarItem';

  export default {
    name: 'sidebar',
    components: {
      SidebarItem
    }
  }
</script>

<style lang="stylus" type="text/stylus">
  .sidebar
    position fixed
    left 0
    width 15rem
    height 100%
    background #000000
    color #ffffff
    .logo
      height 3.2rem
      line-height 3.2rem
      span
        display inline-block
        width 3.2rem
        text-align center
      img
        vertical-align middle
</style>
