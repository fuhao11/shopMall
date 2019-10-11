<template>
    <div class="order-detail-wrapper" ref="orderDetailWrapper">
    <div class="order-detail">
        <detail-head></detail-head>
        <main class="order-detail-main">
            <section class="trans-info">
                <div class="person">
                    <div class="person-head">
                        <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3247749323,1379996244&fm=26&gp=0.jpg" alt="">
                    </div>
                    <div class="person-add">
                        <div class="person-info">薄先生&nbsp;&nbsp;&nbsp;&nbsp;1533349957</div>
                        <address class="person-address">河北省唐山市滦州市榛子镇唐山市滦州市榛子镇唐山市滦州市榛子镇</address>
                    </div>
                </div>
                <div class="wuliu">
                    <div class="wuliu-head">
                        <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3247749323,1379996244&fm=26&gp=0.jpg" alt="">
                    </div>
                    <div class="wuliu-add">
                        <div class="wuliu-info">广东广州转运中心-已发往河北唐山集散地</div>
                        <address class="wuliu-time">2019-10-01 01:00:30</address>
                    </div>
                    <div class="wuliu-head">
                        <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3247749323,1379996244&fm=26&gp=0.jpg" alt="">
                    </div>
                </div>
            </section>

            <section class="pro-list">
                <div class="pro-bus">
                    <div class="bus-head">
                        <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3247749323,1379996244&fm=26&gp=0.jpg" alt="">
                    </div>
                    <div class="bus-name">botao的店铺</div>
                </div>
                <div class="pro-detail">
                    <div class="pro-img">
                        <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3247749323,1379996244&fm=26&gp=0.jpg" alt="">
                    </div>
                    <div class="pro-info">
                        <div class="pro-name">RUBY#01</div>
                        <div class="pro-price">￥999</div>
                    </div>
                    <div class="pro-other">
                        <p>X1</p>
                        <div class="pro-btn">申请售后</div>
                    </div>
                </div>
                <div class="pro-detail">
                    <div class="pro-img">
                        <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3247749323,1379996244&fm=26&gp=0.jpg" alt="">
                    </div>
                    <div class="pro-info">
                        <div class="pro-name">RUBY#01</div>
                        <div class="pro-price">￥999</div>
                    </div>
                    <div class="pro-other">
                        <p>X1</p>
                        <div class="pro-btn">申请售后</div>
                    </div>
                </div>
                <div class="buymsg">
                    买家留言: <span>收货地址改了一下，麻烦您修改一下。收货地址改了一下，麻烦您修改一下。收货地址改了一下，麻烦您修改一下。</span>
                </div>
            </section>

            <section class="pay-detail">
                <div class="pay-title">
                    <span class="pay-method-left">支付方式</span>
                    <span class="pay-method-right">积分支付</span>
                </div>
                <div class="pay-info">
                    <div class="pay-info-list">
                        <span class="pay-list-left">商品总额</span>
                        <span class="pay-list-right">￥999</span>
                    </div>
                    <div class="pay-info-list">
                        <span class="pay-list-left">优惠</span>
                        <span class="pay-list-right colorR">-￥999</span>
                    </div>
                    <div class="pay-info-list">
                        <span class="pay-list-left">硬币</span>
                        <span class="pay-list-right colorR">-10硬币</span>
                    </div>
                    <div class="pay-info-list">
                        <span class="pay-list-left">积分</span>
                        <span class="pay-list-right colorR">-0</span>
                    </div>
                    <div class="pay-info-list">
                        <span class="pay-list-left">运费</span>
                        <span class="pay-list-right colorR">-￥0</span>
                    </div>
                    <div class="shifu">
                        实付款 <span>￥0.00</span>
                    </div>
                </div>
            </section>

            <section class="order-info">
                <div class="order-info-title">订单信息</div>
                <div class="order-number">
                    订单编号 <span>1234567891231321212</span>
                    <span class="copy" ref="copyBtn" @click="copyOrderNum">复制编号</span>
                </div>
                <div class="order-time">
                    下单时间 <span>2019-10-01 14:34</span>
                </div>
            </section>

            <footer class="order-footer">
                <div class="order-to-wuliu" @click="$router.push('/wuliu')">查看物流</div>
                <div class="order-to-getgoods">确认收货</div>
            </footer>
        </main>
    </div>
    </div>
</template>
<script>
import detailHead from './children/orderDetailHead'
import Clipboard from 'clipboard'
import BScroll from 'better-scroll'
export default {
    name:'orderDetail',
    data() {
        return {
            clip:null
        }
    },
    components:{
        detailHead
    },
    methods:{
        copyOrderNum(){
            var _this = this;
            _this.clip.on('success',()=>{
                console.log('复制成功');
                _this.clip.destory()
            });
            _this.clip.on('error',()=>{
                console.log('复制失败')
            })
        }
    },
    mounted(){
        let _this=this;
        _this.clip = new Clipboard('.copy',{
            text:function(){
                return '这是复制的内容！！！'
            }
        });
        let el = _this.$refs.orderDetailWrapper;
        // console.log(el)
        _this.detailScroll = new BScroll(el,{ click: true })
    }
}
</script>
<style lang="scss" scoped>
    @import '../../style/bus';
    .order-detail-wrapper{
        position: fixed;
        top:0;
        left:0;
        right:0;
        bottom: 0;
        z-index: 100;
        overflow: hidden;
    }
    .order-detail{
        // position: fixed;
        // top:0;
        // left:0;
        // right:0;
        // bottom: 0;
        width:100%;
        height: auto;
        background: #eee;
        // z-index: 99;
        
    }
    .order-detail-main{
        width:94%;
        height: auto;
        margin:0 auto;
        margin-top: -2.3rem;
        padding-bottom: 2rem;
    }
    .trans-info{
        width:100%;
        height: 4.5rem;
        background: #fff;
        border-radius: .4rem;
        padding: .2rem;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        .person{
            width: 100%;
            flex: 1;
            border-bottom: 1px solid #ccc;
            display: flex;
            justify-content: space-around;
            align-items: center;
            flex-wrap: nowrap;
            .person-head{
                width:.75rem;
                height: .75rem;
                img{
                    width:100%;
                    height: 100%;
                }
            }
            .person-add{
                // flex:.75;
                line-height: .9rem;
                width:81%;
                .person-address{
                    @include ellpisis
                }
            }
        }
        .wuliu{
            flex: 1;
            display: flex;
            justify-content: space-around;
            align-items: center;
            flex-wrap: nowrap;
            .wuliu-head{
                width:.75rem;
                height: .75rem;
                img{
                    width:100%;
                    height: 100%;
                }
            }
            .wuliu-add{
                // flex:.75;
                line-height: .9rem;
                width:67%;
                .wuliu-info{
                    @include ellpisis
                }
            }
        }
    }
    .pro-list{
        width:100%;
        height: auto;
        background: #fff;
        border-radius: .4rem;
        padding:.4rem;
        box-sizing: border-box;
        margin-top:.4rem;
        .pro-bus{
            width:100%;
            height: 1rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            line-height: 1rem;
            .bus-head{
                width:.75rem;
                height: .75rem;
                img{
                    width:100%;
                    height: 100%;
                }
            }
            .bus-name{
                flex: .95;
            }
        }
        .pro-detail{
            width:100%;
            height: 2rem;
            line-height: 2rem;
            display: flex;
            justify-content: space-around;
            align-items: center;
            .pro-img{
                width:1.5rem;
                height: 1.5rem;
                img{
                    width:100%;
                    height: 100%;
                }
            }
            .pro-info,.pro-other{
                line-height: 1rem;
            }
            .pro-info{
                flex:1;
                padding-left: .5rem;
            }
            .pro-other{
                p{
                    text-align: right;
                }
                .pro-btn{
                    @include busBtn(#fff);
                    color: orange;
                    border:1px solid orange;
                    width: 1.6rem;
                    border-radius: .4rem;
                }
            }
        }
        .buymsg{
            font-size: .34rem;
            color: #666;
            margin-top: .3rem;
        }
    }
    .pay-detail{
        width:100%;
        height: auto;
        background: #fff;
        border-radius: .4rem;
        padding:.4rem;
        box-sizing: border-box;
        margin-top:.4rem;
        .pay-title{
            width:100%;
            display: flex;
            justify-content: space-around;
            align-items: center;
            border-bottom:1px solid #ccc;
            padding:0 .3rem .2rem;
            box-sizing: border-box;
            font-size: .45rem;
            .pay-method-left,.pay-method-right{
                flex:1
            }
            .pay-method-right{
                text-align: right
            }
        }
    }
    .pay-info-list{
        width:100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding:.2rem .3rem;
        box-sizing: border-box;
        // font-size: .45rem;
        .pay-list-left,.pay-list-right{
            flex:1;
        }
        .pay-list-right{
            text-align: right;
        }
        .colorR{
            color: red;
            font-weight: 700;
        }
    }
    .shifu{
        line-height: 1rem;
        border-top: 1px solid #ccc;
        text-align: right;
    }
    .order-info{
        width:100%;
        padding:.2rem .8rem;
        background: #fff;
        box-sizing: border-box;
        border-radius: .4rem;
        margin-top: .4rem;
        .order-info-title{
            font-size: .45rem;
            line-height: 1rem;
        }
        .order-number,.order-time{
            font-size: .35rem;
            line-height: .85rem;
        }
        .copy{
            display: inline-block;
            width:1.7rem;
            height:.5rem;
            text-align: center;
            line-height: .5rem;
            border:1px solid orange;
            border-radius: .4rem;
        }
    }
    .order-footer{
        margin-top: .5rem;
        background: #eee;
        width:100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        .order-to-wuliu,.order-to-getgoods{
            @include busBtn(#fff);
            color: #333;
            border:1px solid #ccc;
            font-size: .45rem;
            width:1.8rem;
            border-radius: .4rem;
            margin-right: .2rem;
            padding:.05rem .2rem;
        }
        .order-to-getgoods{
            color: orange;
            border-color: orange;
        }
    }
</style>