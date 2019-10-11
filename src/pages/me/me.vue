<template>
    <div class="me">
        <h1>我的</h1>
        <button @click="$router.go(-1)">返回</button>
        <router-link to="/me/myAttention" tag="button">我的关注</router-link>
        <router-link to="/me/historyLook" tag="button">历史浏览</router-link>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .me{
        width:100%;
        height: 100vh;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        font-size: .5rem;
    }
</style>