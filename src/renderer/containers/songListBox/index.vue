<template>
    <div>
        <div class="songList-topview">
            <i class="icon-03"></i>
            <span>{{type === 'myLike' ? '创建的歌单' : '收藏的歌单'}}</span>
            <i class="icon-jia"></i>
        </div>
        <div class="songList-content">
            <div class="songList-items">
                <i class="icon-xinaixinfuzhi"></i>
                <span>我喜欢的音乐</span>
            </div>
            <div class="songList-items">
                <i class="icon-gedan"></i>
                <span>歌单111</span>
            </div>
            <div class="songList-items">
                <i class="icon-gedan"></i>
                <span>歌单111</span>
            </div>
            <div class="songList-items">
                <i class="icon-gedan"></i>
                <span>歌单111</span>
            </div>
            <div class="songList-items">
                <i class="icon-gedan"></i>
                <span>歌单111</span>
            </div>
            <div class="songList-items">
                <i class="icon-gedan"></i>
                <span>歌单111</span>
            </div>
            <div class="songList-items">
                <i class="icon-gedan"></i>
                <span>歌单111</span>
            </div>
            <div class="songList-items">
                <i class="icon-gedan"></i>
                <span>歌单111</span>
            </div>
            <div class="songList-items">
                <i class="icon-gedan"></i>
                <span>歌单111</span>
            </div>
            <div class="songList-items">
                <i class="icon-gedan"></i>
                <span>歌单111</span>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name:'song-list-box',
        props:['type'],
        created() {
            console.log(this.type)
        }
    }
</script>

<style lang="scss" scoped>
    p,span{
        user-select:none;
    }
    .songList-topview{
        display: flex;
        flex-direction: row;
        padding-left: 7px;
        align-items: center;
        padding-right: 5px;
        margin-top: 30px;
        margin-bottom: 5px;
        &:hover{
            & .icon-03 {
                color: #949494;
            }
        }
        .icon-03{
            margin-right: 7px;
            font-size: 8px;
            color: #c6c5c6;
            transform: rotate(180deg);
        }
        span{
            font-size: 12px;
            flex:1;
            color: #666;
        }
        .icon-jia{
            color: #333;
            font-size: 14px;
        }
    }
    .songList-content{
        .songList-items{
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
            .icon-xinaixinfuzhi{
                position: absolute;
                left: 20px;
                font-size: 13px;
            }
            .icon-gedan{
                position: absolute;
                left: 21px;
                font-size: 13px;
            }

        }
    }
</style>
