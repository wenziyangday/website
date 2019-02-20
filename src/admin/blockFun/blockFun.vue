<!--后台功能组件预览-->

<template>
    <div class="blockFun">
        <h2 class="pt0">导入&&导出</h2>
        <div>
            <ImEx></ImEx>
        </div>
        <h2>富文本编辑器</h2>
        <div>
            <Editor ref="editors"></Editor>
        </div>

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

    </div>
</template>

<script>
    import ImEx from '../components/imEx';
    import Editor from '../components/editor';
    import TableFun from '../components/tableFun';
    import KindEditor from '../components/kindEditor';

    export default {
        name: "blockFun",
        data() {
            return {
                headersPost: {'content-type': 'multipart/form-data'},
                fileList: [],
                test: '<p>test</p>',
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
                ]
            }
        },
        components: {
            ImEx, Editor, TableFun, KindEditor
        },
        methods: {
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
                return this.$confirm(`确定移除 ${ file.name }？`);
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
</style>
