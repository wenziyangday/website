<template>
  <div class="home">
    <div class="">
      <Logo></Logo>
      <Navigation></Navigation>
      <div class="wrap">
        <el-row :gutter="60">
          <el-col :span="20">
            <router-view name="home"></router-view>
          </el-col>
          <el-col :span="4">
            其他栏目
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
  import Logo from './layout/logo';
  import Navigation from './layout/navigation';
  
  export default {
    name: 'home',
    components: {
      Navigation, Logo
    }
  }
</script>

<style lang="stylus" type="text/stylus">
  .home
    width 100%
</style>
