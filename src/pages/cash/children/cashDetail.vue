<template>
    <div class="cashDetail">
        <common-head :showBack="true" :headBgcolor="headBgcolor">
            <h3 class="title" slot="title">提现详情</h3>
        </common-head>
        <section class="content">
            <div class="cash-img">
                <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3247749323,1379996244&fm=26&gp=0.jpg" alt="">
            </div>
            <div>提现申请已经提交</div>
            <div class="cash-detail">
                <div class="cash-user">
                    <span>到账账户</span>
                    <span>支付宝(155****3958)</span>
                </div>
                <div class="cash-num">
                    <span>提现现金</span>
                    <span>102.0元</span>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import CommonHead from 'common/Header'
export default {
    data() {
        return {
            headBgcolor:{background:'#eee'}
        }
    },
    components:{
        CommonHead
    }
}
</script>
<style lang="scss" scope>
    .cashDetail{
        position: absolute;
        top: 0;
        left: 0;
        right:0;
        bottom: 0;
        z-index: 77;
        background: #eee;
        .title{
            font-size: .47rem
        }
        .content{
            width:70%;
            height: 7.5rem;
            margin:0 auto;
            margin-top:2.3rem;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            font-size: .38rem;
            .cash-img{
                width:3rem;
                height: 3rem;
                img{
                    width:100%;
                    height: 100%;
                    border-radius: 1.5rem;
                }
            }
            .cash-detail{
                width: 100%;
                height: 2.5rem;
                background: #fff;
                padding:.2rem .3rem;
                box-sizing: border-box;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                .cash-user,.cash-num{
                    flex:1;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .cash-user{
                    border-bottom: 1px solid #ccc;
                }
            }
        }
    }
</style>