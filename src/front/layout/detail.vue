<template>
  <div class="detail">
    detail
  </div>
</template>

<script>
  export default {
    name: 'detail',
    data() {
      return {
        detailData: {}
      }
    },
    methods: {
      getDetailById() {
        const _this = this;
        _this.$axios.get('http://rap2api.taobao.org/app/mock/8797/GET/homeListData/123456').then(res => {
          console.log(res.data);
          _this.detailData = res.data || {};
        })
      }
    },
    mounted() {
      this.getDetailById();
    }
  }
</script>

<style lang="stylus" type="text/stylus">

</style>
