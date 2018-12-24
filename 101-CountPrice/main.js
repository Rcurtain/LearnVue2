new Vue({
    el: '#shopping-cart',
    data: {
        productList:[
            {
                'pro_name': '【斯文】甘油 | 丙三醇',//产品名称
                'pro_brand': 'skc',//品牌名称
                'pro_place': '韩国',//产地
                'pro_purity': '99.7%',//规格
                'pro_min': "215千克",//最小起订量
                'pro_depot': '上海仓海仓储',//所在仓库
                'pro_num': 3,//数量
                'pro_img': '../../images/ucenter/testimg.jpg',//图片链接
                'pro_price': 800//单价
            }
        ]
    },
    computed: {},
    methods: {},
    mounted: function () {
        //为productList添加select（是否选中）字段，初始值为true
        var _this=this;
        //为productList添加select（是否选中）字段，初始值为true
        this.productList.map(function (item) {
            _this.$set(item, 'select', true);
        })
        //要像上面这样写双向绑定才能起效，下面的写法是有问题的，双向绑定不起效的！
        //this.productList.map(function (item) {item.select=true})
    }
})