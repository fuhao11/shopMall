<template>
    <div class="cashRec">
        <common-head :showBack="true" :headBgcolor="headBgcolor">
            <h3 class="title" slot="title">提现记录</h3>
        </common-head>
        <section class="rec-list">
            <div class="cash-detail">
                <div class="cash-user">
                    <span>到账账户</span>
                    <span>支付宝(155****3958)</span>
                </div>
                <div class="cash-num">
                    <span>2019.9.30 16:05</span>
                    <span>102.0元</span>
                </div>
            </div>
            <div class="cash-detail">
                <div class="cash-user">
                    <span>到账账户</span>
                    <span>支付宝(155****3958)</span>
                </div>
                <div class="cash-num">
                    <span>2019.9.30 16:05</span>
                    <span>102.0元</span>
                </div>
            </div>
            <div class="cash-detail">
                <div class="cash-user">
                    <span>到账账户</span>
                    <span>支付宝(155****3958)</span>
                </div>
                <div class="cash-num">
                    <span>2019.9.30 16:05</span>
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
            headBgcolor:{ background:'#eee' }
        }
    },
    components:{
        CommonHead
    }
}
</script>
<style lang="scss" scope>
    .cashRec{
        position: absolute;
        top: 0;
        left: 0;
        right:0;
        bottom: 0;
        z-index: 79;
        background: #eee;
        .title{
            font-size: .47rem;
        }
    }
    .rec-list{
        width: 94%;
        height: auto;
        margin:2.3rem auto 0;
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
        font-size: .38rem;
        border-radius: .2rem;
        margin-bottom: .3rem;
        .cash-user,.cash-num{
            flex:1;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
    }
</style>