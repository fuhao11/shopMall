<template>
    <div class="shopCar">
        <common-head>
            <h3 slot="title" class="head-title">购物车</h3>
            <router-link to="/" replace slot="complete" class="complete">完成</router-link>
        </common-head>
        <div class="main">
            <div class="no-order" v-if="!shopList.length">
                <div class="no_order_content">
                    <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2011412278,2173586856&fm=26&gp=0.jpg" alt="">
                    <p>暂无订单</p>
                </div>
            </div>
            <ul v-else>
                <li class="item" v-for="(item, busIndex) in shopList" :key="item.businessid">
                    <div class="item-title">
                        <div class="item-title-left">
                            <!-- 点击选中商铺 -->
                            <span :class="[All || !item.select ? 'choose-shangjia choosen' : 'choose-shangjia']" @click="onBussis(item)"></span>
                            <!-- <svg t="1570158344034" class="item-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6927" width="20" height="20"><path d="M523.6736 948.6336a417.28 417.28 0 1 1 417.28-417.28 417.7408 417.7408 0 0 1-417.28 417.28z" fill="#FC445B" p-id="6928"></path><path d="M523.6736 134.5536a396.8 396.8 0 1 1-396.8 396.8 397.2608 397.2608 0 0 1 396.8-396.8m0-40.96a437.76 437.76 0 1 0 437.76 437.76 437.76 437.76 0 0 0-437.76-437.76z" fill="#FC445B" p-id="6929"></path><path d="M722.5344 595.5072a72.0896 72.0896 0 0 1-62.0544-34.9184 5.12 5.12 0 0 0-9.3184 0 71.2704 71.2704 0 0 1-122.5728 0 5.376 5.376 0 0 0-9.3184 0 72.0384 72.0384 0 0 1-62.0032 34.9184 71.0656 71.0656 0 0 1-61.44-34.9184 5.12 5.12 0 0 0-9.3184 0A72.2944 72.2944 0 0 1 310.8352 593.92a5.376 5.376 0 0 0-6.5536 5.12v148.48a13.4656 13.4656 0 0 0 13.4144 13.4144h411.904a13.4656 13.4656 0 0 0 13.4144-13.4144v-148.48a5.376 5.376 0 0 0-6.5024-5.12 72.8576 72.8576 0 0 1-13.9264 1.3824zM325.3248 370.7392a25.6 25.6 0 0 0-23.7056 16.3328l-36.5056 95.488a24.3712 24.3712 0 0 0-1.5872 11.008 65.1776 65.1776 0 0 0 129.9456-6.0416 65.1264 65.1264 0 0 0 130.2016 0 64.7168 64.7168 0 0 0 129.4848 0 65.5872 65.5872 0 0 0 130.6624 6.1952 24.3712 24.3712 0 0 0-1.6896-11.3152l-39.1168-99.0208a20.1216 20.1216 0 0 0-18.688-12.6976zM336.5888 349.3376h373.0432a24.2176 24.2176 0 0 0 23.3472-27.3408 22.5792 22.5792 0 0 0-22.272-20.7872H337.664a24.2176 24.2176 0 0 0-23.3472 27.3408 22.5792 22.5792 0 0 0 22.272 20.7872z" fill="#FCFCFC" p-id="6930"></path></svg> -->
                            <svg t="1570349051982" class="item-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2468" width="40" height="40"><path d="M523.6736 948.6336a417.28 417.28 0 1 1 417.28-417.28 417.7408 417.7408 0 0 1-417.28 417.28z" fill="#FC445B" p-id="2469"></path><path d="M523.6736 134.5536a396.8 396.8 0 1 1-396.8 396.8 397.2608 397.2608 0 0 1 396.8-396.8m0-40.96a437.76 437.76 0 1 0 437.76 437.76 437.76 437.76 0 0 0-437.76-437.76z" fill="#FC445B" p-id="2470"></path><path d="M722.5344 595.5072a72.0896 72.0896 0 0 1-62.0544-34.9184 5.12 5.12 0 0 0-9.3184 0 71.2704 71.2704 0 0 1-122.5728 0 5.376 5.376 0 0 0-9.3184 0 72.0384 72.0384 0 0 1-62.0032 34.9184 71.0656 71.0656 0 0 1-61.44-34.9184 5.12 5.12 0 0 0-9.3184 0A72.2944 72.2944 0 0 1 310.8352 593.92a5.376 5.376 0 0 0-6.5536 5.12v148.48a13.4656 13.4656 0 0 0 13.4144 13.4144h411.904a13.4656 13.4656 0 0 0 13.4144-13.4144v-148.48a5.376 5.376 0 0 0-6.5024-5.12 72.8576 72.8576 0 0 1-13.9264 1.3824zM325.3248 370.7392a25.6 25.6 0 0 0-23.7056 16.3328l-36.5056 95.488a24.3712 24.3712 0 0 0-1.5872 11.008 65.1776 65.1776 0 0 0 129.9456-6.0416 65.1264 65.1264 0 0 0 130.2016 0 64.7168 64.7168 0 0 0 129.4848 0 65.5872 65.5872 0 0 0 130.6624 6.1952 24.3712 24.3712 0 0 0-1.6896-11.3152l-39.1168-99.0208a20.1216 20.1216 0 0 0-18.688-12.6976zM336.5888 349.3376h373.0432a24.2176 24.2176 0 0 0 23.3472-27.3408 22.5792 22.5792 0 0 0-22.272-20.7872H337.664a24.2176 24.2176 0 0 0-23.3472 27.3408 22.5792 22.5792 0 0 0 22.272 20.7872z" fill="#FCFCFC" p-id="2471"></path></svg>
                            <span>{{item.businessname}}</span>
                        </div>
                        <div class="item-title-right">领券</div>
                    </div>
                    <div class="item-list" v-for="(innerItem,index) in item.product" :key="innerItem.id">
                        <!-- 点击选中商品 -->
                        <div class="choose-product" @click="onProductClick(item.product,innerItem,busIndex)">
                            <span :class="[All || !item.select || innerItem.prosel ? 'choose-product-detail choosen' : 'choose-product-detail']"></span>
                        </div>
                        <!-- <div class="choose-product">
                            <span class="choose-product-detail choosen"></span>
                        </div> -->
                        <div class="product-img">
                            <img :src="innerItem.proimg" alt="">
                        </div>
                        <div class="product-detail">
                            <div class="product-name">{{innerItem.proname}}</div>
                            <div class="product-mm">
                                <!-- <span>￥{{innerItem.price}}</span> -->
                                <span class="pro-price" v-for="(stateItem,sindex) in getState" :key="sindex" v-show="innerItem.id == getState[sindex].id">￥{{getState[sindex].price*getState[sindex].payNum}}</span>
                                <div class="pro-control">
                                    <span class="jian" @click.prevent="deProNum(innerItem.id)">-</span>
                                    <span class="product-num" v-for="(stateItem,stateIndex) in productList" :key="stateIndex" v-show="innerItem.id == stateItem.id" :ref="innerItem.id">{{stateItem.payNum}}</span>
                                    <span class="jia" @click.prevent="addProNum(innerItem.id)">+</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </li>
            </ul>
        </div>
        <div class="bottom">
            <div class="all-choose" @click="chooseAll">
                <span :class="[All? 'all allchoose' :'all']"></span>
                <span>全选</span>
            </div>
            <div class="other-controll">
                <span class="toShoucang">移入收藏夹</span>
                <span class="toDel" @click="onDel">删除</span>
            </div>
        </div>
        <tab-bar></tab-bar>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import TabBar from 'common/Tabbar'
import CommonHead from 'common/Header'
export default {
    name: "ShopCar",
    data() {
        return {
            All:false,
            shopList:[{
                'businessname':'商家名称',
                'businessid':'one',
                'business-logo': 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3247749323,1379996244&fm=26&gp=0.jpg',
                'product':[{
                    'proname':'商品名称商品名称商品名称商品名称商品名称',
                    'proimg':'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3247749323,1379996244&fm=26&gp=0.jpg',
                    'price':'99',
                    'id':'ya123123'
                },{
                    'proname':'商品名称商品名称商品名称商品名称商品名称',
                    'proimg':'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3247749323,1379996244&fm=26&gp=0.jpg',
                    'price':'99',
                    'id':'za123123'
                }]
            },{
                'businessname':'商家名称2',
                'businessid':'two',
                'business-logo': 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3247749323,1379996244&fm=26&gp=0.jpg',
                'product':[{
                    'proname':'商品名称商品名称商品名称商品名称商品名称',
                    'proimg':'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3247749323,1379996244&fm=26&gp=0.jpg',
                    'price':'99',
                    'id':'aa123123'
                }]
            }],
            proList:[],
            proState:{}
        }
    },
    components: {
        TabBar,
        CommonHead
    },
    computed:{
        ...mapState({
            productList:'productList'
        }),
        ...mapGetters([
            'getState'
        ])
    },
    methods: {
        //增加商品
        addProNum(id){
            this.$store.commit('addPro',id)
        },
        deProNum(id){
            this.$store.commit('dePro',id)
        },
        //删除
        onDel () {
            var _this = this;
            console.log(this.shopList)
            if(confirm('确定要删除吗？')==true){
                _this.All = false;
                for (let i=_this.shopList.length-1;i>=0;i--){
                    console.log(_this.shopList[i])
                    if(!_this.shopList[i].select){
                        //删除商家和对应商品
                        _this.shopList.splice(i,1)
                    }else{
                        _this.shopList[i].product.map((proItem,proIndex) => {
                            if(proItem.prosel){
                                //删除商品
                                _this.shopList[i].product.splice(proIndex,1)
                            }
                        })
                    }
                }
                
            }
        },
        onProductClick (product,innerItem,busIndex) {
            //选择商品
            var _this = this;
            innerItem.prosel=!innerItem.prosel
            if(product.length==1){
                _this.$set(_this.shopList[busIndex],'select',!innerItem.prosel)
            }
            console.log(_this.shopList[busIndex])
            // _this.shopList.map((item) => {
            //     item.product.map((innerItem) => {
            //         if(innerItem.id == product.id){
            //             _this.$set(innerItem,'prosel',true)
            //         }
            //     })
            // })
            //this.$store.commit('changeState',proid)
            // if(this.$refs[proid][0].children[0].className.indexOf('choosen') > -1){
            //     this.$refs[proid][0].children[0].classList.remove('choosen')
            // }else{
            //    this.$refs[proid][0].children[0].className += ' choosen' 
            // }
        },
        //选择商家
        onBussis (item) {
            var _this = this;
            item.select=!item.select
            item.product.map((inner) => {
                _this.$set(inner,'prosel',!item.select)
            })
        },
        //全选
        chooseAll () {
            this.All = !this.All
            var _this = this
            this.shopList.map((item) => {
                // item.select=!item.select 
                _this.$set(item,'select',!_this.All)
                item.product.map((inner) => {
                    _this.$set(inner,'prosel',_this.All)
                    // console.log(inner.prosel)
                })
            })
        }
    },
    mounted () {
        var _this = this;
        _this.shopList.forEach((item) => {
            //商铺选中状态
            _this.$set(item,'select',true)
            item.product.map((proItem) => {
                //商品选中状态
                _this.$set(proItem,'prosel',false)
                //+-购物车
                this.$store.commit('initState',proItem)
            })
            
        })
        // _this.shopList.forEach((item) => {
        //     for(var i=0;i<item.product.length;i++){
        //         _this.proList.push(item.product[i])
        //         //this.$store.commit('initState',item.product[i].id)
        //     }
        // })
        //this.proState = this.$store.state.productState
        // console.log(this.productList)
        
        // console.log(_this.shopList)
    },
    destroyed(){
        this.shopList.splice(0,this.shopList.length)
        this.$store.state.productList = []
    }
}
</script>
<style lang="stylus" scope>
@import '../style/mixin.styl'
.shopCar
    width:100%
    height:100vh
    background:#eee
    font-size:.45rem
    .complete
        position:absolute
        top:0
        right:.86rem
    .main
        width:94%
        height:auto
        margin:.2rem auto
        padding:1.5rem 0 3rem
        .no-order
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
            padding:.13rem
            margin-bottom:.4rem
            background:#fff
            border-radius:.15rem
            box-sizing:border-box
            .item-title
                height:1.5rem
                line-height:1.5rem
                display:flex
                justify-content:space-around
                align-items center
                .item-title-left
                    flex:1
                    .item-icon
                        width:.65rem
                        height:.65rem
                        position:relative
                        top:.15rem
                        margin-left:.2rem
                        border-radius:.2rem
                    .choose-shangjia
                        display:inline-block
                        width:.5rem
                        height:.5rem
                        background:url('../../assets/images/choose_no.png') no-repeat center
                        background-size:100%
                        margin-left:.15rem
                    .choosen
                        background:url('../../assets/images/choose_yes.png') no-repeat center
                        background-size:100%
                .item-title-right
                    color:red
                    font-weight:900
                    margin-right:.5rem
                    font-size:.35rem
            .item-list
                width:100%
                height:auto
                // margin-top:.54rem
                display:flex
                justify-content:space-between
                align-items:center
                .choose-product-detail
                    display:inline-block
                    width:$choosewidth
                    height:$chooseheight
                    background:url('../../assets/images/choose_no.png') no-repeat center
                    background-size:100%
                    margin-left:.15rem
                .choosen
                        background:url('../../assets/images/choose_yes.png') no-repeat center
                        background-size:100%
                .product-img
                    img
                        width:2.7rem
                        height:2.7rem
                .product-detail
                    flex:.9
                    line-height:1.3rem
                    .product-name
                        width:4.5rem
                        ellipsis()
                    .product-mm
                        width:100%
                        display:flex
                        justify-content:space-between
                        .pro-price
                            display:inline-block
                            width:2rem
                            font-size:.35rem
                            ellipsis()
                        .pro-control
                            flex:.7
                            display:flex
                            justify-content:space-around
                            align-items:center
                            .jian,.jia
                                display:inline-block
                                width:.75rem
                                height:.75rem
                                background:#ccc
                                text-align:center
                                line-height:.75rem
    .bottom
        width:100%
        height:auto
        line-height:1.5rem
        background:#fff
        display:flex
        justify-content:space-between
        position:fixed
        left:0
        bottom:2rem
        .all-choose
            display:flex
            align-items:center
            margin-left:.3rem
            .all
               display:inline-block
               width:.45rem
               height:.45rem
               background:url('../../assets/images/choose_no.png') no-repeat center
               background-size:100% 
               margin:0 .15rem
            .allchoose
                background:url('../../assets/images/choose_yes.png') no-repeat center
                background-size:100% 
        .other-controll
            margin-right:.5rem
            .toShoucang
                width:2.5rem
                background:orange
                margin-right:.15rem
                shopCarBottom()
            .toDel
                width:1.9rem
                background:red
                shopCarBottom()
</style>