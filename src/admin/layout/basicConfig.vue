<template>
  <!--基础啊设置-->
  <div class="basicConfig">
    <el-form :model="form" :rules="rules" ref="form" label-width="100px">
      <el-form-item label="网站名称" prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="英文名称" prop="enName">
        <el-input v-model="form.enName"></el-input>
      </el-form-item>
      <el-form-item label="meta简述" prop="enName">
        <el-input v-model="form.metaIntro"></el-input>
      </el-form-item>
      <el-form-item label="备案号" prop="recordNumber">
        <el-input v-model="form.recordNumber"></el-input>
      </el-form-item>
      <el-form-item label="版权信息" prop="copyright">
        <el-input v-model="form.copyright "></el-input>
      </el-form-item>
      <el-form-item label="网站简述" prop="description">
        <el-input type="textarea" v-model="form.description" :rows="8"></el-input>
      </el-form-item>
      <el-form-item label="网站地图" prop="map">
        <el-input type="textarea" v-model="form.map" :rows="8"></el-input>
      </el-form-item>
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
        form: {
          name: '',
          enName: '',
          metaIntro: '',
          recordNumber: '',
          description: '',
          copyright: '',
          map: ''
        },
        rules: {
          name: [{required: true, message: '网站名称'}],
          enName: [{required: true, message: '英文名称'}],
          map: [{required: true, message: '网站地图', min: 10, max: 100}],
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

<style lang="stylus" type="text/stylus">

</style>
