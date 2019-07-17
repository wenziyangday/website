<template>
    <div class="column-manage">
        <div class="sub-col-cm">
            <el-form :inline="true" size="small">
                <el-form-item style="margin-bottom: 0;">
                    表格筛选
                </el-form-item>
            </el-form>
            <div class="show-cm">
                <div v-if="!openTakeUp" @click="openTakeUp = true">
                    展开
                    <el-tooltip class="item" content="展开搜索条件" placement="top">
                        <i class="iconfont icon-zhankai"></i>
                    </el-tooltip>

                </div>
                <div v-else @click="openTakeUp = false">
                    收起
                    <el-tooltip effect="dark" content="收起搜索条件" placement="top">
                        <i class="iconfont icon-shouqi01"></i>
                    </el-tooltip>

                </div>
            </div>
        </div>
        <div class="form-cm">
            <el-form :inline="true" :model="formInline" size="small" label-width="100px">
                <el-form-item label="内容标题:">
                    <el-input v-model="formInline.title" placeholder="标题"></el-input>
                </el-form-item>
                <el-form-item label="内容状态:">
                    <el-select v-model="formInline.state" placeholder="选择状态">
                        <el-option :label="item.label" :value="item.val" v-for="(item, index) in $enums.state"
                                   :key="index"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="创建时间:" v-show="openTakeUp">
                    <el-date-picker
                        v-model="formInline.createTime"
                        type="date"
                        placeholder="选择日期">
                    </el-date-picker>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary">查询</el-button>
                    <el-button type="reset">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
        <div class="opt-cm">
            <el-form :inline="true" size="small" label-width="100px">
                <el-row>
                    <el-col :span="16">
                        <el-button type="primary" size="small" @click="routerGoInfo('create')">新增</el-button>
                    </el-col>
                    <el-col :span="8">
                        <div class="right-column">
                            <el-button type="primary" size="small">表格导入</el-button>
                            <el-button type="primary" size="small">数据导出</el-button>
                            <el-button type="primary" size="small">批量删除</el-button>
                        </div>
                    </el-col>
                </el-row>
            </el-form>
        </div>

        <wen-table :table-opt="tableOpt"
                   :table-data="tableData"
                   :total="total"
                   @condition="getConTable"
        >
            <template slot="custom">
                <el-table-column
                    type="selection"
                    width="35"
                    fixed="left"
                >
                </el-table-column>
                <el-table-column
                    label="操作"
                    fixed="left"
                    width="400"
                >
                    <template slot-scope="scope">
                        <el-button type="primary" size="mini" @click="routerGoInfo('look', scope.row)">查看</el-button>
                        <el-button type="primary" size="mini" @click="routerGoInfo('edit', scope.row)">编辑</el-button>
                        <el-button type="primary" size="mini" @click="deleteItems(scope.row)">删除</el-button>
                        <el-button type="primary" size="mini" @click="updateState({_id: scope.row._id, state: 999})">
                            更新状态
                        </el-button>
                    </template>
                </el-table-column>
            </template>
        </wen-table>
        <el-row>
            <slot>功能区块：筛选数据、新增数据、删除、导入、导出</slot>
        </el-row>
    </div>
</template>

<script>
    const basePagingInfo = {
        isPaging: true,
        pageNum: 0,
        pageSize: 10,
    };

    const reset = {
        subColId: '',
        subColData: [],
        formInline: {},
        totalTableCm: 0,
        selections: []
    };

    import WenTable from '../components/wenTable';

    export default {
        name: 'columnManage',
        data() {
            return {
                //  表格数据
                tableData: [],
                tableOpt: [
                    {label: '序号', prop: 'sortNum', func: '', isShow: true, width: ''},
                    {label: '标题', prop: 'infoName', func: '', isShow: true, width: ''},
                    {label: '状态', prop: 'state', func: 'state', isShow: true, width: ''},
                    {label: '创建时间', prop: 'createTime', func: 'time', isShow: true, width: ''},
                    {label: '标签组', prop: 'tags', func: '', isShow: true, width: ''},
                    {label: '缩略图', prop: 'pic', func: '', isShow: true, width: ''},
                    {label: '缩略图列表', prop: 'picsId', func: '', isShow: true, width: ''},
                    {label: '简介内容', prop: 'intro', func: '', isShow: true, width: ''},
                ],
                total: 0,
                pagingInfo: basePagingInfo,

                //  检索表单
                formInline: {},

                //  展开/收起
                openTakeUp: false,

                selections: []
            }
        },
        computed: {
            currentPage() {
                return this.pagingInfo.pageNum + 1;
            }
        },
        components: {
            WenTable
        },
        methods: {
            query(params) {
                let newOne = {...params, isPaging: true};
                this.$api.info.fetch(newOne).then(res => {
                    this.tableData = res.data;
                    this.total = res.total;
                })
            },

            getConTable(val) {
                let {_id} = this.$route.query;

                console.log(val);
                this.query({...val, pId: _id});
            },

            routerGoInfo(type, row = {}) {

                //  pId是栏目id  _id是信息id
                let pId = this.$route.query._id;
                let {_id} = row;
                this.$router.push({
                    name: 'addInfo',
                    query: {
                        type: type,
                        pId,
                        _id
                    }
                })
            },
        },
        activated() {
            this.formInline = {};
            let {_id} = this.$route.query;
            this.query({pId: _id});
        },
        watch: {
            '$route'(newValue, oldValue) {
                console.log(newValue);
                if (newValue) {
                    this.formInline = {};
                    this.selections = [];
                    let {_id} = this.$route.query;
                    this.query({pId: _id});
                }
            }
        },
    }
</script>
<style lang="stylus" type="text/stylus">
    .column-manage
        .table-cm
            margin-bottom 0.9rem
        .pagination-cm
            display flex
            justify-content flex-end

        .form-cm
            margin-bottom 0.9rem
            border-bottom 1px solid #f2f2f2

            .el-select-dropdown + .el-popper
                width 100%
                background #555555
        .opt-cm
            margin-bottom 1rem

        .sub-col-cm
            display flex
            align-items center
            justify-content space-between
            margin-bottom 0.9rem

            .show-cm
                display inline-flex
                align-items center
                margin-left 0.3rem
                cursor pointer

        .right-column
            display flex
            position relative
            justify-content flex-end

        .cu
            display flex

            div
                flex 1
</style>
