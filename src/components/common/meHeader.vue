<template>
    <div class="me-head">
        <img src="../../assets/images/back.png" alt="" class="back-icon" @click="$router.go(-1)">
        <slot name="title"></slot>
        <!-- <svg t="1570697175077" class="choose-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2434" width="20" height="20"><path d="M949.7 322.1c-12.7-12.7-33.3-12.8-46-0.2L511.9 713.3l-393-392.4c-12.6-12.6-33.2-12.5-46 0.2-12.7 12.7-12.8 33.3-0.2 45.9l412.7 412.2c0.9 1.2 1.9 2.4 3.1 3.6 12.7 12.7 33.3 12.8 46 0.2l415.4-415c12.6-12.6 12.6-33.2-0.2-45.9z" p-id="2435"></path></svg> -->
        <ul class="select-list" v-if="show">
            <li v-for="(item, index) in selectList" :key="index"  @click="itemClick(item)">{{item}}</li>
        </ul>
        <slot name="clear"></slot>
    </div>
</template>
<script>
export default {
    props:{
        showList:Boolean,
        selectList:Array
    },
    data() {
        return {
            show: this.showList
        }
    },
    methods:{
        itemClick(text){
            this.$emit('selectChange',text);
            this.show = false;
        }
    }
}
</script>
<style lang="scss" scoped>
    .me-head{
        width: 100%;
        height: 1.4rem;
        line-height: 1.4rem;
        text-align: center;
        position: fixed;
        top: 0;
        left: 0;
        .back-icon{
            width:.8rem;
            height:.8rem;
            position: absolute;
            top:.28rem;
            left:.3rem;
        }
        .select-list{
            width:100%;
            line-height: 1rem;
            background: #eee;
            position: absolute;
            top:1.3rem;
            left:0;
            z-index: 68;
        }
    }
</style>