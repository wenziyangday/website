<template>
    <div class="breadcrumb">
        <span class="switch">
            <i class="fa fa-bars fa-size cursor-pointer" @click.stop="switchSidebar"></i>
        </span> {{title}}{{$store.state.sidebarOnOff}}

        <div class="logOut">
            <button @click="logOut">登出</button>
        </div>
    </div>
</template>

<script>
    import {removeToken} from '../../util/auth';
    export default {
        name: 'breadcrumb',
        data() {
            return {
                title: '',
            }
        },
        methods: {
            switchSidebar() {

            },
            getRouteTitle() {
                this.title = this.$route.meta.title;
            },
            logOut() {
                removeToken('my-cookies');
                this.$router.push({
                    path: '/login'
                });
            }
        },
        mounted() {
            this.title = this.$route.meta.title;
        },
        watch: {
            '$route': 'getRouteTitle'
        },
    }
</script>

<style lang="stylus" type="text/stylus">
    .breadcrumb
        display flex
        height 3.2rem
        align-items center
        background #ffffff
        .switch
            width 3.2rem
            text-align center
            .fa-size
                font-size 1.6rem
</style>
