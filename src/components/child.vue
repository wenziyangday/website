<template>
	<div class="child">
    child
    <button @click="emitToFather">点击传输给父级组件</button>
	</div>
</template>

<script>
	export default {
		name: 'child',
    methods: {
		  emitToFather() {
		    this.$emit('getEmitToFather', '传输给父级组件的东西');
      }
    }
	}
</script>

<style lang="stylus">
  .child
    font-face-src
</style>
