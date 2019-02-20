<template>
    <div class="admin">
        <Sidebar></Sidebar>
        <div :class="`admin-container ${$store.state.onOffSide ? 'active-container' : ''}`">
            <div :class="`admin-breadcrumb ${$store.state.onOffSide ? 'active-breadcrumb' : ''}`">
                <Breadcrumb></Breadcrumb>
            </div>
            <div class="router-switch">
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
        computed: {
            onOffSide() {
                return this.$store.state.onOffSide;
            }
        },
        mounted() {
            const _this = this;
            window.onresize = function () {
                let clientWidth = document.body.clientWidth || document.documentElement.clientWidth;
                if (clientWidth < 1400 && !_this.onOffSide) {
                    _this.$store.commit('CHANGE_ON_OFFSIDE');
                }
            };

            let localClientWidth = document.body.clientWidth || document.documentElement.clientWidth;

            if (localClientWidth < 1400 && !_this.onOffSide) {
                _this.$store.commit('CHANGE_ON_OFFSIDE');
            }

            // this.routerSwitchHeight = this.$util.calculateHeight()  // 设置默认高度
        }
    }
</script>

<style lang="stylus" type="text/stylus" scoped>
    .admin
        width 100%
        min-height 100%
        background #f0f2f5
        .admin-container
            position relative
            margin-left 15rem
            &.active-container
                margin-left 3.2rem !important
                transition-duration .5s
            .admin-breadcrumb
                position fixed
                left 15rem
                top 0
                width calc(100% - 15rem)
                z-index 99
                &.active-breadcrumb
                    left 3.2rem !important
                    width calc(100% - 3.2rem) !important
                    transition-duration .5s
            .router-switch
                position relative
                margin 4rem 0.8rem 0.8rem
                padding 1rem
                background #fff
</style>
