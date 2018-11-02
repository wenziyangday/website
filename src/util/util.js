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

    /*idPid(data) {
        let pos = {}, i = 0, tree = [];
        while (data.length !== 0) {
            if (data[i].parentId === '') {
                tree.push({
                    id: data[i]._id,
                    columnName: data[i].columnName,
                    children: []
                });
                pos[data[i]._id] = [tree.length - 1];
                data.splice(i, 1);
                i--;
            } else {
                let posArr = pos[data[i].parentId];

                if (posArr !== undefined) {

                    let obj = tree[posArr[0]];
                    for (let j = 1; j < posArr.length; j++) {
                        obj = obj.children[posArr[j]];
                    }

                    obj.children.push({
                        id: data[i].id,
                        columnName: data[i].columnName,
                        children: []
                    });
                    pos[data[i].id] = posArr.concat([obj.children.length - 1]);
                    data.splice(i, 1);
                    i--;
                }
            }
            i++;
            if (i > data.length - 1) {
                i = 0;
            }
        }
        return tree;
    },*/

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

