<template>
    <div class="table">
        <el-table>
            <slot name="opt"></slot>
            <el-table-column></el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: "table",
        data() {
            return {
                data: [
                    {
                        name: '张三',
                        sex: '男',
                        age: 30
                    },
                    {
                        name: '李四',
                        sex: '女',
                        age: 28
                    },
                    {
                        name: '王五',
                        sex: '男',
                        age: 18
                    },
                    {
                        name: '网二',
                        sex: '女',
                        age: 28
                    }
                ]
            }
        },
    }
</script>

<style lang="stylus" type="text/stylus" scoped>

</style>
