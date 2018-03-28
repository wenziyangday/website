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
      }
    },
    mounted() {
      // this.drawLine();
    },
    destroyed() {
      this.$off('click')
    }
  }
</script>

<style lang="stylus" type="text/stylus">
  .hello
    background red
</style>
