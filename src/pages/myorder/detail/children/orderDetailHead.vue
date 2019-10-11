<template>
    <div class="detail-head">
        <common-head class="common-head" :showBack="true" :headBgcolor="headBgcolor">
            <h3 slot="title" class="myorder-title">订单详情</h3>
        </common-head>
        <section class="detail-info">
            <h4 class="detail-status">待收货</h4>
            <!-- <div> -->
                <img class="detail-img" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3247749323,1379996244&fm=26&gp=0.jpg" alt="">
            <!-- </div> -->
        </section>
    </div>
</template>
<script>
import commonHead from 'common/Header'
export default {
    name:'orderDetailHead',
    data() {
        return {
            headBgcolor:{
                background:'orange'
            }
        }
    },
    components:{
        commonHead
    }
}
</script>
<style lang="scss" scoped>
    .detail-head{
        width:100%;
        height:6rem;
        padding-top: 1px;
        background: orange;
        
    }
    .common-head{
        background: orange;
    }
    .myorder-title{
        font-size:.45rem;
        color: #fff
    }
    .detail-info{
        width:100%;
        height:2.6rem;
        line-height: 2.6rem;
        text-align: center;
        position: relative;
        margin-top:1.4rem;
        .detail-status{
            position: absolute;
            left:.5rem;
            color: #fff;
        }
        .detail-img{
            width:3.3rem;
        }
    }
                
</style>