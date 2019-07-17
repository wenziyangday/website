<!--后台功能组件预览-->

<template>
    <div class="blockFun">
        <wen-menu></wen-menu>
        <wen-table :tableOpt="tableOpt" :tableData="[]" :paginationInfo="{}"></wen-table>


        <KindEditor id="wen"></KindEditor>
        <DyForm>
            <div slot="table">
                sajasdfajksdfjkasdjkfasdfasdsvfdaasfdfdssdfgsdfgdfg
            </div>
        </DyForm>

        {{dyForm}}
        <el-form :model="dyForm" label-width="120px" ref="formData">
            <el-form-item :label="item.label" :rules="item.rules" v-for="(item, index) in dyForm.form" :key="index"
                          :prop="'form.'+ index + '.value'">
                <!--{{'form.'+ index + '.value'}}-->
                <el-input v-model="item.value"></el-input>
                <el-radio-group></el-radio-group>
                <el-checkbox-group></el-checkbox-group>
                <template slot="radio">

                </template>
                <template slot="checkbox">

                </template>
                <template slot="cascader">

                </template>
                <template slot="checkbox">

                </template>

            </el-form-item>
        </el-form>

        <el-button @click="resetForm">重置</el-button>

        <!--<Quill :content="dats" @fetch="fetchData"></Quill>-->


        <h2 class="pt0">导入&&导出</h2>
        <div>
            <ImEx></ImEx>
        </div>
        <!-- <h2>富文本编辑器</h2>
		 <div>
			 <Editor ref="editors"></Editor>
		 </div>-->

        <h2>表格</h2>
        <div>
            <TableFun @tableHead="tableHead"></TableFun>
        </div>


        <h2>条件选择器</h2>

        <el-upload
            class="upload-demo"
            action="api/baseFun/upload/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            :headers="headersPost"
            multiple
            :limit="3"
            :on-exceed="handleExceed"
            :file-list="fileList">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>

        <el-dialog
            title="提示"
            :visible.sync="dialogVisible"
            width="62%"
            right
            :fullscreen="true"
        >
            <div class="inner-dialog">
                <div class="inner-part">
                    <div>这是一段信息</div>
                    <div>这是一段信息</div>
                    <div>这是一段信息</div>
                    <div>这是一段信息</div>
                    <div>这是一段信息</div>
                    <div>这是一段信息</div>
                    <div>这是一段信息</div>
                    <div>这是一段信息</div>
                    <div>这是一段信息</div>
                    <div>这是一段信息</div>
                    <div>这是一段信息</div>
                    <div>这是一段信息</div>
                    <div>这是一段信息</div>
                    <div>这是一段信息</div>
                    <div>这是一段信息</div>
                    <div>这是一段信息</div>
                    <div>这是一段信息</div>
                    <div>这是一段信息</div>
                    <div>这是一段信息</div>
                    <div>这是一段信息</div>
                    <div>这是一段信息</div>
                    <div>这是一段信息</div>
                    <div>这是一段信息</div>
                    <div>这是一段信息</div>
                    <div>这是一段信息</div>
                    <div>这是一段信息</div>
                    <div>这是一段信息</div>
                    <div>这是一段信息</div>
                    <div>这是一段信息</div>
                    <div>这是一段信息</div>
                    <div>这是一段信息</div>
                    <div>这是一段信息</div>
                    <div>这是一段信息</div>
                    <div>这是一段信息</div>
                    <div>这是一段信息</div>
                    <div>这是一段信息</div>
                    <div>这是一段信息</div>
                    <div>这是一段信息</div>
                    <div>这是一段信息</div>
                    <div>这是一段信息</div>
                    <div>这是一段信息</div>
                    <div>这是一段信息</div>
                    <div>这是一段信息</div>
                    <div>这是一段信息</div>
                    <div>这是一段信息</div>
                    <div>这是一段信息</div>
                    <div>这是一段信息</div>
                    <div>这是一段信息</div>
                    <div>这是一段信息</div>
                    <div>这是一段信息</div>
                    <div>这是一段信息</div>
                    <div>这是一段信息</div>
                    <div>这是一段信息</div>
                    <div>这是一段信息</div>
                    <div>这是一段信息</div>
                    <div>这是一段信息</div>
                    <div>这是一段信息</div>
                    <div>这是一段信息</div>
                    <div>这是一段信息</div>
                    <div>这是一段信息</div>
                    <div>这是一段信息</div>
                    <div>这是一段信息</div>
                    <div>这是一段信息</div>
                    <div>这是一段信息</div>
                    <div>这是一段信息</div>
                    <div>这是一段信息</div>
                    <div>这是一段信息</div>
                    <div>这是一段信息</div>
                    <div>这是一段信息</div>
                    <div>这是一段信息</div>
                    <div>这是一段信息</div>
                    <div>这是一段信息</div>
                    <div>这是一段信息</div>
                    <div>这是一段信息</div>
                    <div>这是一段信息</div>
                    <div>这是一段信息</div>
                    <div>这是一段信息</div>
                    <div>这是一段信息</div>
                    <div>这是一段信息</div>
                    <div>这是一段信息</div>
                    <div>这是一段信息</div>
                    <div>这是一段信息</div>
                    <div>这是一段信息</div>
                    <div>这是一段信息</div>
                    <div>这是一段信息</div>
                    <div>这是一段信息</div>
                    <div>这是一段信息</div>
                    <div>这是一段信息</div>
                    <div>这是一段信息</div>
                    <div>这是一段信息</div>
                    <div>这是一段信息</div>
                    <div>这是一段信息</div>
                    <div>这是一段信息</div>
                    <div>这是一段信息</div>
                    <div>这是一段信息</div>
                    <div>这是一段信息</div>
                    <div>这是一段信息</div>
                    <div>这是一段信息</div>
                    <div>这是一段信息</div>
                    <div>这是一段信息</div>
                    <div>这是一段信息</div>
                </div>
            </div>
            <div slot="footer" class="dialog-footer">
                <el-button size="small" @click="dialogVisible = false">取 消</el-button>
                <el-button size="small" type="primary" @click="dialogVisible = false">确 定</el-button>
            </div>
        </el-dialog>

    </div>
</template>

<script>

    const form = {
        form: [
            {label: '姓名', model: 'name', value: '', rules: [], data: [], type: 'input'},
            {label: '标题', model: 'title', value: '', rules: [], data: [], type: 'input'},
            {label: '性别', model: 'sex', value: '', rules: [], data: [], type: 'input'},
            {label: '年龄', model: 'age', value: '', rules: [], data: [], type: 'input'},
        ]
    };

    import ImEx from '../components/imEx';
    import Editor from '../components/editor';
    import TableFun from '../components/tableFun';
    import Quill from '../components/quill';
    import KindEditor from '../components/kindEditor';

    import DyForm from '../components/dyForm';
    import WenMenu from '../components/wenMenu';
    import WenTable from '../components/wenTable';


    export default {
        name: "blockFun",
        data() {
            return {
                dialogVisible: false,
                headersPost: {'content-type': 'multipart/form-data'},
                fileList: [],
                test: '<p>test</p>',
                tableOpt: [
                    {label: '门店名称', prop: 'storeName', func: ''},
                    {label: '门店来源', prop: 'saleClueFrom', func: 'storeSource'},
                    {label: '所在区域', prop: 'tradeLocal', func: ''},
                    {label: '所属商圈', prop: 'tradeName', func: ''},
                    {label: '详细地址', prop: 'storeAddress', func: ''},
                    {label: '联系人', prop: 'linkman', func: ''},
                    {label: '联系电话', prop: 'phone', func: ''},
                    {label: '上级指派人', prop: 'assignedByName', func: ''},
                    {label: '上级指派时间', prop: 'assignedTime', func: 'time'},
                    {label: '最后跟踪人', prop: 'lastFollowBy', func: ''},
                    {label: '最后跟踪时间', prop: 'lastFollowTime', func: 'time'},
                    {label: '跟踪来源', prop: 'followFrom', func: 'followSource'},
                    {label: '是否有效', prop: 'effective', func: 'isEffective'},
                    {label: '客户意向', prop: 'followIntention', func: ''},
                    {label: '跟踪内容', prop: 'followContent', func: ''},
                    {label: '目标', prop: 'saleAim', func: ''},
                    {label: '老板年龄', prop: 'bossAge', func: ''},
                    {label: '性别', prop: 'bossSex', func: 'sex'},
                    {label: '从业年限', prop: 'bossWorkAge', func: ''},
                    {label: '设计需求', prop: 'demandDesign', func: 'isNeed'},
                    {label: '工具需求', prop: 'demandToolList', func: ''},
                    {label: '经营需求', prop: 'demandManageList', func: ''},
                    {label: '备注', prop: 'remark', func: ''},
                    {label: '是否签单', prop: 'hasOrder', func: 'isSigned'},
                    {label: '最近签单时间', prop: 'lastOrderTime', func: 'time'},
                    {label: '最近签单人', prop: 'lastOrderBy', func: ''}
                ],




                tableHead: [
                    {label: '名称', keys: 'title'},
                    {label: '姓名', keys: 'name'},
                    {label: '性别', keys: 'sex'},
                    {label: '年龄', keys: 'age'},
                    {label: '创建日期', keys: 'createTime'},
                    {label: '操作方式', keys: 'opt'},
                ],
                tableData: [
                    {
                        title: '苹果',
                        name: 'apple',
                        sex: 'nv',
                        age: '20',
                        createTime: '2018-10-10',
                        opt: ''
                    }
                ],
                dyForm: form,
                dats: '<p>sdfgsjkldfgjklsdfjkl</p>'

            }
        },
        components: {
            ImEx, Editor, TableFun, KindEditor, Quill, DyForm, WenMenu, WenTable
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },

            fetchData(val) {
                this.dats = val
            },


            resetForm() {
                this.$refs['formData'].resetFields();
            },


            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePreview(file) {
                console.log(file);
            },
            handleExceed(files, fileList) {
                this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
            },
            beforeRemove(file, fileList) {
                return this.$confirm(`确定移除 ${file.name}？`);
            },

            catchData(value) {
                this.test = this.$ref.editors.emitToParent()
            }
        },
    }
</script>

<style scoped>
    h2 {
        font-weight: bold;
        font-size: 1rem;
        padding: 1rem 0;
    }

    .pt0 {
        padding-top: 0;
    }

    .inner-dialog {
        max-height: calc(100vh - 136px);
        overflow-y: auto;
    }
</style>
