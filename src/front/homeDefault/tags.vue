<template>
  <div class="tags">
    <HomeList :data="tagData"></HomeList>
  </div>
</template>

<script>
  import HomeList from './homeList';

  export default {
    name: 'tags',
    data() {
      return {
        tagData: []
      }
    },
    components: {
      HomeList
    },
    methods: {
      getDataByTagName() {
        const _this = this;
        _this.$axios.get('http://rap2api.taobao.org/app/mock/8797/GET//tag/js').then(res => {
          _this.tagData = res.data.data || [];
        })
      }
    },
    mounted() {
      this.getDataByTagName();
    }
  }
</script>

<style lang="stylus" type="text/stylus">

</style>
