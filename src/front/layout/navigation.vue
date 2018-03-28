<template>
	<div class="navigation">
    <div class="wrap">
      <router-link to="/homeOne">A</router-link>
      <router-link to="/homeTwo">B</router-link>
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
    a
      color #ffffff
</style>
