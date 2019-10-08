<template>
  <div class="hello">
    <h1>Home</h1>
    <router-link to="/discuss" tag="button" replace>全部评价</router-link>
    <router-link to="/shopCar" tag="button" replace>购物车</router-link>
    <router-link to="/myorder" tag="button" replace>我的订单</router-link>
    <router-link :to="'/bussiness/' + 1" tag="button">店铺主页</router-link>
    <button @click="clickMe">点我去店铺主页</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    clickMe () {
      this.$router.push({name:'bussiness', params:{a:11}})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .hello
    width 100%
    height 100vh
    display flex
    flex-direction column
    justify-content space-around
    align-items center
    font-size .5rem
</style>
