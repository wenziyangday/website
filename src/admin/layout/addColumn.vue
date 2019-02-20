<template>
    <div class="addColumn">
        <el-form :model="form" :rules="rules" ref="form" label-width="100px" size="small">
            <el-form-item label="序号：" prop="sortNum">
                <el-input v-model="form.sortNum"></el-input>
            </el-form-item>
            <el-form-item label="栏目名称：" prop="columnName">
                <el-input v-model="form.columnName"></el-input>
            </el-form-item>
            <el-form-item label="英文名称：" prop="enName">
                <el-input v-model="form.enName"></el-input>
            </el-form-item>
            <el-form-item label="状态：" prop="state">
                <el-radio-group v-model="form.state">
                    <el-radio :label="0">显示</el-radio>
                    <el-radio :label="1">置顶</el-radio>
                    <el-radio :label="-1">隐藏</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="栏目图片" prop="picUrl">
                <el-input v-model="form.picUrl"></el-input>
                <!--<el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/"
						   :show-file-list="false"
						   :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
					<img v-if="form.columnPic" :src="form.columnPic" class="avatar"> <i v-else
																			  class="el-icon-plus avatar-uploader-icon"></i>
				</el-upload>-->
            </el-form-item>
            <el-form-item label="栏目简介：" prop="others">
                <el-input type="textarea" v-model="form.intro" :rows="8"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('form')">立即创建</el-button>
                <el-button @click="$router.go(-1)">取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    // import {columnPost} from '../../api/admin';

    export default {
        name: 'addColumn',
        data() {
            return {
                form: {
                    parentId: '',
                    columnName: '',
                    enName: '',
                    state: 0,
                    intro: ''
                },
                rules: {
                    columnName: [{required: true, message: '栏目名称'}],
                    intro: [{required: false, message: '文字说明', min: 10, max: 100}],
                },
                props: []
            }
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        let obj = Object.assign(this.form, {parentId: this.$route.query.parentColumnId});
                        this.$alls.admin.columnPost(obj).then(res => {
                            if (res.code === 200) {
                                let parentId = this.$route.query.parentColumnId;
                                this.$message({
                                    type: 'success',
                                    message: res.message
                                });
                                this.$router.go(0);
                                this.$router.push({
                                    name: 'columnManage',
                                    query: {baseClassId: parentId ? parentId : res.data._id}
                                })
                            }
                        })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            handleAvatarSuccess(res, file) {
                this.form.columnPic = URL.createObjectURL(file.raw);
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
        activated() {
            this.$nextTick(function () {
                let parentId = this.$route.query.parentColumnId;
                this.$alls.admin.countColumn({parentId}).then(res => {
                    this.$set(this.form, 'sortNum', (res.data + 1) * 10);
                });
            });
        },
        watch: {
            $route(newValue, oldValue) {
                this.form.parentId = '' || newValue.query.parent_id;
            }
        },
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
