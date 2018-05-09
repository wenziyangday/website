<template>
    <div class="sidebarItem">
        <!--{{sidebarData}}-->
        <el-menu background-color="#000" text-color="#fff" :router="rout" :default-active="activeIndex"
                 @select="handleSelect" class="border-r-0">
            <el-menu-item v-for="(item, index) in sidebarData" :route="item" :index="String(index)" :key="index">
                {{item.meta.title}}
            </el-menu-item>
            <!--有个bug刷新页面-->
            <!-- <el-submenu>
			   <template slot="title">拥有子集</template>
			   <el-menu-item index="1">工作台1</el-menu-item>
			   <el-menu-item index="2">工作台2</el-menu-item>
			   <el-menu-item index="3">工作台3</el-menu-item>
			   <el-menu-item index="4">工作台4</el-menu-item>
			   <el-menu-item index="5">工作台5</el-menu-item>
			   <el-menu-item index="6">工作台6</el-menu-item>
			   <el-menu-item index="7">工作台7</el-menu-item>
			 </el-submenu>
			 <el-menu-item route="/basicConfig">
			   基本设置
			 </el-menu-item>
			 <el-menu-item route="/addColumn">
			   新增栏目
			 </el-menu-item>-->
        </el-menu>
    </div>
</template>

<script>
    export default {
        name: 'sidebarItem',
        data() {
            return {
                sidebarData: this.$router.options.routes[1].children,
                activeIndex: '0',
                rout: true
            }
        },
        methods: {
            handleSelect(key, keyPath) {
                this.activeIndex = key;
                console.log(key, keyPath)
            }
        },
        mounted() {
            // todo 栏目渲染到页面
            // console.table(this.$router.options.routes);
        }
    }
</script>

<style lang="stylus" type="text/stylus">
    .sidebarItem
        height 2.4rem
        line-height 2.4rem
        background #000000
</style>
