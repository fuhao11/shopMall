<template>
    <div class="cash-wrapper">
        <section class="cash">
            <common-head :showBack="true" :headBgcolor="headBgcolor">
                <h3 class="title" slot="title">申请提现</h3>
                <span @click="$router.push('/cash/cashrec')" class="title-r" slot="chshrec">提现记录</span>
            </common-head>

            <main class="main">
                <div class="cash-method">
                    <div class="cash-input cash-method-activce" @click="showMethod">
                        {{defaultMethod}}
                        <svg t="1570697175077" class="choose-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2434" width="20" height="20"><path d="M949.7 322.1c-12.7-12.7-33.3-12.8-46-0.2L511.9 713.3l-393-392.4c-12.6-12.6-33.2-12.5-46 0.2-12.7 12.7-12.8 33.3-0.2 45.9l412.7 412.2c0.9 1.2 1.9 2.4 3.1 3.6 12.7 12.7 33.3 12.8 46 0.2l415.4-415c12.6-12.6 12.6-33.2-0.2-45.9z" p-id="2435"></path></svg>
                    </div>
                    <ul class="cash-method-list" v-if="showList">
                        <li class="cash-method-item" v-for="(item, index) in methodList" :key="index" @click="chooseMethod(item)">{{item}}</li>
                    </ul>
                </div>

                <section class="cash-money">
                    <div class="cash-money-top">提现金额</div>
                    <div class="cash-money-input">
                        <span>￥</span>
                        <input type="number" v-model="willCash" class="cash-input">
                    </div>
                    <section class="cash-useful">
                        <div class="cash-ke">可提现 <span>0.00</span>元</div>
                        <div>全部提现</div>
                    </section>
                </section>

                <div class="cash-tip">24小时开放提现功能，提现到账略有延迟。</div>

                <div class="tocashDetail" @click="toDetail">点我提现</div>
            </main>
        </section>
        <transition mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>
<script>
import CommonHead from 'common/Header'
export default {
    data() {
        return {
            headBgcolor:{background:'#eee'},
            showList:false,
            methodList:['支付宝','微信','银行卡'],
            defaultMethod:'选择提现方式',
            willCash:''
        }
    },
    components:{
        CommonHead
    },
    methods:{
        showMethod(){
            this.showList = true
        },
        chooseMethod(method){
            this.defaultMethod = method;
            this.showList = false;
        },
        toDetail(){
            var _this = this;
            //判断输入金额
            // _this.willCash>0 && (/^[0-9]*$/).test(_this.willCash)
            if(_this.defaultMethod !== '选择提现方式'){
                if(parseFloat(_this.willCash)){
                    _this.willCash = '';
                    _this.defaultMethod = '选择提现方式';
                    _this.$router.push('/cash/cashDetail');
                }else{
                    alert('请输入正确的提现金额')
                }
            }else{
                alert('请选择提现方式')
            }
            
            
        }
    }
}
</script>
<style lang="scss" scoped>
    .cash-wrapper{
        height: 100vh;
        position: relative;
        background: #eee;
        input{
            outline: none;
        }
    }
    .cash{

        .title{
            font-size: .47rem;
        }
        .title-r{
            position: absolute;
            top:.37rem;
            right:.7rem;
            width: 1.5rem;
            height: .6rem;
            line-height: .6rem;
            border:1px solid #ccc;
            border-radius: .3rem;
            font-size: .3rem;
        }
    }
    .main{
        width:94%;
        height:calc(100vh - 1.3rem);
        margin:0 auto;
        padding-top: 1px;
        .cash-method{
            margin-top: 2rem;
            position: relative;
        }
    }
    .cash-input{
        height: 1rem;
        line-height: 1rem;
        background: #fff;
        padding-left: .36rem;
    }
    .cash-method-list{
        width:100%;
        line-height: 1rem;
        background: #fff;
        box-sizing: border-box;
        padding-left: .36rem;
        position: absolute;
        top: 1rem;
        left: 0;
        z-index: 66;
    }
    .choose-icon{
        position: absolute;
        width: .3rem;
        height: .3rem;
        top: .35rem;
        right: .5rem;
    }
    .cash-money{
        height: 3rem;
        background: #fff;
        padding:.25rem .8rem;
        margin-top: 1rem;
        .cash-money-top{
            font-size: .42rem;
            color: #666;
            margin-bottom: .5rem;
        }
        .cash-money-input{
            padding-left: .2rem;
            // border-bottom: 1px solid #ccc;
            position: relative;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            .cash-input{
                width:90%;
                line-height: .6rem;
                padding:0 .2rem;
                font-size: .45rem;
                border:none;
                border-bottom: 1px solid #ccc;
            }
        }
        .cash-useful{
            display: flex;
            justify-content: space-between;
            line-height: .7rem;
            margin-top: .2rem;
            .cash-ke{
                color: #666;
            }
        }
    }
    .cash-tip{
        margin:.75rem 0 2rem 0;
        color: #ccc;
    }
    .tocashDetail{
        width:70%;
        height: 1rem;
        margin: 0 auto;
        line-height: 1rem;
        border-radius: .5rem;
        background: orange;
        color: #fff;
        text-align: center;
        font-size: .47rem;
    }

</style>