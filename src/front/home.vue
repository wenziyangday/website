<template>
    <div class="home">
        <div class="">
            <Logo></Logo>
            <Navigation ref="navi"></Navigation>
            <div class="wrap">
                <div class="inner-warp home-container">
                    <div class="main-views">
                        <keep-alive>
                            <router-view name="home"></router-view>
                        </keep-alive>
                    </div>
                    <div class="side-views">
                        <HomeSidebar ref="homeSidebar"></HomeSidebar>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Logo from './layout/logo';
    import Navigation from './layout/navigation';
    import HomeSidebar from './homeDefault/homeSidebar';

    export default {
        name: 'home',
        components: {
            Navigation, Logo, HomeSidebar
        },
        mounted() {
            const _this = this;
            window.onscroll = function () {
                const top = document.documentElement.scrollTop || document.body.scrollTop;
                if (top > 120) {
                    _this.$refs.navi.$el.style.position = 'fixed';
                    _this.$refs.navi.$el.style.top = '0';
                    _this.$refs.navi.$el.style.zIndex = '100';
                } else {
                    _this.$refs.navi.$el.style.position = 'relative';
                }

                /* if (top > 192) {
				   _this.$refs.homeSidebar.$el.style.position = 'fixed';
				   _this.$refs.homeSidebar.$el.style.marginTop = '0';
				   _this.$refs.homeSidebar.$el.style.zIndex = '0';
				 } else {
				   _this.$refs.homeSidebar.$el.style.position = 'relative';
				 }*/
            }
        }
    }
</script>

<style lang="stylus" type="text/stylus">
    .home
        width 100%
        .home-container
            display flex
            margin 1.2rem 0 0
            align-content space-around
            .main-views
                flex 0 0 44.6rem
            .side-views
                flex 0 0 13.8rem
                margin-left 1.6rem
</style>
