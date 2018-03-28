<template>
	<div class="navigation">
    <div class="wrap">
      <div class="inner-navigation">
        <router-link to="/home">首页</router-link>
        <router-link to="/home">生活随笔</router-link>
        <router-link to="/home">读书笔记</router-link>
        <router-link to="/home">天涯</router-link>
        <router-link to="/home">明月</router-link>
        <router-link to="/home">归途</router-link>
        <router-link to="/home">乡愁</router-link>
      </div>
    </div>
	</div>
</template>

<script>
	export default {
		name: 'navigation'
	}
</script>

<style lang="stylus" type="text/stylus">
  .navigation
    height 2.4rem
    color #ffffff
    line-height 2.4rem
    background #000000
    .inner-navigation
      display flex
      justify-content space-between
    a
      color #ffffff
</style>
