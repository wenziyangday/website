<template>
  <div class="breadcrumb">
    <span class="switch"><i class="fa fa-bars fa-size cursor-pointer" @click="switchSidebar"></i></span> {{title}}
  </div>
</template>

<script>
  export default {
    name: 'breadcrumb',
    data() {
      return {
        title: ''
      }
    },
    methods: {
      switchSidebar() {
        console.log('switchSidebar, 同时还要考虑浏览器窗口改变的时候');
      },
      getRouteTitle() {
        this.title = this.$route.meta.title;
      }
    },
    mounted() {
      this.title = this.$route.meta.title;
    },
    watch: {
      '$route': 'getRouteTitle'
    }
  }
</script>

<style lang="stylus" type="text/stylus">
  .breadcrumb
    display flex
    height 3.2rem
    align-items center
    background #ffffff
    .switch
      width 3.2rem
      text-align center
      .fa-size
        font-size 1.6rem
</style>
