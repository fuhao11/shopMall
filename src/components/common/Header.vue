<template>
    <div class="common-head">
        <router-link to="/" replace v-if="showBack">
            <img src="../../assets/images/back.png" alt="" class="back-icon">
        </router-link>
        <slot name="title"></slot>
        <slot name="complete"></slot>
    </div>
</template>
<script>
export default {
    name:'CommonHead',
    props:{
        showBack:Boolean
    }
}
</script>
<style lang="scss" scoped>
    .common-head{
        width:100%;
        height: 1.4rem;
        line-height: 1.4rem;
        text-align: center;
        position: relative;
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