<template>
  <div class="homeDefault">
    <HomeList :data="homeListData"></HomeList>
  </div>
</template>

<script>
  import HomeList from './homeList';

  export default {
    name: 'homeDefault',
    data() {
      return {
        homeListData: []
      }
    },
    components: {
      HomeList
    },
    methods: {
      getHomeListData() {
        const _this = this;
        _this.$axios.get('http://rap2api.taobao.org/app/mock/8797/GET/homelist/').then(function (res) {
          _this.homeListData = res.data.data || [];
        })
      }
    },
    mounted() {
      this.getHomeListData();
    }
  }
</script>

<style lang="stylus" type="text/stylus"></style>
