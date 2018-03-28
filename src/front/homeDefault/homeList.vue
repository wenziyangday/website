<template>
  <div class="homeList">
    <div class="item-homeList" v-for="(item, index) in homeListData" :key="index">
      <div class="img-item" v-show="item.hasOwnProperty('img') || item.img">
        <a href=""><img :src="item.img" width="100%" alt=""></a>
      </div>
      <div class="content-item">
        <div class="title-item"><span class="tag">{{item.tag}}</span><em>{{item.title}}</em></div>
        <div class="complex-item"><i class="fa fa-calendar"></i> {{item.createTime || now()}} &emsp;<i
          class="fa fa-user"></i> {{item.author || 'wen'}}
        </div>
        <div class="content-item-list">
          {{item.content}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'homeList',
    data() {
      return {
        homeListData: [
          {
            id: '123456',
            title: '这是一篇关于XXX的文章，如果觉得不错的请查阅',
            intro: '简单介绍下这篇文章的内容',
            img: 'https://t11.baidu.com/it/u=1221349699,1978224329&fm=173&app=25&f=JPEG?w=600&h=450&s=27469D4F024A32FE4700AC2803001093',
            content: 'HUAWEI P20|P20 Pro拥有高贵的宝石蓝、柔和的樱粉金、稳重的亮黑色等多种配色，更将2018年流行色紫色融入机身，带来极具时尚感的极光色，由深至浅层层晕开，充满无尽想象空间。不少行业专家已经预测，极光色版本上市后极有可能出现“一机难求”的情况',
            tag: '标签一/栏目名称',
            createTime: '2018-03-28',
            author: 'wen'
          },
          {
            id: '123456',
            title: '这是一篇关于XXX的文章，如果觉得不错的请查阅',
            intro: '简单介绍下这篇文章的内容',
            img: 'https://t11.baidu.com/it/u=1221349699,1978224329&fm=173&app=25&f=JPEG?w=600&h=450&s=27469D4F024A32FE4700AC2803001093',
            content: 'HUAWEI P20|P20 Pro拥有高贵的宝石蓝、柔和的樱粉金、稳重的亮黑色等多种配色，更将2018年流行色紫色融入机身，带来极具时尚感的极光色，由深至浅层层晕开，充满无尽想象空间。不少行业专家已经预测，极光色版本上市后极有可能出现“一机难求”的情况',
            tag: '标签一/栏目名称',
            createTime: '2018-03-28',
            author: 'wen'
          },
          {
            id: '123456',
            title: '这是一篇关于XXX的文章，如果觉得不错的请查阅',
            intro: '简单介绍下这篇文章的内容',
            img: 'https://t11.baidu.com/it/u=1221349699,1978224329&fm=173&app=25&f=JPEG?w=600&h=450&s=27469D4F024A32FE4700AC2803001093',
            content: 'HUAWEI P20|P20 Pro拥有高贵的宝石蓝、柔和的樱粉金、稳重的亮黑色等多种配色，更将2018年流行色紫色融入机身，带来极具时尚感的极光色，由深至浅层层晕开，充满无尽想象空间。不少行业专家已经预测，极光色版本上市后极有可能出现“一机难求”的情况',
            tag: '标签一/栏目名称',
            createTime: '2018-03-28',
            author: 'wen'
          },
          {
            id: '123456',
            title: '这是一篇关于XXX的文章，如果觉得不错的请查阅',
            intro: '简单介绍下这篇文章的内容',
            img: 'https://t11.baidu.com/it/u=1221349699,1978224329&fm=173&app=25&f=JPEG?w=600&h=450&s=27469D4F024A32FE4700AC2803001093',
            content: 'HUAWEI P20|P20 Pro拥有高贵的宝石蓝、柔和的樱粉金、稳重的亮黑色等多种配色，更将2018年流行色紫色融入机身，带来极具时尚感的极光色，由深至浅层层晕开，充满无尽想象空间。不少行业专家已经预测，极光色版本上市后极有可能出现“一机难求”的情况',
            tag: '标签一/栏目名称',
            createTime: '2018-03-28',
            author: 'wen'
          },
          {
            id: '123456',
            title: '这是一篇关于XXX的文章，如果觉得不错的请查阅',
            intro: '简单介绍下这篇文章的内容',
            img: 'https://t11.baidu.com/it/u=1221349699,1978224329&fm=173&app=25&f=JPEG?w=600&h=450&s=27469D4F024A32FE4700AC2803001093',
            content: 'HUAWEI P20|P20 Pro拥有高贵的宝石蓝、柔和的樱粉金、稳重的亮黑色等多种配色，更将2018年流行色紫色融入机身，带来极具时尚感的极光色，由深至浅层层晕开，充满无尽想象空间。不少行业专家已经预测，极光色版本上市后极有可能出现“一机难求”的情况',
            tag: '标签一/栏目名称',
            createTime: '2018-03-28',
            author: 'wen'
          },
          {
            id: '123456',
            title: '这是一篇关于XXX的文章，如果觉得不错的请查阅',
            intro: '简单介绍下这篇文章的内容',
            img: 'https://t11.baidu.com/it/u=1221349699,1978224329&fm=173&app=25&f=JPEG?w=600&h=450&s=27469D4F024A32FE4700AC2803001093',
            content: 'HUAWEI P20|P20 Pro拥有高贵的宝石蓝、柔和的樱粉金、稳重的亮黑色等多种配色，更将2018年流行色紫色融入机身，带来极具时尚感的极光色，由深至浅层层晕开，充满无尽想象空间。不少行业专家已经预测，极光色版本上市后极有可能出现“一机难求”的情况',
            tag: '标签一/栏目名称',
            createTime: '2018-03-28',
            author: 'wen'
          },
        ]
      }
    }
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
