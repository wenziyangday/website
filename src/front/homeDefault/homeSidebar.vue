<template>
  <div class="home-sidebar">
    <div class="tag-sorting">
      <div class="title-home-sidebar">
        标签分类
      </div>
      <div class="tag-container">
        <span v-for="(item, index) in tagData" :key="index">
          <router-link :to="{name: 'tags', params: {name: item.name}}">{{item.name}}</router-link>
        </span>
      </div>
    </div>
    <div class="tag-sorting">
      <div class="title-home-sidebar">
        即将到来的栏目框
      </div>
      <div class="tag-container">
        <span v-for="(item, index) in tagData" :key="index">
          <router-link :to="{name: 'tags', params: {name: item.name}}">{{item.name}}</router-link>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'home-sidebar',
    data() {
      return {
        tagData: []
      }
    },
    methods: {
      getTags() {
        const _this = this;
        _this.$axios.get('http://rap2api.taobao.org/app/mock/8797/home/tag').then(res => {
          _this.tagData = res.data.data.tags || [];
        })
      }
    },
    mounted() {
      this.getTags()
    }
  }
</script>

<style lang="stylus" type="text/stylus">
  .home-sidebar
    width 276px
  .tag-sorting
    margin-bottom 1.2rem
    border 1px solid #eeeeee
    .title-home-sidebar
      display flex
      align-items center
      padding 0 .5rem
      height 2rem
      border-bottom 1px solid #eeeeee
    .tag-container
      display flex
      padding .5rem .5rem 0
      flex-wrap wrap
      justify-content space-between
      span
        flex 0 0 30%
        padding .5rem 0
        margin-bottom .5rem
        text-align center
        background rgba(9, 4, 1, 0.44);
        border-radius 0.15rem;
        color #ffffff
</style>
