/*
*
* @author by wenziyang
* @email: wenziyangday@gmail.com / 1483319587@qq.com
* @createTime: 2018/04/09
* @updateTime: 2018/04/09
* @state: collecting....
*
* */

const util = {

  /*
    *
    * dom操作处理
    *
    * */

  calculateHeight: function () {
    const clientHeight = document.body.offsetHeight || window.innerHeight;
    return clientHeight - 64 - 32 - 64; // 64(breadcrumbs)、32(margin)、64(padding)
  },

  /*
    *
    * 字符串处理
    *
    * */

  numStrDivide(str) {
    return parseFloat(str).toLocaleString();  // 123456789 => 123,456,789
  },

  /*
	  *
	  * 数据处理
	  *
	  * */

  data() {

  }

};

export default util;

