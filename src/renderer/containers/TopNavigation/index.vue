<template>
    <div class="content TOPNAVIGATION">
        <div class="jumpBtn">
            <i class="icon-right-arrow"></i>
            <i class="icon-right-arrow"></i>
        </div>
        <div class="inputView">
            <i class="icon-fangdajing"></i>
            <input type="text" placeholder="搜索">
        </div>
        <div class="iconBox">
            <i class="icon-chilun"></i>
        </div>
        <div class="iconBox">
            <i class="icon-email"></i>
        </div>
    </div>
</template>

<script>
    export default {
        name:'top-navigation',
        created() {
            console.log(this.$route.matched,this.$route.name)
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
    }
</style>
