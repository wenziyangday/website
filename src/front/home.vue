<template>
  <div class="home">
    <div class="">
      <Logo></Logo>
      <Navigation></Navigation>
      <div class="wrap">
        <el-row :gutter="32" class="home-container">
          <el-col :span="18">
            <router-view name="home"></router-view>
          </el-col>
          <el-col :span="6">
            <HomeSidebar></HomeSidebar>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
  import Logo from './layout/logo';
  import Navigation from './layout/navigation';
  import HomeSidebar from './homeDefault/homeSidebar';

  export default {
    name: 'home',
    components: {
      Navigation, Logo, HomeSidebar
    },
    mounted() {
      window.onscroll = function () {
        const top = document.documentElement.scrollTop || document.body.scrollTop;
        if (top > 200) {
          // console.log(this);
        //  todo 计划是滚动固定导航条以及右侧的栏目
        }
      }
    }
  }
</script>

<style lang="stylus" type="text/stylus">
  .home
    width 100%
    .home-container
      margin 1.2rem 0
</style>
