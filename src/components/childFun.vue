<template>
    <div class="childFun">
        childFun
        <button @click="emitToFather">点击传输给父级组件</button>
    </div>
</template>

<script>
    export default {
        name: 'childFun',
        methods: {
            emitToFather() {
                this.$emit('childMethod', '变量');
            }
        }
    }
</script>

<style lang="stylus">
    .child
        font-face-src
</style>
