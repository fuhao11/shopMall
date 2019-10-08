<template>
    <div class="myorder">
        <common-head class="myorder-header" :showBack="true">
            <h3 slot="title" class="myorder-title">我的订单</h3>
        </common-head>
        <ul class="nav-bar">
            <li v-for="(item,index) in nav" :key="index" :class="[nav_choose==index?'border-bottom':'']" @click="onNav(index)">{{item}}</li>
        </ul>

        <section class="main">
            <div class="no_order" v-if="orderList.length==0">
                <div class="no_order_content">
                    <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2011412278,2173586856&fm=26&gp=0.jpg" alt="">
                    <p>暂无订单</p>
                </div>
            </div>
            <ul v-else>
                <li class="item" v-for="item in orderList" :key="item.id" :data-name="item.status" v-if="showNav==item.status || nav_choose==0">
                    <div class="item-title">
                        <div class="bussiness">
                            <img class="bus_logo" :src="item.proimg" alt="">
                            <span class="bus_name">{{item.proname}}</span>
                        </div>
                        <div class="pro_status">{{toCn(item.status)}}</div>
                    </div>
                    <div class="product">
                        <img class="pro_img" :src="item.proimg" alt="">
                        <div class="pro_detail">
                            <div class="pro_name">
                                <span class="item-proname">{{item.proname}}</span>
                                <span class="pro_num">x{{item.num}}</span>
                            </div>
                            <p>￥{{item.price}}</p>
                        </div>
                    </div>
                    <div class="pro_other">
                        <div class="shifu">实付 ￥999 (含运费￥0.00)</div>
                        <!-- 代付款 -->
                        <div class="go_pay" v-if="item.status=='daifukuan'">去支付</div>
                        <!-- 待收货 -->
                        <div class="look" v-if="item.status=='daishouhuo'">查看物流</div>
                        <div class="getpro" v-if="item.status=='daishouhuo'">确认收货</div>
                        <!-- 待发货 -->
                        <div class="tips_fahuo" v-if="item.status=='daifahuo'">提醒发货</div>
                        <!-- 待评价 -->
                        <div class="order_again" v-if="item.status=='daipingjia'">再来一单</div>
                        <div class="go_dis" v-if="item.status=='daipingjia'">去评价</div>
                    </div>
                </li>
            </ul>
        </section>
        <section class="recommend">
            <div class="rec-title">
                <p>· 精品推荐 ·</p>
                <p class="en">R E C O M M E N D</p>
            </div>
            <ul class="pubu">
                <li class="pubu-item" v-for="pro in recommend" :key="pro.id">
                    <div class="img-wrapper">
                        <div class="img-content"><img :src="pro.proimg" alt=""></div>
                        
                    </div>
                    <div class="pubu-item-detail">
                        <p class="pubu-proname">{{pro.proname}}</p>
                        <b>￥{{pro.price}}</b>
                    </div>
                </li>
            </ul>
        </section>
    </div>
</template>
<script>
import CommonHead from 'common/Header'
export default {
    name:"myorder",
    data() {
        return {
            nav: ["全部","待付款","待发货","待收货","待评价"],
            nav_choose: 0,
            recommend:[{
                'proname':'商品名称商品名称商品名称商品名称商品名称',
                'proimg':'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3247749323,1379996244&fm=26&gp=0.jpg',
                'price':'99',
                'id':'ya123123'
                },{
                'proname':'商品名称商品名称商品名称商品名称商品名称',
                'proimg':'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3247749323,1379996244&fm=26&gp=0.jpg',
                'price':'99',
                'id':'za123123'
            },{
                'proname':'商品名称商品名称商品名称商品名称商品名称',
                'proimg':'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3247749323,1379996244&fm=26&gp=0.jpg',
                'price':'99',
                'id':'aa123123'
            }],
            orderList:[{
                'proname':'商品名称商品名称商品名称商品名称商品名称',
                'proimg':'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3247749323,1379996244&fm=26&gp=0.jpg',
                'price':'99',
                'id':'yya123123',
                'num':111,
                'status':'daifukuan'
                },{
                'proname':'商品名称商品名称商品名称商品名称商品名称',
                'proimg':'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3247749323,1379996244&fm=26&gp=0.jpg',
                'price':'99',
                'id':'zza123123',
                'num':112,
                'status':'daifahuo'
            },{
                'proname':'商品名称商品名称商品名称商品名称商品名称',
                'proimg':'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3247749323,1379996244&fm=26&gp=0.jpg',
                'price':'99',
                'id':'aa123123',
                'num':12,
                'status':'daishouhuo'
            },{
                'proname':'商品名称商品名称商品名称商品名称商品名称',
                'proimg':'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3247749323,1379996244&fm=26&gp=0.jpg',
                'price':'99',
                'id':'bza123123',
                'num':13,
                'status':'daipingjia'
            }]
        }
    },
    components:{
        CommonHead
    },
    computed:{
        showNav () {
            if(this.nav_choose==0){
                return 'all'
            }else{
               return this.orderList[this.nav_choose-1].status
            }
        }
    },
    methods:{
        //点击上方导航切换菜单
        onNav (index) {
            this.nav_choose = index
        },
        toCn (status) {
            switch (status) {
                case 'daifukuan':
                    return '待付款';
                case 'daifahuo':
                    return '待发货';
                case 'daishouhuo':
                    return '待收货';
                case 'daipingjia':
                    return '待评价'
            }
        }
        
    },
    created () {
        var _this = this
        var localList = [..._this.orderList]
        console.log(localList)
        // localList.map((item) => {
        //     item.
        // })
    }
}
</script>
<style lang="stylus" scoped>
    @import '../style/mixin.styl'
    .myorder
        width:100%
        height:100%
        font-size:.42rem
        background:#eee
        .myorder-header
            background:#fff
            .myorder-title
                font-size:.47rem
        .nav-bar
            width:100%
            height:1.3rem
            background:#fff
            margin-top:1.5rem
            display:flex
            justify-content:space-around
            align-items:center
            li
                padding:.35rem .2rem
            .border-bottom
                border-bottom:.05rem solid orange
                color:red
        .main
            width:94%
            margin:.3rem auto
            .no_order
                width:100%
                height:7rem
                .no_order_content
                    width:100%
                    margin:3rem auto
                    img
                        width:3rem
                        height:3rem
                        display:block
                        margin:0 auto
                    p
                        text-align:center
                        line-height:3rem
            .item
                width:100%
                height:auto
                min-height:4rem
                background:#fff
                border-radius:.2rem
                padding:.4rem
                margin-top:.4rem
                box-sizing:border-box
                .item-title
                    display:flex
                    justify-content:space-between
                    align-items:center
                    line-height:1.2rem
                    margin-bottom:.3rem
                    .bussiness
                        width:79%
                        display:flex
                        justify-content:space-between
                        .bus_logo
                            width:1.2rem
                            height:1.2rem
                            
                        .bus_name
                            flex:.95
                            // width:64%
                            display:inline-block
                            ellipsis()
                    .pro_status
                            color:red
                            font-weight:900
                .product
                    width:100%
                    box-sizing:border-box
                    display:flex
                    justify-content:space-between
                    align-items:center
                    .pro_img
                        width:2.7rem
                        height:2.7rem
                        border-radius:.2rem
                    .pro_detail
                        width:61%
                        flex:8
                        line-height:1.5rem
                        margin-left:.2rem
                        .pro_name
                            display:flex
                            justify-content:space-between
                            align-items:center
                            .item-proname
                                ellipsis()
                            .pro_num
                                font-size:.3rem
                .pro_other
                    width:100%
                    font-size:.1rem
                    display:flex
                    justify-content:space-around
                    align-items center
                    .shifu
                        flex:30%
                        font-size:.26rem
                        color:#e4e4e4
                    .go_pay,.tips_fahuo,.order_again,.go_dis
                        orderbtn()
                    .look,.getpro
                        orderbtn()
                    .getpro,.go_dis
                        border-color:orange
                        color:orange
                        margin-left:.4rem
        .recommend
            width:100%
            height:auto
            margin:2.6rem auto 0
            .rec-title
                text-align:center
                line-height:1.3rem
                font-weight:700
                // font-size:.86rem
                .en
                    color:#ccc
            .pubu
                width:100%
                height:auto
                display:flex
                flex-wrap:wrap
                // justify-content:space-around
                // align-items:center
                .pubu-item
                    width:46%
                    margin-left:.26rem
                    margin-bottom:.35rem
                    .img-wrapper
                        width:100%
                        height:0
                        // box-sizing:border-box
                        padding-bottom: 100%
                        overflow:hidden
                        background:#ccc
                        position: relative
                        // border-top-left-radius: .4rem
                        // border-top-right-radius: .4rem
                        .img-content
                            width:100%
                            height:100%
                            position:absolute
                            top:0
                            left:0
                            right:0
                            bottom:0
                            padding:.5rem
                            box-sizing:border-box
                            img
                                display:block
                                width:100%
                                height:100%
                    .pubu-item-detail
                        font-size:.42rem
                        line-height:1rem
                        padding-left:.2rem
                        background:#fff
                        border-bottom-left-radius: .2rem
                        border-bottom-right-radius: .2rem
                        b
                            color:red
                        .pubu-proname
                            ellipsis ()
</style>