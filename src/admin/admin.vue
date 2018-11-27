<template>
    <div class="admin">
        <Sidebar></Sidebar>
        <div class="admin-container">
            <div class="admin-breadcrumb">
                <Breadcrumb></Breadcrumb>
            </div>
            <div class="router-switch" :style="{minHeight: routerSwitchHeight + 'px'}">
                <keep-alive>
                    <router-view name="admin"></router-view>
                </keep-alive>
            </div>
            <!--<End></End>-->
        </div>
    </div>
</template>

<script>
    import Sidebar from './layout/sidebar';
    import Breadcrumb from './layout/breadcrumb';
    import End from './layout/end';

    export default {
        name: 'admin',
        data() {
            return {
                routerSwitchHeight: 0
            }
        },
        components: {
            Sidebar,
            Breadcrumb,
            End
        },
        mounted() {
            window.onresize = function () {
                let a = document.body.clientWidth || document.documentElement.clientWidth;
                console.log(a, 'client');
            }
            // this.routerSwitchHeight = this.$util.calculateHeight()  // 设置默认高度
        }
    }
</script>

<style lang="stylus" type="text/stylus">
    .admin
        width 100%
        min-height 100%
        background #f0f2f5
        .admin-container
            position relative
            /*min-height 100%*/
            margin-left 15rem
            .admin-breadcrumb
                position fixed
                left 15rem
                top 0
                width calc(100% - 15rem)
                z-index 9
            .router-switch
                margin 4rem 0.8rem 0.8rem
                padding 1rem
                background #fff
</style>
