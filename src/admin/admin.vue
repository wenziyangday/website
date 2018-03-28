<template>
  <div class="admin">
    <Sidebar></Sidebar>
    <div class="admin-container">
      <Breadcrumb></Breadcrumb>
      <div class="router-switch">
        <router-view name="admin"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import Sidebar from './layout/sidebar';
  import Breadcrumb from './layout/breadcrumb';
  
  export default {
    name: 'admin',
    components: {
      Sidebar,
      Breadcrumb
    }
  }
</script>

<style lang="stylus" type="text/stylus">
  .admin
    width 100%
    min-height 100%
    background #f0f2f5
    .admin-container
      position relative
      min-height 100%
      margin-left 15rem
      .router-switch
        margin 0.8rem
        padding 1.6rem
        background #fff
</style>
