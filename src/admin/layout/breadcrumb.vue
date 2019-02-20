<template>
    <div class="breadcrumb">
        <div class="title-b">
            <div class="switch">
                <i class="fa fa-bars fa-size cursor-pointer" @click.stop="switchSidebar"></i>
            </div>
            <div>
                {{title}} (一级栏目/二级栏目/当前内容)
            </div>
        </div>
        <div class="logout-b">
            <el-dropdown @command="handleDropDownCommand">
                <span class="icon-lb"><i class="iconfont icon-gerenzhongxin"></i></span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="personalCenter">个人中心</el-dropdown-item>
                    <el-dropdown-item command="personalSettings">个人设置</el-dropdown-item>
                    <el-dropdown-item command="logOut" divided>退出登录</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
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

            switchSidebar: function () {
                this.$store.commit('CHANGE_ON_OFFSIDE');
            },

            getRouteTitle: function () {
                this.title = this.$route.meta.title;
            },

            handleDropDownCommand: function (command) {
                switch (command) {
                    case 'personalCenter':
                    case 'personalSettings':
                        this.$notify({
                            title: command,
                            message: 'todo 需要写入对应的页面及跳转函数',
                            type: 'warning'
                        });
                        break;
                    case 'logOut':
                        this.logOut();
                        break;
                    default:
                        console.log('超出枚举类型');
                        break;
                }
            },
            logOut: function () {
                removeToken('my-cookies');
                this.$store.commit('REMOVE_TOKEN');
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
        }
    }
</script>

<style lang="stylus" type="text/stylus">
    .breadcrumb
        display flex
        position relative
        height 3.2rem
        align-items center
        justify-content space-between
        background #ffffff
        .logout-b
            margin-right 0.8rem
            .icon-lb
                cursor pointer
                .iconfont
                    font-size 1.2rem
        .title-b
            display inline-flex
            align-items center
        .switch
            width 3.2rem
            text-align center
            .fa-size
                font-size 1.6rem
</style>
