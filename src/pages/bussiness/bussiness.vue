<template>
    <div class="bussiness">
        <header class="bus_header">
            <div class="head-top">
                <router-link to="/" tag="span">
                    <svg t="1570263512480" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4173" width="20" height="20"><path d="M766.862 1021.724c-10.24 0-20.594-3.64-28.444-10.922L228.693 538.396c-15.701-14.563-15.701-38.229 0-52.792L738.418 13.198c15.701-14.563 41.187-14.563 56.889 0 15.701 14.564 15.701 38.23 0 52.793L314.027 512l481.28 446.009c15.701 14.563 15.701 38.23 0 52.793-7.851 7.282-18.205 10.922-28.445 10.922z" p-id="4174" fill="#ffffff"></path></svg>
                </router-link>
                <span>
                    <svg t="1570263512480" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4173" width="20" height="20"><path d="M766.862 1021.724c-10.24 0-20.594-3.64-28.444-10.922L228.693 538.396c-15.701-14.563-15.701-38.229 0-52.792L738.418 13.198c15.701-14.563 41.187-14.563 56.889 0 15.701 14.564 15.701 38.23 0 52.793L314.027 512l481.28 446.009c15.701 14.563 15.701 38.23 0 52.793-7.851 7.282-18.205 10.922-28.445 10.922z" p-id="4174" fill="#ffffff"></path></svg>
                </span>
            </div>
            <div class="bus-info">
                <div class="bus-logo">
                    <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3247749323,1379996244&fm=26&gp=0.jpg" alt="">
                </div>
                <div class="bus-detail">
                    <dt>
                        <span class="bus-name">{{bussiness.bussinessName}}的店铺</span>
                        <span class="bus-rz">已认证</span>
                    </dt>
                    <dd>
                        <span class="bus-pronum">商品数量 {{bussiness.proNum}}</span>
                        <span class="bus-fansnum">粉丝数量 {{bussiness.fansNum}}</span>
                    </dd>
                </div>
                <div class="bus-follow">
                    <div>关注我</div>
                </div>
            </div>
        </header>
        <div class="navbox">
            <ul class="nav">
                <li v-for="item in navList" :key="item" :class="[navActive == item ? 'active' : '']" @click="onNavClick($event)">{{item}}</li>
            </ul>
        </div>
        
        <main class="pro-list">
            <ul class="pro-list-box">
                <li class="pro-item" v-for="item in proList.list" :key="item.proid" v-if="item.type == navActive || navActive == '全部商品' || navActive == '热销榜' && item.hot">
                    <dt class="pro-img-wrapper">
                        <div class="pro-img">
                            <img :src="item.proimg" alt="">
                        </div>
                    </dt>
                    <dd class="pro-info">
                        <p class="proname">{{item.proname}}</p>
                        <p class="pro-price">￥{{item.proprice}}</p>
                        <p>
                            <span class="pro-limit" v-if="item.limit">限时爆款</span>
                            <span class="pro-zhuan">赚￥13.8</span>
                        </p>
                    </dd>
                </li>
            </ul>
        </main>
    </div>
</template>
<script>
export default {
    name: "bussiness",
    data() {
        return {
            navActive:'全部商品',
            navList:['全部商品','热销榜','个护类型','个护按摩','家电','美妆'],
            bussiness:{
                bussinessName:'yyyyyyyyyyyyyy',
                bussinessLogo:'',
                proNum:888,
                fansNum:888
            },
            proList:{
                list:[{
                    proname:'个护类型商品名称商品名称商品名称1',
                    proimg:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3247749323,1379996244&fm=26&gp=0.jpg',
                    proprice:88,
                    limit:true,
                    proid:'qwe123',
                    type:'gehu',
                    hot:true
                },{
                    proname:'个护按摩商品名称商品名称商品名称2',
                    proimg:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3247749323,1379996244&fm=26&gp=0.jpg',
                    proprice:88,
                    limit:true,
                    proid:'qwe1234',
                    type:'anmo'
                },{
                    proname:'个护按摩商品名称商品名称商品名称3',
                    proimg:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3247749323,1379996244&fm=26&gp=0.jpg',
                    proprice:88.9,
                    limit:true,
                    proid:'qwe1235',
                    type:'anmo',
                    hot:true
                },{
                    proname:'家电商品名称商品名称商品名称4',
                    proimg:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3247749323,1379996244&fm=26&gp=0.jpg',
                    proprice:88.9,
                    limit:true,
                    proid:'qwe12356',
                    type:'jiadian'
                },{
                    proname:'美妆商品名称商品名称商品名称5',
                    proimg:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3247749323,1379996244&fm=26&gp=0.jpg',
                    proprice:88.8,
                    limit:true,
                    proid:'qwe123567',
                    type:'meizhuang',
                    hot:true
                }]
            }
        }
    },
    methods:{
        onNavClick (e) {
            console.log(e)
            this.navActive = e.target.innerText;
        }
    },
    created () {
        var _this = this;
        _this.proList.list.map((item) => {
            _this.$set(item,'proprice',item.proprice.toFixed(2));
            switch (item.type){
                case 'gehu':
                    _this.$set(item,'type','个护类型');break;
                case 'anmo':
                    _this.$set(item,'type','个护按摩');break;
                case 'jiadian':
                    _this.$set(item,'type','家电');break;
                case 'meizhuang':
                    _this.$set(item,'type','美妆');break;
                default:
                    break;
            }
        })
    }
}
</script>
<style lang="scss" scoped>
    @import '../style/bus';
    .bussiness{
        overflow: hidden;
        font-size: .42rem;
    }
    .bus_header {
        width: 100%;
        height: 5rem;
        background:rgb(17, 14, 14);
        .head-top {
            height:1.5rem;
            line-height: 1.5rem;
            padding:0 .6rem;
            display: flex;
            justify-content:space-between;
        }
        .bus {
            &-info{
                width:100%;
                height: 3.5rem;
                padding:0 .6rem;
                box-sizing: border-box;
                display: flex;
                justify-content: space-around;
                align-items: center;
                color: #fff;
            }
            &-logo{
                width: 1.5rem;
                height: 1.5rem;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            &-detail{
                padding-right: .2rem;
                line-height: .9rem;
            }
            &-name{
                display: inline-block;
                width: 2.5rem;
                font-weight: 700;
                @include ellpisis;
            }
            &-rz{
                font-size: .2rem;
                background:orange;
                border-radius: .3rem;
                padding:.05rem .2rem;
                margin-left:.4rem;
            }
            &-pronum,&-fansnum{
                font-size: .32rem;
            }
            &-follow{
                div{
                    background: orange;
                    padding: .1rem .4rem;
                    border-radius: 1rem;
                    font-size: .36rem
                }
            }
        }
    }
    .navbox{
        width:100%;
        overflow-x: scroll;
    }
    .navbox::-webkit-scrollbar{
        width: 0;
        height: 0;
        background: transparent;
    }
    .nav{
        height: 1.5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        li{
            padding:.4rem .5rem;
            white-space: nowrap;
        }
        .active{
            border-bottom: .05rem solid orange;
        }
    }
    .pro-list{
        width:100%;
        height: auto;
        padding-bottom: 2rem;
        background: #eee;
        .pro-list-box{
            width: 95%;
            height: auto;
            margin:0 auto;
            display: flex;
            flex-flow: row wrap;
            justify-content: space-between;
            box-sizing: border-box;
            font-size: .42rem;
        }
    }
    .pro-item{
        width:49%;
        height: auto;
        margin-top: .5rem;
        .pro-img-wrapper{
            width:100%;
            height: 0;
            padding-bottom: 100%;
            position: relative;
            .pro-img{
                position: absolute;
                top: 0;
                left:0;
                right:0;
                bottom:0;
                padding: .5rem;
                background: #ccc;
                img{
                    width:100%;
                    height: 100%;
                }
            }
        }
        .pro-info{
            padding:.2rem 0 .2rem .2rem;
            line-height: 1rem;
            box-sizing: border-box;
            background: #fff;
            border-bottom-left-radius: .2rem;
            border-bottom-right-radius: .2rem;
            .proname{
                @include ellpisis
            }
            .pro-price{
                color: red;
            }
            .pro-limit{
                @include busBtn(red);
            }
            .pro-zhuan{
                @include busBtn(orange);
            }
        }
    }

</style>