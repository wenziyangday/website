/*
*
* @author by wenziyang
* @email: wenziyangday@gmail.com / 1483319587@qq.com
* @createTime: 2018/04/09
* @updateTime: 2018/05/29
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

    },

    arrToObj(arr) {
        /*
		  *
		  * 描述：
		  * 将数组转成以其下标为val的对象
		  *
		  * */
        const obj = {};
        for (let i in arr) {
            let key = arr[i];
            obj[key] = i;
        }
        return obj;   //  ['a', 'b', 'c', 'd'] => {a: 0, b: 1, c: 2}
    },

    /*
    *
    * 时间日期类
    * todo
    *
    * */

    countDown(val) {
        const type = typeof val;
        let back = 0;
        switch (type) {
            case 'string':
                back = 10;
                break;
            case 'number':
                back = 0;
                break;
            default:
                back = 'zhanshjhjshjhj'
        }
    }


};

export default util;

