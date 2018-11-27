<template>
    <div class="columnManage">
        <div class="sub-col-cm">
            <el-form :inline="true" size="small">
                <el-form-item>
                    <el-button type="primary" @click="routerGoSub">新增子栏目</el-button>
                </el-form-item>
            </el-form>
        </div>

        <div class="form-cm">
            <el-form :inline="true" :model="formInline" size="small">
                <el-form-item label="内容标题:">
                    <el-input v-model="formInline.user" placeholder="标题"></el-input>
                </el-form-item>
                <el-form-item label="内容状态：">
                    <el-select v-model="formInline.region" placeholder="选择状态">
                        <el-option label="置顶" value="1"></el-option>
                        <el-option label="正常" value="0"></el-option>
                        <el-option label="禁用" value="-1"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="创建时间：" v-if="openTakeUp">
                    <el-input v-model="formInline.user" placeholder="创建时间"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="queryCm">查询</el-button>
                    <el-button type="reset">重置</el-button>
                    <div class="show-cm">
                        <div v-if="!openTakeUp" @click="openTakeUp = true">展开 <i class="iconfont icon-zhankai"></i>
                        </div>
                        <div v-else @click="openTakeUp = false">收起 <i class="iconfont icon-shouqi01"></i></div>
                    </div>
                </el-form-item>
            </el-form>
        </div>

        <div class="opt-cm">
            <el-form :inline="true" size="small">
                <el-row>
                    <el-col :span="16">
                        <el-form-item label="选子栏目:" v-if="subColData.length > 0">
                            <el-select v-model="subColId" placeholder="请选择">
                                <el-option
                                    v-for="item in subColData"
                                    :key="item._id"
                                    :label="item.columnName"
                                    :value="item._id">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" size="small" @click="routerGoInfo">新增栏目所属信息</el-button>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <div class="right-column">
                            <el-form-item>
                                <el-button type="primary" size="small">表格导入</el-button>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary" size="small">数据导出</el-button>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary" size="small">批量删除</el-button>
                            </el-form-item>
                        </div>
                    </el-col>
                </el-row>
            </el-form>

        </div>

        <div class="table-cm">
            <el-table
                :data="tableData"
                :border="true"
                :fit="false"
                style="width: 100%">
                <el-table-column
                    type="selection"
                    width="35"
                >
                </el-table-column>
                <el-table-column
                    label="操作"
                    width="400"
                >
                    <template slot-scope="scope">
                        <el-button type="primary" size="mini">查看</el-button>
                        <el-button type="primary" size="mini">编辑</el-button>
                        <el-button type="primary" size="mini">删除</el-button>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="date"
                    label="标题"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="状态"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="创建时间"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="标签组"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="所属栏目"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="缩略图"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="缩略图列表"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="address"
                    show-overflow-tooltip
                    width="400"
                    label="简介内容">
                </el-table-column>
            </el-table>
        </div>

        <div class="pagination-cm">
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPageTableCm"
                :page-sizes="perPageSizeCm"
                :page-size="pageSizeCm"
                layout="total, sizes, prev, pager, next, jumper"
                :total="totalTableCm">
            </el-pagination>
        </div>

        <el-row>
            <slot>功能区块：筛选数据、新增数据、删除、导入、导出</slot>
        </el-row>
    </div>
</template>

<script>
    import {columnGet} from '../../api/admin';

    export default {
        name: 'columnManage',
        components: {},
        data() {
            return {
                subColId: '',
                subColData: [],
                formInline: {},
                openTakeUp: false,
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }],
                currentPageTableCm: 0,
                pageSizeCm: 30,
                perPageSizeCm: [100, 200, 300, 400],
                totalTableCm: 100
            }
        },
        methods: {
            routerGoSub() {
                this.$router.push({
                    name: 'addColumn',
                    query: {parent_id: this.$route.query._id || ''}
                })
            },

            //    获取子栏目
            _columnGet(obj) {
                columnGet(obj).then(res => {
                    if (res.code === 200) {
                        this.subColData = res.data;
                    }
                })
            },

            //    筛选列表
            queryCm() {
            },

            //    分页相关
            handleSizeChange() {
            },
            handleCurrentChange() {
            },

            //    增加栏目所属信息
            routerGoInfo() {
                if (this.subColId) {
                    this.$router.push({
                        name: 'addInfo',
                        query: {
                            infoId: this.subColId,
                            columnId: this.$route.query._id
                        }
                    })
                } else {
                    this.$message({
                        type: 'warning',
                        message: '请选择一个栏目进行信息添加。'
                    });
                }
            }
        },
        mounted() {
            let obj = {
                parentId: this.$route.query._id
            };
            this._columnGet(obj);
        },
        watch: {
            '$route'(newValue, oldValue) {
                //  当切换路由时需要将页面的状态初始化
                this.subColData = [];
                this.subColId = '';

                let obj = {
                    parentId: newValue.query._id
                };
                this._columnGet(obj);
            }
        },
    }
</script>

<style lang="stylus" type="text/stylus">
    .columnManage
        .table-cm
            margin-bottom 0.9rem
        .pagination-cm
            display flex
            justify-content flex-end
        .form-cm
            margin-bottom 0.9rem
            border-bottom 1px solid #f2f2f2
        .show-cm
            display inline-flex
            align-items center
            margin-left 0.3rem
        .right-column
            display flex
            justify-content flex-end
        .cu
            display flex
            div
                flex 1
</style>
