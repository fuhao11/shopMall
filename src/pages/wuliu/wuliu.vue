<template>
    <div class="wuliu">
        <common-head :headBgcolor="headBgcolor" :showBack="true">
            <h3 slot="title" class="head-title">查看物流</h3>
        </common-head>
        <main class="main">
            <section class="wuliu-info">
                <div class="wuliu-img">
                    <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3247749323,1379996244&fm=26&gp=0.jpg" alt="">
                </div>
                <div class="wuliu-intro">
                    <div>物流公司: 中通快递</div>
                    <div>物流状态 : 运输中</div>
                    <div class="wuliu-number">
                        <span class="wuliu-number-ell">物流单号 : 2131313323132154</span>
                        <span class="copy" ref="copyBtn" @click="copyOrderNum">复制编号</span>
                    </div>
                </div>
            </section>
            <section class="wuliu-list">
                <ul class="list-wrapper">
                    <li class="item">
                        <p>您的订单已导入，商家正通知快递公司取件商家正通知快递公司取件</p>
                        <p class="item-time">2019-07-21 12:00</p>
                    </li>
                    <li class="item">
                        <p>您的订单已导入，商家正通知快递公司取件商家正通知快递公司取件</p>
                        <p class="item-time">2019-07-21 12:00</p>
                    </li>
                    <li class="item">
                        <p>您的订单已导入，商家正通知快递公司取件商家正通知快递公司取件</p>
                        <p class="item-time">2019-07-21 12:00</p>
                    </li>
                </ul>
            </section>
        </main>
    </div>
</template>
<script>
import CommonHead from 'common/Header'
import Clipboard from 'clipboard'
export default {
    name:'wuliuDetail',
    data() {
        return {
            headBgcolor:{ background:'#eee' }
        }
    },
    components:{
        CommonHead
    },
    methods:{
        copyOrderNum(){
            var _this = this;
            _this.clip.on('success',()=>{
                console.log('复制成功');
                // _this.clip.destory()
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
        
    }
}
</script>
<style lang="scss" scoped>
    @import '../style/bus';
    .wuliu{
        width:100%;
        background:#eee;
    }
    .head-title{
        font-size:.47rem
    }
    .main{
        width: 94%;
        min-height: calc(100vh - 1.3rem);
        height: auto;
        margin:0 auto;
        margin-top: 1.3rem;
    }
    .wuliu-info{
        width:100%;
        height: 4rem;
        background: #fff;
        border-radius: .4rem;
        padding:.3rem;
        box-sizing: border-box;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-wrap: nowrap;
    }
    .wuliu-img{
        width:2.3rem;
        height: 2.3rem;
        img{
            width:100%;
            height: 100%;
        }
    }
    .wuliu-intro{
        flex:1;
        padding-left: .2rem;
        line-height: .85rem;
        font-size: .4rem;
        .wuliu-number{
            font-size: .32rem;
            display: flex;
            align-items: center;
        }
        .wuliu-number-ell{
            display: inline-block;
            width:3.7rem;
            @include ellpisis;
        }
        .copy{
            display: inline-block;
            width:1.5rem;
            height: .5rem;
            line-height: .5rem;
            text-align: center;
            border:1px solid orange;
            border-radius: .2rem;
            margin-left: .2rem;
        }
    }
    .wuliu-list{
        width:100%;
        min-height: 10rem;
        height: auto;
        background: #fff;
        border-radius: .4rem;
        margin-top: .5rem;
        padding-top: 1px;
        padding-bottom: .8rem;
        .list-wrapper{
            width:80%;
            margin:.7rem auto;
            .item{
                padding-bottom: .5rem;
                margin-bottom: .5rem;
                border-bottom: 1px solid #ccc;
                .item-time{
                    font-size: .33rem;
                    margin-top: .15rem;
                }
            }
        }
    }
</style>