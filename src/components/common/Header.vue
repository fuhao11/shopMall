<template>
    <div class="common-head" :style="headBgcolor">
        <!-- <router-link to="/" replace v-if="showBack">
            <img src="../../assets/images/back.png" alt="" class="back-icon">
        </router-link> -->
        <div v-if="showBack" >
            <img src="../../assets/images/back.png" alt="" class="back-icon" @click="$router.go(-1)">
        </div>
        <slot name="title"></slot>
        <slot name="complete"></slot>
        <slot name="chshrec"></slot>
    </div>
</template>
<script>
export default {
    name:'CommonHead',
    props:{
        showBack:Boolean,
        headBgcolor:Object
    }
}
</script>
<style lang="scss" scoped>
    .common-head{
        width:100%;
        height: 1.4rem;
        line-height: 1.4rem;
        text-align: center;
        position: fixed;
        top:0;
        left:0;
        background:#fff;
        .back-icon{
            width:.8rem;
            height:.8rem;
            position: absolute;
            top:.28rem;
            left:.3rem;
        }
        .head-title{
            font-size:.47rem
        }
    }
</style>