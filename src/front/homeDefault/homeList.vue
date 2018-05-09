<template>
    <div class="homeList">
        {{this.$route.params}}
        <div class="item-homeList" v-for="(item, index) in data" :key="index">
            <div class="img-item" v-show="item.hasOwnProperty('img') || item.img">
                <router-link :to="{name: 'detail', params: {id: item.id}}"><img src="../../assets/images/list.jpg"
                                                                                alt="">
                </router-link>
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

<style lang="stylus" type="text/stylus" scoped>
    .item-homeList
        display flex
        margin-bottom 1.2rem
        align-items center
        .img-item
            flex 0 0 10rem
            padding 0.5rem
            border 1px solid #eeeeee
            margin-right 1.2rem
            img
                width 100%
        .content-item
            .tag
                display inline-block
                position relative
                padding 0.3rem
                margin-right 1rem
                color #ffffff
                font-size 0.6rem
                background rgba(9, 4, 1, 0.44)
                border-radius 0.15rem
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
