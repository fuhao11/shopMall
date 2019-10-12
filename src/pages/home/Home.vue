<template>
    <div class="home-wrapper">
        <!-- <router-link to="/discuss" tag="button">全部评价</router-link>
        <router-link to="/shopCar" tag="button">购物车</router-link>
        <router-link to="/myorder" tag="button">我的订单</router-link>
        <router-link :to="'/bussiness/' + 1" tag="button">店铺主页</router-link>
        <button @click="$router.push('/wuliu')">物流信息</button>
        <router-link to="/cash" tag="button">申请提现</router-link>
        <router-link to="/me" tag="button">我的</router-link> -->
        <section class="home">
            <header class="home-head">
                <input type="text" name="" id="head-input" placeholder="输入商品信息">
                <svg t="1570785702604" class="head-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2456" width="20" height="20"><path d="M973.824 551.5264h-923.648c-19.6608 0-35.4304-15.9744-35.4304-35.4304s15.9744-35.4304 35.4304-35.4304h923.648c19.6608 0 35.4304 15.9744 35.4304 35.4304s-15.7696 35.4304-35.4304 35.4304z m-106.496 426.3936H654.1312c-19.6608 0-35.4304-15.9744-35.4304-35.4304s15.9744-35.4304 35.4304-35.4304h213.1968c19.6608 0 35.4304-15.9744 35.4304-35.4304v-177.5616c0-19.6608 15.9744-35.4304 35.4304-35.4304s35.4304 15.9744 35.4304 35.4304v177.5616c0.2048 58.368-47.5136 106.2912-106.2912 106.2912z m-532.8896 0H156.8768c-58.7776 0-106.496-47.7184-106.496-106.496v-177.5616c0-19.6608 15.9744-35.4304 35.4304-35.4304s35.4304 15.9744 35.4304 35.4304v177.5616c0 19.6608 15.9744 35.4304 35.4304 35.4304h177.5616c19.6608 0 35.4304 15.9744 35.4304 35.4304s-15.5648 35.6352-35.2256 35.6352zM85.8112 373.9648c-19.6608 0-35.4304-15.9744-35.4304-35.4304V160.768c0-58.7776 47.7184-106.496 106.496-106.496h177.5616c19.6608 0 35.4304 15.9744 35.4304 35.4304s-15.9744 35.4304-35.4304 35.4304H156.8768c-19.6608 0-35.4304 15.9744-35.4304 35.4304v177.5616c-0.2048 19.8656-16.1792 35.84-35.6352 35.84z m852.5824 0c-19.6608 0-35.4304-15.9744-35.4304-35.4304V160.768c0-19.6608-15.9744-35.4304-35.4304-35.4304H654.1312c-19.6608 0-35.4304-15.9744-35.4304-35.4304s15.9744-35.4304 35.4304-35.4304h213.1968c58.7776 0 106.496 47.7184 106.496 106.496v177.5616c0 19.456-15.9744 35.4304-35.4304 35.4304z" p-id="2457" fill="#515151"></path></svg>
            </header>

            <!-- banner -->
            <section class="banner">
                <swiper :options="swiperOption" ref="mySwiper" >
                    <!-- slides -->
                    <swiper-slide>
                        <img class="slide-img" src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4105564734,2977816416&fm=26&gp=0.jpg" alt="">
                    </swiper-slide>
                    <swiper-slide>
                        <img class="slide-img" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3247749323,1379996244&fm=26&gp=0.jpg" alt="">
                    </swiper-slide>
                    <!-- Optional controls -->
                    <div class="swiper-pagination"  slot="pagination"></div>
                    <!-- <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>
                    <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
                </swiper>
            </section>

            <!-- icons -->
            <section class="home-icons">
                <div class="item-icons">
                    <dt class="item-icons-img">
                        <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3247749323,1379996244&fm=26&gp=0.jpg" alt="">
                    </dt>
                    <dd class="item-icons-text">数码3C</dd>
                </div>
                <div class="item-icons">
                    <dt class="item-icons-img">
                        <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3247749323,1379996244&fm=26&gp=0.jpg" alt="">
                    </dt>
                    <dd class="item-icons-text">数码3C</dd>
                </div>
                <div class="item-icons">
                    <dt class="item-icons-img">
                        <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3247749323,1379996244&fm=26&gp=0.jpg" alt="">
                    </dt>
                    <dd class="item-icons-text">数码3C</dd>
                </div>
                <div class="item-icons">
                    <dt class="item-icons-img">
                        <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3247749323,1379996244&fm=26&gp=0.jpg" alt="">
                    </dt>
                    <dd class="item-icons-text">数码3C</dd>
                </div>
                <div class="item-icons">
                    <dt class="item-icons-img">
                        <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3247749323,1379996244&fm=26&gp=0.jpg" alt="">
                    </dt>
                    <dd class="item-icons-text">数码3C</dd>
                </div>
                <div class="item-icons">
                    <dt class="item-icons-img">
                        <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3247749323,1379996244&fm=26&gp=0.jpg" alt="">
                    </dt>
                    <dd class="item-icons-text">数码3C</dd>
                </div>
                <div class="item-icons">
                    <dt class="item-icons-img">
                        <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3247749323,1379996244&fm=26&gp=0.jpg" alt="">
                    </dt>
                    <dd class="item-icons-text">数码3C</dd>
                </div>
                <div class="item-icons">
                    <dt class="item-icons-img">
                        <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3247749323,1379996244&fm=26&gp=0.jpg" alt="">
                    </dt>
                    <dd class="item-icons-text">数码3C</dd>
                </div>
                <div class="item-icons">
                    <dt class="item-icons-img">
                        <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3247749323,1379996244&fm=26&gp=0.jpg" alt="">
                    </dt>
                    <dd class="item-icons-text">数码世界</dd>
                </div>
                <div class="item-icons">
                    <dt class="item-icons-img">
                        <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3247749323,1379996244&fm=26&gp=0.jpg" alt="">
                    </dt>
                    <dd class="item-icons-text">数码3C数码3C数码3C</dd>
                </div>
            </section>

            <section class="home-ad">
                <section class="home-ad-one"></section>
                <section class="home-ad-two"></section>
                <section class="home-ad-three"></section>
                <section class="home-ad-four"></section>
                <section class="home-ad-five"></section>
            </section>

            <!-- 今日爆款 -->
            <section class="today-hot">
                <section class="hot-title">
                    <h2>今日爆款</h2>
                    <p class="hot-tip">限时让利，一件也是批发价</p>
                </section>
                <section class="today-hot-list-wrapper">
                    <section class="today-hot-list" :style="hotListWh">
                        <dl class="today-hot-list-item">
                            <dt class="hot-item-img">
                                <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3247749323,1379996244&fm=26&gp=0.jpg" alt="">
                            </dt>
                            <dd class="hot-item-text">
                                <div class="hot-item-proname">相宜本草 去死皮膏68g（洗面奶）相宜本草 去死皮</div>
                                <div class="hot-item-proprice">
                                    <span class="hot-item-proprice-now">￥ <span>27</span></span>
                                    <span class="hot-item-proprice-last">￥ <span>39</span></span>
                                </div>
                            </dd>
                        </dl>
                        <dl class="today-hot-list-item">
                            <dt class="hot-item-img">
                                <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3247749323,1379996244&fm=26&gp=0.jpg" alt="">
                            </dt>
                            <dd class="hot-item-text">
                                <div class="hot-item-proname">相宜本草 去死皮膏68g（洗面奶）相宜本草 去死皮</div>
                                <div class="hot-item-proprice">
                                    <span class="hot-item-proprice-now">￥ <span>27</span></span>
                                    <span class="hot-item-proprice-last">￥ <span>39</span></span>
                                </div>
                            </dd>
                        </dl>
                        <dl class="today-hot-list-item">
                            <dt class="hot-item-img">
                                <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3247749323,1379996244&fm=26&gp=0.jpg" alt="">
                            </dt>
                            <dd class="hot-item-text">
                                <div class="hot-item-proname">相宜本草 去死皮膏68g（洗面奶）相宜本草 去死皮</div>
                                <div class="hot-item-proprice">
                                    <span class="hot-item-proprice-now">￥ <span>27</span></span>
                                    <span class="hot-item-proprice-last">￥ <span>39</span></span>
                                </div>
                            </dd>
                        </dl>
                    </section>
                </section>

            </section>

            <!-- 限时秒杀 -->
            <section class="limit-sale">
                <div class="limit-title">
                    <h2>限时秒杀</h2>
                    <p class="limit-title-tip">脸蛋儿秒杀，直击裸价</p>
                </div>
                <div class="limit-time-list" ref="limitTime">
                    <ul :style="limitTimeWh">
                        <li class="limit-time-item">
                            <div class="limit-time-detail limit-active">9:00</div>
                            <div class="limit-sale-start">未开始</div>
                        </li>
                        <li class="limit-time-item">
                            <div class="limit-time-detail">9:00</div>
                            <div class="limit-sale-start">未开始</div>
                        </li>
                        <li class="limit-time-item">
                            <div class="limit-time-detail">9:00</div>
                            <div class="limit-sale-start">未开始</div>
                        </li>
                        <li class="limit-time-item">
                            <div class="limit-time-detail">9:00</div>
                            <div class="limit-sale-start">未开始</div>
                        </li>
                    </ul>
                </div>
            </section>

            <!-- 瀑布流 -->
            <section class="home-pubu">
                <ul>
                    <li class="pubu-item">
                        <div class="pubu-item-img">
                            <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3247749323,1379996244&fm=26&gp=0.jpg" alt="">
                        </div>
                        <div class="pubu-item-right">
                            <div class="pubu-item-proname">豪车#01</div>
                            <div class="pubu-item-hoticon">热卖品</div>
                            <div class="pubu-item-bottom">
                                <div class="pubu-item-pricetip">
                                    <span class="pubu-item-price">￥ <span>30</span></span>
                                    <span class="pubu-item-tehui">特惠价</span>
                                </div>
                                <div class="gopay">立即抢购</div>
                            </div>
                        </div>
                    </li>
                    <li class="pubu-item">
                        <div class="pubu-item-img">
                            <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3247749323,1379996244&fm=26&gp=0.jpg" alt="">
                        </div>
                        <div class="pubu-item-right">
                            <div class="pubu-item-proname">豪车#01</div>
                            <div class="pubu-item-hoticon">热卖品</div>
                            <div class="pubu-item-bottom">
                                <div class="pubu-item-pricetip">
                                    <span class="pubu-item-price">￥ <span>30</span></span>
                                    <span class="pubu-item-tehui">特惠价</span>
                                </div>
                                <div class="gopay">立即抢购</div>
                            </div>
                        </div>
                    </li>
                </ul>
            </section>
        </section>
        <home-nav></home-nav>
    </div>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import homeNav from 'common/homeNav'
// import BScroll from 'better-scroll'

export default {
    data() {
        return {
            scroll:null,
            swiperOption:{
                pagination:'.swiper-pagination',
                autoplay:1000,
                loop:true
            },
            hotListWh:{
                width:'145%'
            },
            limitTimeWh:{
                width:'130%'
            }
        }
    },
    components:{
        homeNav
    },
    mounted(){
        // this.scroll = new BScroll(this.$refs.limitTime,{ click:true })
    }
}
</script>
<style lang="scss" scoped>
    @import '../style/bus';
    .banner /deep/ .swiper-container{
        width:100%;
        height: 0;
        padding-bottom: 35%;
        overflow: hidden;
    }
    .banner /deep/ .swiper-slide{
        width:100%;
    }
    .home-wrapper{
        width:100%;
        min-height: 100vh;
        font-size: .45rem;
        height: auto;
        background: #eee;
        ::-webkit-scrollbar{
            width: 0;
            background: transparent;
        }
        .home{
            width:94%;
            padding-bottom: 2rem;
            // height: 1.5rem;
            margin: 0 auto;
            .home-head{
                width:100%;
                height: 1.5rem;
                display: flex;
                justify-content: space-around;
                align-items: center;
                #head-input{
                    width: 85%;
                    height: .8rem;
                    padding-left: .2rem;
                    line-height: .8rem;
                    outline: none;
                    border:1px solid #333;
                }
                .head-icon{
                    width: .6rem;
                    height: .6rem;
                }
            }
            .banner{
                width:100%;
                height:0;
                padding-bottom: 35%;
                overflow: hidden;
                .slide-img{
                    width: 100%;
                }
            }
            
        }
    }
    .home-icons{
        width:100%;
        min-height: 4.7rem;
        height: auto;
        margin:.5rem 0;
        box-sizing: border-box;
        padding-top: .3rem;
        border-radius: .3rem;
        background: #fff;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        .item-icons{
            width:18%;
            height: 1.8rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: .15rem;
            .item-icons-img{
                img{
                    width: 1rem;
                    height: 1rem;
                    border-radius: 1rem;
                }
            }
            .item-icons-text{
                width: 100%;
                text-align: center;
                @include ellpisis;
                
            }
        }
    }
    .home-ad{
        width: 100%;
        min-height: 6rem;
        height: auto;
        margin:.5rem 0;
        border-radius: .3rem;
        background: #fff;
        display: flex;
        flex-wrap: wrap;
        .home-ad-one,.home-ad-two{
            width: 49.5%;
            height: 3.1rem;
            border-bottom: 1px solid #ccc;
        }
        .home-ad-one{
            border-right: 1px solid #ccc;
        }
        .home-ad-three,.home-ad-four,.home-ad-five{
            width:33%;
            height: 2.8rem;
        }
        .home-ad-four{
            border-left: 1px solid #ccc;
            border-right: 1px solid #ccc;
        }
    }
    .today-hot{
        width: 100%;
        min-height: 6rem;
        height: auto;
        .hot-title{
            width:100%;
            height: 1.5rem;
            display: flex;
            align-items: center;
            h2{
                font-size: .46rem;
                padding-left: .3rem;
                position: relative;
            }
            h2:before{
                content: '';
                width: .2rem;
                height: .5rem;
                background: orange;
                position: absolute;
                left: 0;
                top: 0;
            }
            .hot-tip{
                margin-left: .4rem;
                color: #666;
                font-size: .35rem;
                font-weight: 600;
            }
        }
        .today-hot-list-wrapper{
            width: 100%;
            height: auto;
            overflow-x: scroll;
            margin-bottom: .5rem; 
            .today-hot-list{
                
                // overflow-x: scroll;
                // display: flex;
                // justify-content: space-between;
                .today-hot-list-item{
                    width: 3.5rem;
                    height: 5.5rem;
                    background: #fff;
                    border-radius: .4rem;
                    float: left;
                    margin-right: 1rem;
                    // display: flex;
                    // flex-flow: column nowrap;
                    // justify-content: space-between;
                    .hot-item-img{
                        width:100%;
                        height: 2.3rem;
                        img{
                            width:100%;
                            height: 100%;
                            border-top-left-radius: .4rem;
                            border-top-right-radius: .4rem;
                        }
                    }
                    .hot-item-text{
                        margin-bottom: .2rem;
                        margin-top: .7rem;
                        .hot-item-proname{
                            font-weight: 600;
                            width: 100%;
                            padding: 0 .08rem;
                            box-sizing: border-box;
                            overflow: hidden;
                            display: -webkit-box;
                            text-overflow: ellipsis;
                            -webkit-box-orient: vertical;
                            -webkit-line-clamp:2
                        }
                        .hot-item-proprice{
                            width:90%;
                            margin:.3rem auto 0;
                            display: flex;
                            justify-content: space-between;
                            .hot-item-proprice-now{
                                color: red;
                            }
                            .hot-item-proprice-last{
                                color: #ccc;
                                text-decoration: line-through;
                            }
                        }
                    }
                }
            }
        }
    }
    .limit-sale{
        width:100%;
        height: 3.5rem;
        margin-bottom: .4rem;
        .limit-title{
            height: 1.5rem;
            display: flex;
            align-items: center;
            h2{
                font-size: .46rem;
                padding-left: .3rem;
                box-sizing: border-box;
                position: relative;
                margin-right: .4rem;
                &:before{
                    content: '';
                    width: .2rem;
                    height: .5rem;
                    background: orange;
                    position: absolute;
                    left: 0;
                    top: 0;
                }
            }
            .limit-title-tip{
                color:#666;
                font-size: .35rem;
            }
        }
    }
    .limit-time-list{
        overflow-x: scroll;
        .limit-time-item{
            width:3rem;
            min-height: 1.5rem;
            float: left;
            .limit-time-detail{
                width:80%;
                height: 1rem;
                background: #fff;
                border-radius: .2rem;
                text-align: center;
                line-height: 1rem;
                
            }
            .limit-active{
                background: yellow;
            }
            .limit-sale-start{
                width:80%;
                text-align: center;
                line-height: .8rem;
            }
        }
    }
    .home-pubu{
        width: 100%;
        height: auto;
    }
    .pubu-item{
        width:100%;
        height: 4rem;
        border-radius: .2rem;
        background: #fff;
        margin-bottom: .5rem;
        padding: .2rem;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .pubu-item-img{
            width: 3.3rem;
            height: 3.3rem;
            img{
                width: 100%;
                height: 100%;
                border-radius: .2rem;
            }
        }
        .pubu-item-right{
            width: 60%;
            height: 2.8rem;
            display: flex;
            flex-flow: column nowrap;
            justify-content: space-between;
            .pubu-item-hoticon{
                width:1.3rem;
                font-size: .35rem;
                text-align: center;
                color:red;
                border:1px solid red;
                border-radius: 1rem;
            }
            .pubu-item-bottom{
                display: flex;
                justify-content: space-between;
                align-items: center;
                .pubu-item-pricetip{
                    color:red;
                    align-self: flex-end;
                    .pubu-item-tehui{
                        width:1.3rem;
                        font-size: .35rem;
                        text-align: center;
                        border:1px solid red;
                        border-radius: 1rem;
                    }
                }
                .gopay{
                    color:#fff;
                    background: red;
                    padding:.2rem .3rem;
                    border-radius: .13rem;
                    margin-right: .15rem;
                }
            }

        }
    }
</style>