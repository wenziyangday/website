<template>
    <div class="wen-table">
        <el-table style="width: 100%" border :data="tableData" @selection-change="handleSelectionChange">
            <slot name="custom"></slot>
            <el-table-column
                :prop="item.prop"
                :label="item.label"
                show-overflow-tooltip
                v-for="(item, index) in tableOpt"
                width="180px"
                :key="index"
            >
                <template slot-scope="scope">
                    {{formatTd(scope.row[item.prop], item.func, item.prop)}}
                </template>
            </el-table-column>
        </el-table>
        <div class="pagination-bi">
            <el-pagination
                @size-change="handleSize"
                @current-change="handlePage"
                :current-page="currentPage"
                :page-sizes="[10, 30, 50, 70, 100, 200]"
                :page-size="paginationInfo.pageSize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="total">
            </el-pagination>
        </div>
    </div>
</template>

<script>

    export default {
        name: "wenTable",
        computed: {
            currentPage() {
                return this.paginationInfo.page + 1;
            },
        },
        props: {
            //  数据
            tableData: {
                type: Array,
                default: () => []
            },

            //  表头
            tableOpt: {
                type: Array,
                default: () => []
            },

            //  总数
            total: {
                type: Number,
                default: () => 0
            },

            //  分页信息
            paginationInfo: {
                type: Object,
                default: () => {
                    return {
                        isPaging: true,
                        pageNum: 0,
                        pageSize: 10,
                    };
                }
            }
        },
        methods: {
            //  表格字段处理 value 单元格字段值，func函数配置名，prop单元格接收值
            formatTd(value = '', func, prop = '') {
                switch (func) {
                    case '':
                        let str = value;
                        if (Array.isArray(value)) {
                            str = String(value).split(',').join('--');
                        }
                        return str;
                    case 'time':
                        return this.$util.formatTime(value, 'YYYY-MM-DD HH:mm');
                    default:
                        if (value !== null) {
                            let arr = this.$enums[func];
                            let tdToCN = this.$util.enumToCN(arr);
                            return tdToCN[value];
                        } else {
                            return '';
                        }
                }
            },

            //  每页条数改变
            handleSize(val) {
                this.paginationInfo.pageSize = val;
                this.paginationInfo.pageNum = 0;
                this.$emit('condition', this.paginationInfo);
            },

            //  当前页码改变
            handlePage(val) {
                this.paginationInfo.pageNum = val - 1;
                this.$emit('condition', this.paginationInfo);
            },

            handleSelectionChange(val) {
                this.$emit('selections', val);
            }

        },
        mounted() {

        },
    }
</script>

<style lang="stylus" type="text/stylus" scoped>
    .wen-table
        .pagination-bi
            display flex
            align-items center
            justify-content flex-end
            padding: 20px 0;
</style>
