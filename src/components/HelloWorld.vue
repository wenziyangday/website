<template>
    <div class="hello">
        {{childMsg}} <b style="color: #ff0000;">{{i}}</b>
        <Child @getEmitToFather="getDataFromChild"></Child>
        <el-button type="text" @click.stop="showDialog()">点击打开 Dialog</el-button>
        <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
            <span @click="tex()">点击</span>
            <div id="myChart" :style="{width: '300px', height: '300px'}"></div>
            <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false;">取 消</el-button>
      <el-button type="primary" @click="dialogVisible = false;">确 定</el-button>
      </span>
        </el-dialog>
        <div @click.stop="showInnerHtml('a')" style="width: 300px; height: 300px; background: #ff0000;">
            a
            <div @click.stop="showInnerHtml('b')" style="width: 200px; height: 200px; background: #fff000;">
                b
                <div @click.stop="showInnerHtml('c')" style="width: 100px; height: 100px; background: #fffff0;">
                    c
                </div>
            </div>
        </div>

        <div class="" id="echartsOfMy" :style="{width: '300px', height: '300px'}"></div>

        asfasdfasd
        <!--<ChildFun v-on:childMethod="parentMethod"></ChildFun>-->


    </div>
</template>

<script>
    import Child from './child';

    export default {
        name: 'HelloWorld',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App',
                childMsg: '',
                dialogVisible: false,
                i: 0
            }
        },
        components: {
            Child
        },
        methods: {
            showInnerHtml(s) {
                alert(s)
            },
            getDataFromChild(data) {
                this.childMsg = data;
            },
            showDialog() {
                this.i++;
                this.dialogVisible = true;
                this.$nextTick(function () {
                    this.drawLine();
                });
            },
            tex() {
                console.log('jkjsjdkjk', this.i);
            },
            dos() {
                this.$axios.get('/apis/users/getInfo').then(function (res) {
                    console.log(res, 68);
                })
            },
            doThis: function () {
                alert("noclick");
            },
            dodo: function () {
                alert("dodo");
            },
            drawLine() {
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById('myChart'))
                // 绘制图表
                myChart.setOption({
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
                });

                myChart.on('click', function (params) {
                    let a = params.name
                    console.log(a, params);


                    /* myChart.setOption(
					   {
						 title: {text: '在Vue中使用echarts'},
						 tooltip: {},
						 xAxis: {
						   data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
						 },
						 yAxis: {},
						 series: [{
						   id: '',
						   name: '销量',
						   type: 'line',
						   data: [5, 20, 36, 10, 10, 20]
						 }]
					   }
					 )*/
                })
            },
            drawLines() {
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById('echartsOfMy'))
                let option = {
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
                    }],
                    toolbox: {
                        feature: {
                            dataView: { //数据视图
                                show: true
                            },
                            restore: { //重置
                                show: true
                            },
                            dataZoom: { //数据缩放视图
                                show: true
                            },
                            saveAsImage: {//保存图片
                                show: true
                            },
                            magicType: {//动态类型切换
                                type: ['bar', 'line']
                            }
                        }
                    }
                };
                // 绘制图表
                myChart.setOption(option);

                /* myChart.on('click', function (params) {
				   let a = params.name
				   console.log(a, params);


				   myChart.setOption(
					 {
					   title: {text: '在Vue中使用echarts'},
					   tooltip: {},
					   xAxis: {
						 data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
					   },
					   yAxis: {},
					   series: [{
						 id: '',
						 name: '销量',
						 type: 'line',
						 data: [5, 20, 36, 10, 10, 20]
					   }]
					 }
				   )
				 })*/
            },
            parentMethod() {
                console.log('parents', 175);
            }
        },
        mounted() {
            this.drawLines();
            /*this.$axios.post('api/login', {
                username: 'admin',
                password: 'admin'
            }).then(res => {
                console.log(res);
            })*/

            /*this.$axios.get('api/user').then(res => {
                console.log(res);
            })*/

            this.$axios.get('api/users/getInfo').then(function (res) {
                console.log(res, 198);
            })

        },
        destroyed() {
            this.$off('click')
        }
    }
</script>

<style lang="stylus" type="text/stylus">
    .hello
        width 100%
</style>
