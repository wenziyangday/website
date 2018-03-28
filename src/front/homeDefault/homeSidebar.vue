<template>
  <div class="home-sidebar">
    <div class="tag-sorting">
      <div class="title-home-sidebar">
        标签分类
      </div>
      <div class="tag-container">
        <span v-for="(item, index) in tagData" :key="index">
          <router-link :to="item.id">{{item.tag}}</router-link>
        </span>
      </div>
    </div>
    <div class="tag-sorting">
      <div class="title-home-sidebar">
        即将到来的栏目框
      </div>
      <div class="tag-container">
        <span v-for="(item, index) in tagData" :key="index">
          <router-link :to="item.id">{{item.tag}}</router-link>
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
        tagData: [
          {
            id: '/homeOne',
            tag: 'js',
            sum: 20
          },
          {
            id: '/homeTwo',
            tag: 'es6',
            sum: 20
          },
          {
            id: '',
            tag: 'html(5)',
            sum: 20
          },
          {
            id: '',
            tag: 'css(3)',
            sum: 20
          },
          {
            id: '',
            tag: 'vue',
            sum: 20
          },
          {
            id: '',
            tag: 'React',
            sum: 20
          },
          {
            id: '',
            tag: 'node',
            sum: 20
          },
          {
            id: '',
            tag: 'MongoDB',
            sum: 20
          }
        ]
      }
    }
  }
</script>

<style lang="stylus" type="text/stylus">
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
