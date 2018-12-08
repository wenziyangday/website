<template>
    <div class="addInfo">
        {{infoForm}}
        <el-form :model="infoForm" ref="infoForm" label-width="100px" size="small">
            <el-form-item label="标题" prop="title">
                <el-input v-model="infoForm.title"></el-input>
            </el-form-item>
            <el-form-item label="副标题" prop="subTitle">
                <el-input v-model="infoForm.subTitle"></el-input>
            </el-form-item>
            <el-form-item label="作者" prop="author">
                <el-input v-model="infoForm.author"></el-input>
            </el-form-item>
            <el-form-item label="状态" prop="state">
                <el-radio-group v-model="infoForm.state">
                    <el-radio :label="0">显示</el-radio>
                    <el-radio :label="1">置顶</el-radio>
                    <el-radio :label="-1">隐藏</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="标签" prop="tags">
                <el-select v-model="infoForm.tags" placeholder="请选择信息所属标签~~">
                    <el-option
                        v-for="item in tagsOptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    >
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="信息图片" prop="infoPic">
                <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/"
                           :show-file-list="false"
                >
                    <img v-if="infoForm.infoPic" :src="infoForm.infoPic" class="avatar"> <i v-else
                                                                                            class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
            </el-form-item>
            <el-form-item label="信息简介" prop="intro">
                <el-input type="textarea" v-model="infoForm.intro" :rows="8"></el-input>
            </el-form-item>
            <el-form-item label="详细内容" prop="content">
                <Editor :catchData="getEdCon"></Editor>
            </el-form-item>

            <el-form-item label="备注" prop="remarks">
                <el-input type="textarea" v-model="infoForm.remarks" :rows="8"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="submitForm('infoForm')">立即创建</el-button>
                <el-button @click="cancelForm">取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import Editor from '../components/editor';

    export default {
        name: 'addInfo',
        data() {
            return {
                infoForm: {
                    state: 0,
                    infoDetail: ''
                },
                rules: {
                    columnName: [{required: true, message: '栏目名称'}],
                    intro: [{required: false, message: '文字说明', min: 10, max: 100}],
                },
                tagsOptions: [
                    {
                        value: '选项1',
                        label: '黄金糕'
                    }, {
                        value: '选项2',
                        label: '双皮奶',
                        disabled: true
                    }, {
                        value: '选项3',
                        label: '蚵仔煎'
                    }, {
                        value: '选项4',
                        label: '龙须面'
                    }, {
                        value: '选项5',
                        label: '北京烤鸭'
                    }
                ],
            }
        },
        components: {
            Editor
        },
        methods: {
            submitForm(formName) {
                let {subClassId, baseClassId} = this.$route.query;
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$alls.admin.infoPost({...this.infoForm, ...{subClassId, baseClassId}}).then(res => {
                            if (res.code === 200) {
                                this.$message({
                                    type: 'success',
                                    message: res.message
                                })
                            }
                        });
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },

            getEdCon(data) {
                this.infoForm.infoDetail = data;
            },

            cancelForm() {
                this.$router.go(-1);
            }
        },
        mounted() {
        }
    }
</script>

<style lang="stylus" type="text/stylus">

</style>
