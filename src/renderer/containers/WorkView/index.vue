<template>
    <div class="main-WorkView">
        <div class="TOPNAVIGATION"></div>
        <div class="userHead">
            <div class="head">

            </div>
            <p>未登录<span>▶</span></p>
        </div>
        <div class="workViewBox">
            <div class="topWorkButton">
                <div class="Selected" @click="link()">
                    <i class="icon-wangyiyunyinle"></i>
                    <span>发现音乐</span>
                </div>
                <div @click="alert(123)">
                    <i class="icon-leida"></i>
                    <span>私人FM</span>
                </div>
            </div>
            <song-list-box type='myLike'/>
            <song-list-box type='collect'/>
        </div>
    </div>
</template>

<script>
    import songListBox from '../songListBox/index'
    export default {
        name:'work-view',
        components:{
            songListBox
        },
        methods:{
            link(path){
                console.log(123)
                this.$router.push(path)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .main-WorkView{
        width: 200px;
        background: #fff;
        padding-bottom: 70px;
        border-right: 1px solid #e6e6e6;
        .workViewBox{
            height: calc(100% - 105px);
            overflow: scroll;
        }
        .TOPNAVIGATION{
            height: 40px;
        }
        .userHead{
            height: 70px;
            display: flex;
            flex-direction: row;
            align-items: center;
            padding: 0 8px;
            .head{
                width: 40px;
                height: 40px;
                border-radius: 50%;
                overflow: hidden;
                background: aqua;
                margin-right: 8px;
            }
            p{
                font-size: 13px;
                color: #333;
            }
            span{
                font-size: 10px;
                margin-left: 8px;
            }
        }
        .topWorkButton{
            color:#333;
            &>div{
                display: flex;
                flex-direction: row;
                align-items: center;
                font-size: 13px;
                height: 35px;
                position: relative;
                padding-left: 42px;
                /*cursor: pointer;*/
                border-left: 3px solid transparent;
                -webkit-transition: all .3s;
                -moz-transition: all .3s;
                -ms-transition: all .3s;
                -o-transition: all .3s;
                transition: all .3s;
                &:hover{
                    background: #eae9eb;
                }
            }
            i{
                position: absolute;
                left: 20px;
            }
            .icon-wangyiyunyinle{
                font-size: 20px;
                left: 18px;
            }
            .Selected{
                background: #eae9eb;
                color: #d33a31;
                border-left: 3px solid #d33a31;
            }
        }
    }

</style>
