<template>
    <div class="historyWrapper" ref="historyWrapper">
        <div class="historyLook">
            <me-head @selectChange="selectChange" :selectList="selectList" :showList="showList">
                <h3 class="head-title" slot="title" @click="titleClick">
                    {{selectVal}}
                    <svg t="1570697175077" class="choose-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2434" width="20" height="20"><path d="M949.7 322.1c-12.7-12.7-33.3-12.8-46-0.2L511.9 713.3l-393-392.4c-12.6-12.6-33.2-12.5-46 0.2-12.7 12.7-12.8 33.3-0.2 45.9l412.7 412.2c0.9 1.2 1.9 2.4 3.1 3.6 12.7 12.7 33.3 12.8 46 0.2l415.4-415c12.6-12.6 12.6-33.2-0.2-45.9z" p-id="2435"></path></svg>
                </h3>
                <span slot="clear" class="clear">清空</span>
            </me-head>
            <section class="historyContent">
                <ul>
                    <li class="item" v-for="item in historyOrderList" :key="item.shopId">
                        <!-- 商家 -->
                        <div class="item-bus">
                            <span class="choose"></span>
                            <div class="bus-info">
                                <img class="bus-logo" :src="item.shopLogo" alt="">
                                <span class="bus-name">{{item.shopName}}</span>
                            </div>
                            <div class="get-quan">领券</div>
                        </div>
                        <!-- 商品 -->
                        <div class="item-pro">
                            <section class="pro-list" v-for="innerItem in item.cartlist" :key="innerItem.productId">
                                <span class="choose"></span>
                                <div class="pro-img">
                                    <img :src="innerItem.defaultPic" alt="">
                                </div>
                                <div class="pro-info">
                                    <p class="pro-name">{{innerItem.productName}}</p>
                                    <p>￥ <span>{{innerItem.price}}</span></p>
                                </div>
                            </section>
                        </div>
                    </li>
                    
                </ul>
                <div class="pullup-wrapper">
                    <svg t="1570763357170" :class="[isPullUp ? 'pulluploading' : '']" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2709" width="20" height="20"><path d="M528.4 1024c-282.3 0-512-229.7-512-512S246 0 528.4 0c131 0 255.6 49.4 351 139.2 11.7 11 12.2 29.3 1.2 41-11 11.6-29.3 12.2-41 1.2C755 101.8 644.5 58 528.4 58c-250.4 0-454 203.7-454 454s203.7 454 454 454c188.7 0 354.9-113.6 423.3-289.5 5.8-14.9 22.6-22.4 37.5-16.5 14.9 5.8 22.3 22.6 16.5 37.5C928.5 895.9 741.2 1024 528.4 1024z" fill="#707070" p-id="2710"></path></svg>
                </div>
            </section>
            <div class="pulldown-wrapper" :style="top">
                <svg t="1570763357170" :class="[isPullDown ? 'pulldownloading' : '']" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2709" width="20" height="20"><path d="M528.4 1024c-282.3 0-512-229.7-512-512S246 0 528.4 0c131 0 255.6 49.4 351 139.2 11.7 11 12.2 29.3 1.2 41-11 11.6-29.3 12.2-41 1.2C755 101.8 644.5 58 528.4 58c-250.4 0-454 203.7-454 454s203.7 454 454 454c188.7 0 354.9-113.6 423.3-289.5 5.8-14.9 22.6-22.4 37.5-16.5 14.9 5.8 22.3 22.6 16.5 37.5C928.5 895.9 741.2 1024 528.4 1024z" fill="#707070" p-id="2710"></path></svg>
            </div>
        </div>
    </div>
</template>
<script>
import meHead from 'common/meHeader'
import BScroll from 'better-scroll'

export default {
    data() {
        return {
            selectVal:'历史浏览',
            showList: false,
            selectList:['按时间查看','按店铺查看'],
            historyList:{
                "code" : 200 ,
                "orderData" : [
                    {
                    "shopId": 1,
                    "shopName":"京东自营",
                    "shopLogo":"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3247749323,1379996244&fm=26&gp=0.jpg",
                    "cartlist": [
                        {
                        "id": 'ty',
                        "shopId": 1,
                        "shopName": "京东自营",
                        "defaultPic": "https://img30.360buyimg.com/popWareDetail/jfs/t3208/194/7616404169/244198/369625db/58b7d093N03520fb7.jpg",
                        "productId": 1,
                        "productName": "三只松鼠_零食大礼包",
                        "color": "黑色",
                        "size": "18L",
                        "price": 20,
                        "count":1
                        },
                        {
                        "id": '2rt',
                        "shopId": 1,
                        "shopName": "京东自营",
                        "defaultPic": "https://img14.360buyimg.com/n0/jfs/t2971/15/167732091/93002/204c1016/574d9d9aNe4e6fa7a.jpg",
                        "productId": 2,
                        "productName": "小米心跳手环",
                        "color": "白色",
                        "size": "20XXL",
                        "price": 148,
                        "count": 1
                        }
                    ]
                    }
                ,
                    {
                    "shopId": 2,
                    "shopName":"海澜之家",
                    "shopLogo":"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3247749323,1379996244&fm=26&gp=0.jpg",
                    "cartlist": [
                        {
                        "id": '1qwe',
                        "shopId": 2,
                        "shopName": "海澜之家",
                        "defaultPic": "https://img30.360buyimg.com/popWaterMark/jfs/t4075/83/1343091204/132469/9034cb9c/5873496bN68020ba8.jpg",
                        "productId": 1,
                        "productName": "短袖T恤男 2017夏季新品",
                        "color": "蓝色",
                        "size": "30X",
                        "price": 181,
                        "count":1
                        }
                    ]
                    },
                    {
                        "shopId": 3,
                        "shopName":"OPPO官方旗舰店",
                        "shopLogo":"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3247749323,1379996244&fm=26&gp=0.jpg",
                        "cartlist": [
                            {
                            "id": '1asd',
                            "shopId": 3,
                            "shopName": "OPPO官方旗舰店",
                            "defaultPic": "https://img10.360buyimg.com/cms/jfs/t6064/272/2163314583/157700/442d6477/593c1c49N7c63a7d9.jpg",
                            "productId": '1qwe',
                            "productName": "OPPO R11 全网通",
                            "color": "蓝色",
                            "size": "30X",
                            "price": 1999,
                            "count":1
                            },
                            {
                            "id": '2qwe',
                            "shopId": 3,
                            "shopName": "OPPO官方旗舰店",
                            "defaultPic": "https://img14.360buyimg.com/n0/jfs/t3142/194/4953241722/254855/1651c2b1/585b9021Nf653e48a.jpg",
                            "productId": '1asd',
                            "productName": "OPPO R9 全网通",
                            "color": "蓝色",
                            "size": "30X",
                            "price": 999,
                            "count":1
                            }
                        ]
                        }

                ]
             },
             top:{
                 top: '-50px'
             },
             isPullDown:false,
             isPullUp:false,
             scrollHistory:null,
             historyOption:{
                click:true,
                probeType:3,
                startY: 0,
                refreshDelay:20,
                pullDownRefresh : {
                    threshold : 90,
                    stop : 50
                },
                pullUpLoad:{
                    threshold: 0
                }
             }

        }
    },
    components:{
        meHead
    },
    computed:{
        historyOrderList(){
            this.historyList.orderData.forEach((item, index) => {
                item.cartlist.forEach((inner) => {
                    this.$set(inner,'price',this.handletoFixed(inner.price))
                })
            })
            return this.historyList.orderData
        }
    },
    methods:{
        titleClick(){
            this.$children[0].show = true
        },
        selectChange(t){
            this.selectVal = t
        },
        handletoFixed(p){
            return p.toFixed(2)
        },
        initScroll(){
            var _this = this;
            _this.scrollHistory.on('touchEnd', (pos) => {
                if(pos.y > 50){
                    _this.top = { top: '10px' }
                }
            });
            //下拉
            _this.scrollHistory.on('pullingDown', () => {
                _this.isPullDown = true;
                console.log('loadMore')
                setTimeout(() => {
                    _this.scrollHistory.finishPullDown()
                    _this.top = { top: '-50px' }
                    _this.scrollHistory.refresh()
                },3000)
            });

            _this.scrollHistory.on('pullingUp', () => {
                console.log('上拉加载')
                _this.isPullUp = true
                setTimeout(() => {
                    _this.isPullUp = false
                    _this.scrollHistory.finishPullUp()
                    _this.scrollHistory.refresh()
                },2000)
            })
        }
    },
    mounted(){
        var _this = this;
        _this.scrollHistory = new BScroll(_this.$refs.historyWrapper,_this.historyOption );

        _this.$nextTick(() =>{
            _this.initScroll()
        })
    }
}
</script>
<style lang="scss" scoped>
    @import '../../style/bus';
    .historyWrapper{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #eee;
        overflow: hidden;
        z-index: 66;
        .head-title{
            font-size: .47rem;
        }
        .clear{
            position: absolute;
            top:0;
            right: .3rem;
            font-size: .35rem;
        }
        .choose-icon{
            width: .3rem;
            height: .3rem;
        }
        .pullup-wrapper{
            width:100%;
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            bottom: -50px;
            left: 0;
        }
        .pulldown-wrapper{
            width:100%;
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
        }
    }
    .historyContent{
        width: 94%;
        height: auto;
        margin:0 auto;
        
        padding: 1.6rem 0 2rem;
        .item{
            width: 100%;
            min-height: 3rem;
            height: auto;
            background: #fff;
            border-radius: .2rem;
            padding:.2rem .1rem 0;
            font-size: .42rem;
            box-sizing: border-box;
            margin-bottom: .3rem;
            .item-bus{
                width:100%;
                height: .8rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
                .choose{
                    display: inline-block;
                    width:.4rem;
                    height:.4rem;
                    margin:0 .15rem;
                    background:url('../../../assets/images/choose_no.png') no-repeat center;
                    background-size:100%;
                }
                .bus-info{
                    width:73%;
                    display: flex;
                    align-items: center;
                    margin-left: -.6rem;
                    .bus-logo{
                        width:.7rem;
                        height: .7rem;
                    }
                    .bus-name{
                        width:100%;
                        margin-left: .2rem;
                        @include ellpisis
                    }
                }
                .get-quan{
                    font-size: .35rem;
                    margin-right: .3rem;
                    color: red;
                    font-weight: 700;
                }
            }
            .item-pro{
                margin:.3rem 0;
            }
            .pro-list{
                width:100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                
                .pro-img{
                    width:2.3rem;
                    height: 2.3rem;
                    margin-left: -.3rem;
                    img{
                        width:100%;
                        height: 100%;
                    }
                }
                .pro-info{
                    width: 63%;
                    line-height: 1.4rem;
                    .pro-name{
                        width:60%;
                        @include ellpisis;
                    }
                }
                .choose{
                    width:.4rem;
                    height:.4rem;
                    margin:0 .15rem;
                    background:url('../../../assets/images/choose_no.png') no-repeat center;
                    background-size:100%;
                }
                
            }
            
        }
    }
    .pulldownloading,.pulluploading{
        animation: pulldownloading .5s linear infinite;
    }
    @keyframes pulldownloading {
        0%{transform: rotate(0)}
        100%{transform: rotate(360deg)}
    }
</style>