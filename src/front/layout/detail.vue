<template>
  <div class="detail">
    {{this.$route.params}}
    <div class="title-detail"><span>{{detailData.tag}}</span>{{detailData.title}}</div>
    <div class="complex-detail"><i class="fa fa-user"></i> {{detailData.author}}&emsp;<i class="fa fa-calendar"></i>
      {{detailData.createTime}}
    </div>
    <div class="content-detail" v-html="detailData.content"></div>
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
        _this.$axios.get('http://rap2api.taobao.org/app/mock/8797/detail/123456').then(res => {
          console.log(res.data);
          _this.detailData = res.data.data || {};
        })
      }
    },
    mounted() {
      this.getDetailById();
    }
  }
</script>

<style lang="stylus" type="text/stylus" scoped>
  .detail
    padding-bottom 4rem
    .title-detail
      display flex
      line-height 2rem
      font-size 1rem
      align-items center
      span
        position relative
        padding .25rem .5rem
        margin-right .75rem
        font-size .6rem
        border-radius .15rem
        line-height 1
        color #ffffff
        background rgba(9, 4, 1, 0.44)
        &:after
          position absolute
          right -5px
          top 0
          bottom 0
          margin auto 0
          content ''
          width 0
          height 0
          border-left 5px solid rgba(9, 4, 1, 0.44)
          border-top 5px solid transparent
          border-bottom 5px solid transparent
    .complex-detail
      padding 0 0 .5rem
      margin-bottom .5rem
      font-size .6rem
      border-bottom 1px solid #eeeeee
    .content-detail
      font-size 0.7rem
      line-height 1.5
      text-align justify
</style>
