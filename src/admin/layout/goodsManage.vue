<template>
    <div class="goodsManage">
        <h1>goodsManage</h1>
        <div>
            新增、筛选、排序(拖拽排序)、删除（单个、多个）
        </div>
        <el-row :gutter="20">
            <el-col class="card-bottom" :sm="12" :md="8" :lg="4" v-for="o in 12" :key="o">
                <el-card :body-style="{ padding: '0px'}">
                    <img src="http://element-cn.eleme.io/static/hamburger.50e4091.png" class="image">
                    <div class="inner-content">
                        <span>好吃的汉堡</span>
                        <div class="bottom clearfix">
                            <div class="button">
                                <el-dropdown v-if="operations.length > 1" @command="operationSwitch">
                                    <span class="el-dropdown-link">
                                        MORE<i class="el-icon--right el-icon-plus"></i>
                                    </span>
                                    <el-dropdown-menu slot="dropdown">
                                        <el-dropdown-item v-for="(item, index) in operations" :key="index"
                                                          :command="item.labelName">{{item.name}}
                                        </el-dropdown-item>
                                    </el-dropdown-menu>
                                </el-dropdown>
                                <el-button type="text" v-else>查看</el-button>
                            </div>
                            <div class="time">{{formatTime(currentDate)}}</div>
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
        <el-row>
            <div class="loading-more">加载更多</div>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: 'goodsManage',
        data() {
            return {
                currentDate: new Date(),
                operations: [
                    {name: '查看', labelName: 'look'},
                    {name: '编辑', labelName: 'edit'},
                    {name: '删除', labelName: 'delete'},
                    {name: '上架', labelName: 'upperShelf'},
                    {name: '下架', labelName: 'lowerShelf'},
                ]
            }
        },
        methods: {
            formatTime: function (value) {
                return this.$util.formatTime(value);
            },
            operationSwitch: function (value) {
                switch (value) {
                    case 'look':
                        this.$notify({message: value});
                        break;
                    default:
                        console.log('非枚举值')
                }
            }
        },
    }
</script>

<style lang="stylus" type="text/stylus" scoped>
    .card-bottom
        margin-bottom 1rem
        .image
            width 100%
            display block
        .inner-content
            padding 0.6rem
            .bottom
                margin-top 0.3rem
                font-size 0.6rem
                .button
                    float right
                    .el-dropdown
                        font-size 0.6rem


    .loading-more
        display flex
        align-items center
        justify-content center
        padding 0.5rem
        border 1px solid #cccccc
        border-radius 0.2rem
        &:hover
            cursor pointer
</style>
