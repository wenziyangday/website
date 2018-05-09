<template>
    <div class="addColumn">
        <el-form :model="form" :rules="rules" ref="form" label-width="100px">
            <el-form-item label="栏目名称" prop="name">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="英文名称" prop="enName">
                <el-input v-model="form.enName"></el-input>
            </el-form-item>
            <el-form-item label="meta简述" prop="metaIntro">
                <el-input v-model="form.metaIntro"></el-input>
            </el-form-item>
            <el-form-item label="展现类型" prop="type">
                <el-radio-group v-model="form.type">
                    <el-radio label="自定义" name="type"></el-radio>
                    <el-radio label="图文展现" name="type"></el-radio>
                    <el-radio label="列表展现" name="type"></el-radio>
                    <el-radio label="图文列表" name="type"></el-radio>
                    <el-radio label="图片列表" name="type"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="栏目图片" prop="columnPic">
                <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/"
                           :show-file-list="false"
                           :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                    <img v-if="columnPic" :src="columnPic" class="avatar"> <i v-else
                                                                              class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
            </el-form-item>
            <el-form-item label="其他" prop="others">
                <el-input type="textarea" v-model="form.others" :rows="8"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('form')">立即创建</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: 'addColumn',
        data() {
            return {
                form: {
                    name: '',
                    enName: '',
                    metaIntro: '',
                    type: '自定义',
                    columnPic: '',
                    others: ''
                },
                rules: {
                    name: [{required: true, message: '栏目名称'}],
                    enName: [{required: true, message: '英文名称'}],
                    type: [{required: true, message: '展现类型'}],
                    others: [{required: true, message: '文字说明', min: 10, max: 100}],
                },
                props: []
            }
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            handleAvatarSuccess(res, file) {
                this.columnPic = URL.createObjectURL(file.raw);
            },
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 10;

                if (!isJPG) {
                    this.$message.error('上传头像图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isJPG && isLt2M;
            }
        },
        mounted() {
            console.log(this.$route);
        }
    }
</script>

<style lang="stylus" type="text/stylus">
    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }

    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }

    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }

    .avatar {
        width: 178px;
        height: 178px;
        display: block;
    }
</style>
