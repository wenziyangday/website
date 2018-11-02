<template>
    <div class="columnManage">
        <el-row class="">
            <el-button type="primary" @click="routerGoSub">新增子栏目</el-button>
        </el-row>
        <el-row>
            <slot>功能区块：筛选数据、新增数据、删除、导入、导出</slot>
        </el-row>
        <el-row class="">
            <el-button type="primary">新增信息</el-button>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: 'columnManage',
        components: {},
        data() {
            return {}
        },
        methods: {
            routerGoSub() {
                this.$router.push({
                    name: 'addColumn',
                    query: this.$route.query || ''
                })
            }
        },
    }
</script>

<style lang="stylus" type="text/stylus">

</style>
