<template>
  <div class="sidebarItem">
    sidebarItem
    <div>
      <router-link to="/basicConfig">基本设置</router-link>
      <router-link to="/addColumn">新增栏目</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'sidebarItem',
    data() {
      return {
        sidebarData: this.$router.options.routes[1].children
      }
    },
    methods: {},
    mounted() {
      // todo 栏目渲染到页面
      console.table(this.$router.options.routes);
    }
  }
</script>

<style lang="stylus" type="text/stylus">
  .sidebarItem
    height 2.4rem
    line-height 2.4rem
</style>
