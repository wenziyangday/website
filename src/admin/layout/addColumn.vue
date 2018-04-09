<template>
  <div class="addColumn">
    <el-form  :model="form" :rules="rules" ref="form" label-width="100px">
      <el-form-item label="栏目名称" prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="英文名称" prop="enName">
        <el-input v-model="form.enName"></el-input>
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
          type: '自定义',
          others: ''
        },
        rules: {
          name: [{required: true, message: '栏目名称'}],
          enName: [{required: true, message: '英文名称'}],
          type: [{required: true, message: '展现类型'}],
          others: [{required: true, message: '文字说明', min: 10, max: 100}],
        }
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
    },
    mounted() {
      console.log(this.$route);
    }
  }
</script>

<style lang="stylus" type="text/stylus"></style>
