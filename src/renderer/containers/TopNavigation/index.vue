<template>
    <div class="content TOPNAVIGATION">
        <div class="jumpBtn" v-if="history.length <= 1 && pageIndex === 0">
            <i class="icon-right-arrow" @click="jump(-1)"></i>
            <i class="icon-right-arrow" @click="jump(1)"></i>
        </div>
        <div class="jumpBtn" v-else>
            <i class="icon-right-arrow" @click="jump(-1)" :class="{'i-focus':pageIndex > 1}"></i>
            <i class="icon-right-arrow" @click="jump(1)" :class="{'i-focus':pageIndex !== history.length}"></i>
        </div>
        <div class="inputView">
            <i class="icon-fangdajing"></i>
            <input type="text" placeholder="搜索">
        </div>
        <div class="iconBox" @click="link('Seting')">
            <i class="icon-chilun"></i>
        </div>
        <div class="iconBox">
            <i class="icon-email"></i>
        </div>
    </div>
</template>

<script>
    import { mapState,mapMutations } from 'vuex'

    export default {
        name:'top-navigation',
        computed:{
            ...mapState({
                history: state => state.Counter.history,
                pageIndex: state => state.Counter.pageIndex,
            })
        },
        created() {
            // console.log(this.history.length,this.pageIndex)
        },
        methods:{
            ...mapMutations({
                setPageIndex:'SET_PAGEINDEX',
                setNavigationClick:'SET_PRESS_TYPE'
            }),
            link(router){
                this.$router.push(router)
            },
            jump(page){
                /*
                *   点击导航栏跳转按键时触发
                *   如果当前的页面层级已经是最底级或者已经是最高级则禁止点击
                *   否则
                *       将路由点击类型修改为true 用于路由卫士进行判断
                *       修改经过路由点击后的页面层级
                *       跳转到相应页面
                * */
                const setIndex = this.pageIndex + page
                if (setIndex < 1 || setIndex > this.history.length) return
                this.setNavigationClick(true)
                this.setPageIndex(setIndex)
                this.$router.go(page)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .content{
        height: 40px;
        width: 100%;
        background: #fff;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0 25px 0 35px;
        .jumpBtn{
            height: 100%;
            flex: 1;
            display: flex;
            align-items: center;
            i{
                color: #c8c8c8;
                font-size: 14px;
            }
            i:first-child{
                transform: rotate(180deg);
                margin-right: 25px;
                position: relative;
                top: -2px;
            }
        }
        .inputView{
            position: relative;
            line-height: 25px;
            margin-right: 25px;
            i{
                position: absolute;
                color: #333;
                left: 6px;
                top: 1px;
                font-size: 15px;
            }
            input{
                background: #f8f8f8;
                border-radius: 20px;
                width: 152px;
                height: 25px;
                border: none;
                text-indent: 24px;
                color: #333;
                font-size: 13px;
                font-weight: 300;
                &::-webkit-input-placeholder{
                    color: #cccccc;
                }
            }
        }
        .iconBox{
            width: 25px;
            height: 25px;
            border-radius: 50%;
            background: transparent;
            display: flex;
            align-items: center;
            margin-right: 15px;
            justify-content: center;
            -webkit-transition: all .3s;
            -moz-transition: all .3s;
            -ms-transition: all .3s;
            -o-transition: all .3s;
            transition: all .3s;
            &:hover{
                background: #f0f0f0;
            }
            &:last-child{
                margin-right: 0;
            }
        }
        .icon-chilun{
            color: #333;
            font-size: 18px;
            /*margin-right: 20px;*/
        }
        .icon-email{
            color: #333;
            font-size: 18px;
            position: relative;
            top: -2px;
        }
        .i-focus{
            color:#333!important;
        }
    }
</style>
