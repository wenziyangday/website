<template>
    <div class="navigation" ref="navigation">
        <div class="wrap">
            <div class="inner-navigation">
                <router-link to="/home">首页</router-link>
                <span v-for="(item, index) in navData" :key="index">
          <router-link :to="{name: 'column', params: {name: item.name}}">{{item.value}}</router-link>
        </span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'navigation',
        data() {
            return {
                navData: []
            }
        },
        methods: {
            getNavData() {
                const _this = this;
                _this.$axios.get('http://rap2api.taobao.org/app/mock/8797//home/column').then(res => {
                    _this.navData = res.data.data || [];
                })
            }
        },
        mounted() {
            this.getNavData();
        }
    }
</script>

<style lang="stylus" type="text/stylus">
    .navigation
        width 100%
        height 2.4rem
        color #ffffff
        line-height 2.4rem
        background #000000
        .active
            transform rotate(-10deg)
            transition: transform ease-in-out 0.5s
        .inner-navigation
            display flex
            justify-content space-between
        a
            display inline-block
            color #ffffff
</style>
