<template>
    <!--基础啊设置-->
    <div class="basicConfig">
        <el-form :model="form" :rules="rules" ref="form" label-width="100px" size="small">
            <el-form-item label="用户名" prop="name">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="昵称" prop="nick">
                <el-input v-model="form.nick"></el-input>
            </el-form-item>
            <el-form-item label="邮箱" prop="email">
                <el-input v-model="form.email"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="form.password"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="confirmPassword">
                <el-input v-model="form.confirmPassword"></el-input>
            </el-form-item>
            <el-upload
                class="upload-demo"
                action=""
                :http-request="uploadPic"
                :withCredentials="true"
            >
                <el-button size="small" type="primary">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
            <!--<el-form-item label="meta简述" prop="meta">
				<el-input type="textarea" v-model="form.meta" :rows="8"></el-input>
			</el-form-item>-->
            <!--<el-form-item label="版权信息" prop="copyright">
				<el-input type="textarea" v-model="form.copyright" :rows="8"></el-input>
			</el-form-item>
			<el-form-item label="网站简述" prop="websiteInfo">
				<el-input type="textarea" v-model="form.websiteInfo" :rows="8"></el-input>
			</el-form-item>
			<el-form-item label="网站地图" prop="websiteMap">
				<el-input type="textarea" v-model="form.websiteMap" :rows="8"></el-input>
			</el-form-item>-->
            <el-form-item>
                <el-button type="primary" @click="submitForm('form')">提交</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: 'basicConfig',
        data() {
            return {
                form: {},
                fileList: [],
                rules: {
                    name: [{required: true, message: '网站名称'}]
                }
            }
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$api.base.createBaseInfo(this.form).then(res => {
                            console.log(res);
                        })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
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
            async uploadPic(params) {
                console.log(params.file);
                let a = await this.$api.base.uploadPic(params.file);
                console.log(a);
            }
        },
        mounted() {
            this.$api.base.fetchBaseInfo().then(res => {
                this.form = res.data[0]
            })
        }
    }
</script>

<style lang="stylus" type="text/stylus">

</style>
