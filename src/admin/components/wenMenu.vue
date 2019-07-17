<template>
    <div class="wen-menu">
        <el-menu background-color="#000" text-color="#fff" class="border-r-0"
                 :router="rout" :default-active="activeIndex"
                 :collapse="$store.state.onOffSide"
                 @select="handleSelect"
                 unique-opened
        >
            <slot v-for="item in data">
                <el-menu-item v-if="item.children && item.children.length === 0" :index="item.id" :key="item.id">
                    <template><i :class="`iconfont ${item.icon} icon-font`" v-if="item.icon"></i><span slot="title">{{item.name}}</span></template>
                </el-menu-item>
                <wen-submenu v-else :children="item.children" :cur="item" :key="item.id"></wen-submenu>
            </slot>
        </el-menu>
    </div>
</template>

<script>
    import WenSubmenu from './wenSubmenu';

    export default {
        name: "wenMenu",
        data() {
            return {
                activeIndex: 'admin',
                rout: true,
            }
        },
        props: {
            data: {
                type: Array,
                default: () => []
            },
        },
        components: {
            WenSubmenu
        },
        methods: {
            handleSelect(key, keyPath) {
                this.activeIndex = key;
            },
        },
        mounted() {
            //   解决刷新页面高亮消失
            let fullPath = this.$route.fullPath;
            this.activeIndex = fullPath.substring(1, fullPath.length);
        },
        watch: {
            '$route'(newValue, oldValue) {
                //   解决刷新页面高亮消失
                let fullPath = newValue.fullPath;
                this.activeIndex = fullPath.substring(1, fullPath.length);
            }
        },

    }
</script>
<!--<style lang="stylus" type="text/stylus">
    .wen-menu
        li[role="menuitem"]
            ul[role="menu"]
                position relative
                margin-left 1.2rem

</style>-->
<style lang="stylus" type="text/stylus" scoped>
    .wen-menu
        position relative
        .icon-font
            display inline-flex
            width 1.2rem
            justify-content center
            padding-right 1rem
            font-size 1rem
</style>
