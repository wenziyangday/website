<template>
    <!--admin index-->
    <div class="default">

        <el-row>
            <el-col :span="6">
                <div class="" id="barDemo" style="width: 100%; height: 300px"></div>
            </el-col>
            <el-col :span="6">
                <div class="" id="pieDemo" style="width: 100%; height: 300px"></div>
            </el-col>
            <el-col :span="6">3</el-col>
            <el-col :span="6">4</el-col>
        </el-row>


        <div>
            浏览量排名、tag 云、最新、常用的板块
        </div>
        <el-row type="flex" :gutter="32">
            <el-col :span="18">
                4454545
            </el-col>
            <el-col :span="6">
                56565656
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: 'default',
        data() {
            return {
                barOPts: {
                    title: {text: '在Vue中使用echarts'},
                    tooltip: {},
                    xAxis: {
                        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
                    },
                    yAxis: {},
                    series: [{
                        name: '销量',
                        type: 'bar',
                        data: [5, 20, 36, 10, 10, 20]
                    }]
                },
                pieOpts: {
                    title: {test: '饼图'},
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b}: {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        x: 'left',
                        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
                    },
                    series: [
                        {
                            name: '访问来源',
                            type: 'pie',
                            radius: ['50%', '70%'],
                            avoidLabelOverlap: false,
                            label: {
                                normal: {
                                    show: false,
                                    position: 'center'
                                },
                                emphasis: {
                                    show: true,
                                    textStyle: {
                                        fontSize: '30',
                                        fontWeight: 'bold'
                                    }
                                }
                            },
                            labelLine: {
                                normal: {
                                    show: false
                                }
                            },
                            data: [
                                {value: 335, name: '直接访问'},
                                {value: 310, name: '邮件营销'},
                                {value: 234, name: '联盟广告'},
                                {value: 135, name: '视频广告'},
                                {value: 1548, name: '搜索引擎'}
                            ]
                        }
                    ]
                }
            }
        },
        methods: {
            drawCharts(id, opts) {
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById(id), 'macarons');
                // 绘制图表
                myChart.setOption(opts);
            }
        },
        mounted() {
            this.drawCharts('barDemo', this.barOPts);
            this.drawCharts('pieDemo', this.pieOpts);
        }
    }
</script>

<style lang="stylus" type="text/stylus">

</style>
