<template>
    <div class="adsManage">
        <!--adsManage-->
        <el-row :gutter="20">
            <el-col :sm="12" :md="8" :lg="6" v-for="(item, index) in 15" :key="index" class="box-bottom">
                <div class="box-config">
                    <span class="company">发布商{{index}}</span>
                    <div class="time">2019-10-12</div>
                    <div class="inner-content">
                        <div class="img">
                            <img :src="images[parseInt(Math.random() * 4)]" height="100px" alt="">
                        </div>
                        <div class="content">
                            <div class="title-time">
                                <div class="title">发布商</div>
                            </div>
                            <div class="intro">
                                发布商发布商发布商发布商发布商发布商发布商发布商发布商发布商发布商发布商发布
                            </div>
                        </div>
                    </div>
                </div>
            </el-col>
        </el-row>


    </div>
</template>

<script>
    export default {
        name: 'adsManage',
        data() {
            return {
                images: [
                    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550570079052&di=57941757232732d141c75a6262c8ccdb&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fd043ad4bd11373f02f236d8cae0f4bfbfbed0480.jpg',
                    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550570079051&di=6a14260ffb1e16f414b5c5beb74a6a30&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fa5c27d1ed21b0ef4c090424dd7c451da81cb3ead.jpg',
                    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550570079050&di=e0ff1a6f6575cddd8f575e8d4aa679c4&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F8718367adab44aed371b67c7b91c8701a18bfbb8.jpg',
                    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550570079049&di=b05d17ddc9bfe024ab6b7a4625fa9150&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fbd3eb13533fa828bc47decf1f71f4134970a5a41.jpg',
                    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550570079049&di=7bcee412087637443385463807ca56f9&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F3ac79f3df8dcd1008f9a4932788b4710b9122f9a.jpg'
                ]
            }
        },
    }
</script>

<style lang="stylus" type="text/stylus" scoped>
    .adsManage
        .box-bottom
            margin-bottom 1rem
        .box-config
            position relative
            padding 0.75rem
            margin 0.5rem 0 1rem
            border-radius 0.2rem
            border 0.05rem solid #ddd
            z-index 0
            &:last-child
                margin-bottom 0
            .company, .time
                display inline-flex
                position absolute
                top -0.5rem
                padding 0 0.5rem 0 0
                align-items center
                font-size 0.7rem
                color #409EFF
                background #ffffff
                z-index 9
            .time
                top -0.4rem
                right 0.5rem
                padding 0 0 0 0.5rem
                font-size 0.6rem
            .inner-content
                display flex
                align-items stretch
                .img
                    flex 0 0 6.25rem
                    margin-right 0.5rem
                .content
                    .intro
                        font-size 0.6rem
                        text-align justify
                    .title-time
                        display flex
                        justify-content space-between
                        align-items center
                        margin-bottom 0.5rem

</style>
