<template>
  <div class="homeList">
    <div class="item-homeList" v-for="(item, index) in data" :key="index">
      <div class="img-item" v-show="item.hasOwnProperty('img') || item.img">
        <router-link :to="{name: 'detail', params: {id: item.id}}"><img src="../../assets/images/list.jpg" width="100%"
          alt=""></router-link>
      </div>
      <div class="content-item">
        <div class="title-item"><span class="tag">{{item.tag}}</span><em>{{item.title}}</em></div>
        <div class="complex-item"><i class="fa fa-calendar"></i> {{item.createTime}} &emsp;<i
          class="fa fa-user"></i> {{item.author || 'wen'}}
        </div>
        <div class="content-item-list">
          {{item.intro}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'homeList',
    props: ['data']
  }
</script>

<style lang="stylus" type="text/stylus">
  .item-homeList
    display flex
    margin-bottom 1.2rem
    align-items center
    .img-item
      flex 0 0 10rem
      padding 0.5rem
      border 1px solid #eeeeee
      margin-right 1.2rem
    .content-item
      .tag
        display inline-block
        padding 0.3rem
        margin-right 1rem
        color #ffffff
        font-size 0.6rem
        background rgba(9, 4, 1, 0.44)
        border-radius 0.15rem
      em
        color #000000
        font-size 0.8rem
      .content-item-list
        text-align justify
        font-size .7rem
        line-height 1.5
      .complex-item
        padding .5rem 0 1rem
        font-size .6rem
</style>
