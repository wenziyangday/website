<template>
    <div class="wen-submenu">
        <el-submenu :index="cur.id">
            <template slot="title"><i :class="`iconfont ${cur.icon} icon-font`" v-if="cur.icon"></i>{{cur.name}}</template>
            <template v-for="item in children">
                <el-menu-item v-if="item.children && item.children.length === 0" :index="item.id">{{item.name}}</el-menu-item>
                <wen-submenu v-else :children="item.children" :cur="item" :index="item.id"></wen-submenu>
            </template>
        </el-submenu>
    </div>
</template>

<script>
    export default {
        name: "wenSubmenu",
        // componentName: 'wenSubmenu',
        props: {
            children: {
                type: Array,
                default: () => []
            },
            cur: {
                type: Object,
                default: () => {}
            }
        },
    }
</script>

<style lang="stylus" type="text/stylus" scoped>
    .wen-submenu
        position relative
        .icon-font
            display inline-flex
            width 1.2rem
            justify-content center
            padding-right 1rem
            font-size 1rem
</style>
