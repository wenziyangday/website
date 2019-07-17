//  主侧边栏手动配置
const mainSide = [
    {
        _id: 'admin',
        pId: "-2",
        columnName: '首页',
        icon: 'icon-shouye',
        is_id: true,
        state: 1,
    },
    {
        _id: '-1',
        pId: "-2",
        columnName: '栏目管理',
        icon: 'icon-lanmuguanli',
        is_id: false,
        state: 1
    },
    {
        _id: 'goodsManage',
        pId: "-2",
        columnName: '商品管理',
        icon: 'icon-shangpinguanli',
        is_id: true,
        state: 1,
    },
    {
        _id: 'adsManage',
        pId: "-2",
        columnName: '广告管理',
        icon: 'icon-guanggaoguanli',
        is_id: true,
        state: 1,
    },
    {
        _id: 'ordersManage',
        pId: "-2",
        columnName: '订单管理',
        icon: 'icon-dingdanguanli',
        is_id: true,
        state: 1,
    },
    {
        _id: 'support',
        pId: "-2",
        columnName: '辅助功能',
        icon: 'icon-fuzhugongneng',
        is_id: true,
        state: 1,
    },
    {
        _id: 'rightsManage',
        pId: "-2",
        columnName: '权限管理',
        icon: 'icon-quanxianguanli',
        is_id: true,
        state: 1,
    },
    {
        _id: 'basicConfig',
        pId: "-2",
        columnName: '基本设置',
        icon: 'icon-jichushezhi',
        is_id: true,
        state: 1,
    },
    {
        _id: 'blockFun',
        pId: "-2",
        columnName: '功能模块',
        icon: 'icon-gongneng',
        is_id: true,
        state: 1,
    }
];

//  子侧边栏手动配置
const subSide = [
    {
        _id: 'pics',
        pId: "support",
        columnName: '网站特殊图片处理',
        is_id: true,
        state: 1,
    },
    {
        _id: 'tagsManage',
        pId: "support",
        columnName: '标签管理',
        is_id: true,
        state: 1,
    },
    {
        _id: 'adjustColumn',
        pId: "support",
        columnName: '栏目调整',
        is_id: true,
        state: 1,
    },
    {
        _id: 'enums',
        pId: "support",
        columnName: '基础枚举值',
        is_id: true,
        state: 1,
    },
    {
        _id: 'adminCol',
        pId: "support",
        columnName: '后管栏目',
        is_id: true,
        state: 1,
    },
    {
        _id: 'register',
        pId: "support",
        columnName: '注册/授权用户管理',
        is_id: true,
        state: 1,
    },
];

export default [...mainSide, ...subSide];
