<template>
    <div>
        <div class="loading-box">
            <svg t="1571013231242" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1852" width="50" height="50"><path d="M512 981.312a469.312 469.312 0 1 0-445.824-322.24A42.688 42.688 0 1 0 147.2 632.32 384 384 0 1 1 512 896a42.688 42.688 0 1 0 0 85.312z" p-id="1853" fill="#707070"></path></svg>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .loading-box{
        width: 2.5rem;
        height: 2.5rem;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        align-items: center;
        justify-content: center;
        .icon{
            animation: route .5s linear infinite;
        }
    }
    @keyframes route {
        0%{transform: rotate(0)}
        100%{transform: rotate(360deg)}
    }
</style>