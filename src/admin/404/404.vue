<template>
    <div class="error">
        <div class="err-No">404</div>
        <div class="err-button">
            <el-button type="text">返回首页</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'error'
    }
</script>

<style lang="stylus" type="text/stylus">
    .error
        display flex
        width 100%
        align-items center
        justify-content center
        flex-direction column

        .err-No
            color #000
            font-size 15rem

        .err-button
            margin-bottom 8rem

</style>
