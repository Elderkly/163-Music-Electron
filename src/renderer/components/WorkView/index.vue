<template>
    <div class="main-WorkView">
        <div class="TOPNAVIGATION"></div>
        <div class="userHead">
            <div class="head">

            </div>
            <p>未登录<span>▶</span></p>
        </div>
        <i class="icon-email"></i>
    </div>
</template>

<script>
    export default {
        name:'work-view'
    }
</script>

<style lang="scss" scoped>
    .main-WorkView{
        width: 200px;
        background: #42b983;
        .TOPNAVIGATION{
            height: 40px;
            background: #000;
        }
        .userHead{
            height: 70px;
            background: #c3d9ff;
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
    }
    .icon-email{
        color:#000;
        font-size: 30px;
    }
</style>
