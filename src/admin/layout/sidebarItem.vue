<template>
    <div class="sidebarItem">
        <el-menu background-color="#000" text-color="#fff" :router="rout" :default-active="activeIndex"
                 @select="handleSelect" class="border-r-0">
            <el-menu-item index="admin">
                <i class="iconfont icon-shouye icon-font"></i>首页
            </el-menu-item>
            <el-submenu index="columnManage">
                <template slot="title">
                    <i class="iconfont icon-lanmuguanli icon-font"></i>栏目管理
                </template>
                <template v-if="columnData.length > 0">
                    <el-menu-item :index="`columnManage?_id=${item._id}`" v-for="(item, index) in columnData"
                                  :key="index">
                        {{item.columnName}}
                    </el-menu-item>
                </template>
                <el-menu-item index="addColumn?parent_id=">
                    新增栏目
                </el-menu-item>
            </el-submenu>
            <el-menu-item index="basicConfig">
                <i class="iconfont icon-jichushezhi icon-font"></i>基本设置
            </el-menu-item>
            <el-menu-item index="blockFun">
                <i class="iconfont icon-gongneng icon-font"></i>功能块
            </el-menu-item>
            <!--<el-submenu>
                <template slot="title">拥有子集</template>
                <el-menu-item index="1">工作台1</el-menu-item>
                <el-menu-item index="2">工作台2</el-menu-item>
                <el-menu-item index="3">工作台3</el-menu-item>
                <el-menu-item index="4">工作台4</el-menu-item>
                <el-menu-item index="5">工作台5</el-menu-item>
                <el-menu-item index="6">工作台6</el-menu-item>
                <el-menu-item index="7">工作台7</el-menu-item>
            </el-submenu>-->
            <!-- <el-menu-item route="/basicConfig">
			   基本设置
			 </el-menu-item>
			 <el-menu-item route="/addColumn">
			   新增栏目
			 </el-menu-item>-->
        </el-menu>
    </div>
</template>

<script>
    import {columnGet} from '../../api/admin';

    export default {
        name: 'sidebarItem',
        data() {
            return {
                sidebarData: this.$router.options.routes[1].children,
                activeIndex: 'admin',
                rout: true,
                columnData: []
            }
        },
        methods: {
            handleSelect(key, keyPath) {
                this.activeIndex = key;
            },
            routerGo(id) {
                this.$router.push({
                    path: '/addColumn',
                    query: {
                        parentId: id
                    }
                })
            }
        },
        mounted() {
            // todo 栏目渲染到页面
            columnGet({parentId: ''}).then(res => {
                if (res.code === 200) {
                    this.columnData = res.data;
                }
            });

            //   解决刷新页面高亮消失
            let fullPath = this.$route.fullPath;
            this.activeIndex = fullPath.substring(1, fullPath.length);
        },
    }
</script>

<style lang="stylus" type="text/stylus">
    .sidebarItem
        height 2.4rem
        line-height 2.4rem
        background #000000
        li
            .icon-font
                display inline-flex
                width 1.2rem
                justify-content center
                margin-right 0.3rem
                font-size 1rem

</style>
