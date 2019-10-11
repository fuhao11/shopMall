<template>
    <div class="scrollWrapper" ref="scrollWrapper">
    <div class="myattention">
        <me-head @selectChange="selectChange" :selectList="selectList" :showList="showList">
            <h3 class="head-title" slot="title" @click="titleClick">
                {{selectVal}}
                <svg t="1570697175077" class="choose-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2434" width="20" height="20"><path d="M949.7 322.1c-12.7-12.7-33.3-12.8-46-0.2L511.9 713.3l-393-392.4c-12.6-12.6-33.2-12.5-46 0.2-12.7 12.7-12.8 33.3-0.2 45.9l412.7 412.2c0.9 1.2 1.9 2.4 3.1 3.6 12.7 12.7 33.3 12.8 46 0.2l415.4-415c12.6-12.6 12.6-33.2-0.2-45.9z" p-id="2435"></path></svg>
            </h3>
        </me-head>

        <section class="main">
            <ul>
                <li class="item">
                    <div class="pro-img">
                        <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3247749323,1379996244&fm=26&gp=0.jpg" alt="">
                    </div>
                    <div class="pro-info">
                        <div class="pro-name">RUBY#01RUBY#01RUBY#01RUBY#01RUBY#01</div>
                        <div class="pro-price">￥999</div>
                    </div>
                    <div class="pro-other">
                        <div class="pro-btn">取消关注</div>
                    </div>
                </li>
                <li class="item">
                    <div class="pro-img">
                        <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3247749323,1379996244&fm=26&gp=0.jpg" alt="">
                    </div>
                    <div class="pro-info">
                        <div class="pro-name">RUBY#01RUBY#01RUBY#01RUBY#01RUBY#01</div>
                        <div class="pro-price">￥999</div>
                    </div>
                    <div class="pro-other">
                        <div class="pro-btn">取消关注</div>
                    </div>
                </li>
                <li class="item">
                    <div class="pro-img">
                        <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3247749323,1379996244&fm=26&gp=0.jpg" alt="">
                    </div>
                    <div class="pro-info">
                        <div class="pro-name">RUBY#01RUBY#01RUBY#01RUBY#01RUBY#01</div>
                        <div class="pro-price">￥999</div>
                    </div>
                    <div class="pro-other">
                        <div class="pro-btn">取消关注</div>
                    </div>
                </li>
                <li class="item">
                    <div class="pro-img">
                        <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3247749323,1379996244&fm=26&gp=0.jpg" alt="">
                    </div>
                    <div class="pro-info">
                        <div class="pro-name">RUBY#01RUBY#01RUBY#01RUBY#01RUBY#01</div>
                        <div class="pro-price">￥999</div>
                    </div>
                    <div class="pro-other">
                        <div class="pro-btn">取消关注</div>
                    </div>
                </li>
                <li class="item">
                    <div class="pro-img">
                        <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3247749323,1379996244&fm=26&gp=0.jpg" alt="">
                    </div>
                    <div class="pro-info">
                        <div class="pro-name">RUBY#01RUBY#01RUBY#01RUBY#01RUBY#01</div>
                        <div class="pro-price">￥999</div>
                    </div>
                    <div class="pro-other">
                        <div class="pro-btn">取消关注</div>
                    </div>
                </li>
                <li class="item">
                    <div class="pro-img">
                        <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3247749323,1379996244&fm=26&gp=0.jpg" alt="">
                    </div>
                    <div class="pro-info">
                        <div class="pro-name">RUBY#01RUBY#01RUBY#01RUBY#01RUBY#01</div>
                        <div class="pro-price">￥999</div>
                    </div>
                    <div class="pro-other">
                        <div class="pro-btn">取消关注</div>
                    </div>
                </li>
                <li class="item">
                    <div class="pro-img">
                        <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3247749323,1379996244&fm=26&gp=0.jpg" alt="">
                    </div>
                    <div class="pro-info">
                        <div class="pro-name">RUBY#01RUBY#01RUBY#01RUBY#01RUBY#01</div>
                        <div class="pro-price">￥999</div>
                    </div>
                    <div class="pro-other">
                        <div class="pro-btn">取消关注</div>
                    </div>
                </li>
                <li class="item">
                    <div class="pro-img">
                        <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3247749323,1379996244&fm=26&gp=0.jpg" alt="">
                    </div>
                    <div class="pro-info">
                        <div class="pro-name">RUBY#01RUBY#01RUBY#01RUBY#01RUBY#01</div>
                        <div class="pro-price">￥999</div>
                    </div>
                    <div class="pro-other">
                        <div class="pro-btn">取消关注</div>
                    </div>
                </li>
                <li class="item">
                    <div class="pro-img">
                        <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3247749323,1379996244&fm=26&gp=0.jpg" alt="">
                    </div>
                    <div class="pro-info">
                        <div class="pro-name">RUBY#01RUBY#01RUBY#01RUBY#01RUBY#01</div>
                        <div class="pro-price">￥999</div>
                    </div>
                    <div class="pro-other">
                        <div class="pro-btn">取消关注</div>
                    </div>
                </li>
            </ul>
            <div class="pullup-wrapper">
                <svg t="1570763357170" :class="[isPullUp ? 'pulluploading' : '']" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2709" width="20" height="20"><path d="M528.4 1024c-282.3 0-512-229.7-512-512S246 0 528.4 0c131 0 255.6 49.4 351 139.2 11.7 11 12.2 29.3 1.2 41-11 11.6-29.3 12.2-41 1.2C755 101.8 644.5 58 528.4 58c-250.4 0-454 203.7-454 454s203.7 454 454 454c188.7 0 354.9-113.6 423.3-289.5 5.8-14.9 22.6-22.4 37.5-16.5 14.9 5.8 22.3 22.6 16.5 37.5C928.5 895.9 741.2 1024 528.4 1024z" fill="#707070" p-id="2710"></path></svg>
            </div>
        </section>
        <div class="pulldown-wrapper" :style="top">
            <svg t="1570763357170" :class="[isPullDown ? 'pulldownloading' : '']" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2709" width="20" height="20"><path d="M528.4 1024c-282.3 0-512-229.7-512-512S246 0 528.4 0c131 0 255.6 49.4 351 139.2 11.7 11 12.2 29.3 1.2 41-11 11.6-29.3 12.2-41 1.2C755 101.8 644.5 58 528.4 58c-250.4 0-454 203.7-454 454s203.7 454 454 454c188.7 0 354.9-113.6 423.3-289.5 5.8-14.9 22.6-22.4 37.5-16.5 14.9 5.8 22.3 22.6 16.5 37.5C928.5 895.9 741.2 1024 528.4 1024z" fill="#707070" p-id="2710"></path></svg>
        </div>
    </div>
        
    </div>
</template>
<script>
import meHead from 'common/meHeader'
import BScroll from 'better-scroll'
export default {
    data() {
        return {
            scroll:null,
            scrollOption:{
                click:true,
                probeType:3,
                startY: 0,
                refreshDelay:20,
                pullDownRefresh : {
                    threshold : 90,
                    stop : 50
                },
                pullUpLoad:{
                    threshold: 0
                }
            },
            top:{
                top: '-50px'
            },
            isPullDown:false,
            isPullUp:false,
            showList:false,
            selectVal:'我的关注',
            selectList:['关注的商品','关注的店铺']
        }
    },
    components:{
        meHead
    },
    methods:{
        titleClick(){
            this.$children[0].show=true;
        },
        selectChange(t){
            this.selectVal = t
        }
    },
    mounted(){
        var _this = this;
        _this.scroll = new BScroll(_this.$refs.scrollWrapper,_this.scrollOption)
        _this.$nextTick(() => {
            // console.log(_this.scroll)
            _this.scroll.on('touchEnd', (pos) => {
                if(pos.y > 50){
                    console.log('loadMore')
                    _this.isPullDown = true
                    _this.top = {top:'0'}
                }
            });
            //下拉
            _this.scroll.on('pullingDown', () => {
                _this.top =  { top:'0' }
                setTimeout(()=>{
                    _this.scroll.finishPullDown()
                    _this.isPullDown = false
                    _this.top =  { top:'-50px' }
                    _this.scroll.refresh()
                },3000)
            });
            //上拉
            _this.scroll.on('pullingUp', () => {
                console.log('上拉加载')
                _this.isPullUp = true
                setTimeout(() => {
                    _this.isPullUp = false
                    _this.scroll.finishPullUp()
                    _this.scroll.refresh()
                },2000)
            })
            
        });
        

        
    }
}
</script>
<style lang="scss" scoped>
    @import '../../style/bus';
    .scrollWrapper{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #eee;
        overflow: hidden;
        z-index: 66;
        .head-title{
            font-size: .47rem;
        }
        .choose-icon{
            width: .3rem;
            height: .3rem;
        }
        .pulldown-wrapper{
            width:100%;
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            // transition: all 1s infinite;
            // top:-50px;
        }
        .pullup-wrapper{
            width:100%;
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            bottom: -50px;
            left: 0;
        }
        
    }
    .main{
        width:94%;
        height: auto;
        margin:0 auto;
        padding: 1.6rem 0 2rem;
        .item{
            width:100%;
            height: 2.5rem;
            background: #fff;
            border-radius: .2rem;
            padding:.1rem .2rem;
            font-size: .42rem;
            box-sizing: border-box;
            display: flex;
            justify-content: space-around;
            align-items: center;
            margin-bottom: .3rem;
            .pro-img{
                width:1.5rem;
                height: 1.5rem;
                img{
                    width:100%;
                    height: 100%;
                }
            }
            .pro-info{
                width: 50%;
            }
            .pro-info,.pro-other{
                line-height: 1rem;
            }
            .pro-other{
                align-self: flex-end;
                .pro-btn{
                    width:1.8rem;
                    height:.55rem;
                    text-align: center;
                    color: #666;
                    font-size: .27rem;
                    border-radius: .4rem;
                    line-height: .55rem;
                    border:1px solid #ccc;
                    margin-bottom: .3rem;
                }
            }
            .pro-name{
                width:100%;
                @include ellpisis;
            }
        }
    }
    .pulldownloading,.pulluploading{
        animation: pulldownloading .5s linear infinite;
    }
    @keyframes pulldownloading {
        0%{transform: rotate(0)}
        100%{transform: rotate(360deg)}
    }
</style>