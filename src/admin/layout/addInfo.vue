<template>
    <div class="addInfo">
        <el-form :model="form" :rules="rules" ref="form" label-width="100px">
            <el-form-item label="栏目名称" prop="columnName">
                <el-input v-model="form.columnName"></el-input>
            </el-form-item>
            <el-form-item label="英文名称" prop="enName">
                <el-input v-model="form.enName"></el-input>
            </el-form-item>
            <el-form-item label="状态" prop="state">
                <el-radio-group v-model="form.state">
                    <el-radio :label="-1">隐藏</el-radio>
                    <el-radio :label="0">显示</el-radio>
                    <el-radio :label="1">置顶</el-radio>
                </el-radio-group>
            </el-form-item>
            <!-- <el-form-item label="栏目图片" prop="columnPic">
				 <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/"
							:show-file-list="false"
							:on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
					 <img v-if="columnPic" :src="columnPic" class="avatar"> <i v-else
																			   class="el-icon-plus avatar-uploader-icon"></i>
				 </el-upload>
			 </el-form-item>-->
            <el-form-item label="栏目简介" prop="others">
                <el-input type="textarea" v-model="form.intro" :rows="8"></el-input>
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
        name: 'addSubColumn',
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
            }
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$axios.post(`http://localhost:3000/api/columnPost?parentId=${this.form.parentId}&columnName=${this.form.columnName}&enName=${this.form.enName}&state=${this.form.state}&intro=${this.form.intro}`).then(res => {
                            this.$message({
                                type: 'success',
                                message: '新增栏目成功'
                            });
                            this.$ref.form.resetFields();
                            console.log(res);
                        })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
        },
    }
</script>

<style lang="stylus" type="text/stylus">

</style>
