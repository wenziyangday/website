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
                    <el-input v-model="formInline.title" placeholder="标题"></el-input>
                </el-form-item>
                <el-form-item label="内容状态：">
                    <el-select v-model="formInline.state" placeholder="选择状态">
                        <el-option label="置顶" value="1"></el-option>
                        <el-option label="正常" value="0"></el-option>
                        <el-option label="禁用" value="-1"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="创建时间：" v-show="openTakeUp">
                    <el-date-picker
                        v-model="formInline.createTime"
                        type="date"
                        placeholder="选择日期">
                    </el-date-picker>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="queryCm">查询</el-button>
                    <el-button type="reset" @click="resetForm">重置</el-button>
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
                            <el-button type="primary" size="small" @click="routerGoInfo('add')">新增栏目所属信息</el-button>
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
                size="mini"
                style="width: 100%">
                <el-table-column
                    type="selection"
                    width="35"
                >
                </el-table-column>
                <el-table-column
                    label="操作"
                    width="300"
                >
                    <template slot-scope="scope">
                        <el-button type="primary" size="mini" @click="routerGoInfo('look', scope.row)">查看</el-button>
                        <el-button type="primary" size="mini" @click="routerGoInfo('edit', scope.row)">编辑</el-button>
                        <el-button type="primary" size="mini" @click="deleteItem(scope.row)">删除</el-button>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="title"
                    label="标题"
                    width="180"
                    show-overflow-tooltip
                >
                </el-table-column>
                <el-table-column
                    prop="state"
                    label="状态"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="createTime"
                    label="创建时间"
                    width="180">
                    <template slot-scope="scope">
                        {{$util.formatTime(scope.row.createTime)}}
                    </template>
                </el-table-column>
                <el-table-column
                    prop="tags"
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
                    prop="intro"
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
    export default {
        name: 'columnManage',
        components: {},
        data() {
            return {
                subColId: '',
                subColData: [],
                formInline: {},
                openTakeUp: false,
                tableData: [],
                tableOpt: [
                    {label: '', prop: '', func: ''}
                ],
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
                    query: {parentColumnId: this.$route.query.baseClassId || ''}
                })
            },

            //    获取子栏目
            _columnGet(obj) {
                this.$alls.admin.columnGet(obj).then(res => {
                    if (res.code === 200) {
                        this.subColData = res.data;
                    }
                })
            },

            //    获取信息
            _infoGet(obj) {
                this.$alls.admin.infoGet(obj).then(res => {
                    if (res.code === 200) {
                        this.tableData = res.data;
                    }
                });
            },

            //    筛选列表
            queryCm() {
                this._infoGet(this.formInline);
            },

            //  重置
            resetForm() {
                this.formInline = {};
            },

            //    分页相关
            handleSizeChange() {
            },
            handleCurrentChange() {
            },

            //    增加栏目所属信息
            routerGoInfo(type, obj = {}) {
                let {baseClassId} = this.$route.query;
                switch (type) {
                    case 'add':
                        if (this.subColId) {
                            this.routerGo({baseClassId, type, subClassId: this.subColId});
                        } else {
                            this.$message({
                                type: 'warning',
                                message: '请选择一个栏目进行信息添加。'
                            });
                        }
                        break;
                    case 'edit':
                    case 'look':
                        this.routerGo({baseClassId, type, detailId: obj._id});
                        break;
                    default:
                        console.log('超出操作');
                        break;
                }
            },

            routerGo(query) {
                this.$router.push({
                    name: 'addInfo',
                    query: query
                })
            },

            deleteItem(obj) {
                let {_id} = obj;
                this.$alls.admin.infoDelete({_id}).then(res => {
                    console.log(res);
                    this._infoGet();
                })
            }
        },
        activated() {
            this.subColData = [];
            this.subColId = '';
            this.formInline = {};
            let obj = {
                parentId: this.$route.query.baseClassId
            };
            this._columnGet(obj);
            this._infoGet();
        }
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
            position relative
            right -10px
            justify-content flex-end
        .cu
            display flex
            div
                flex 1
</style>
