<template>
	<div class="breadcrumb">
    <span class="switch"><i class="fa fa-bars fa-size cursor-pointer" @click="switchSidebar"></i></span> breadcrumb 涉及到到的内容有 面包屑导航 、用户中心
	</div>
</template>

<script>
	export default {
		name: 'breadcrumb',
    methods: {
		  switchSidebar() {
		    console.log('switchSidebar, 同时还要考虑浏览器窗口改变的时候');
      }
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
