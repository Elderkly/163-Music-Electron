<template>
    <div class="main-BottomBox">

    </div>
</template>
<script>
    export default {
        name:'bottom-navigation'
    }
</script>
<style lang="scss">
    .main-BottomBox{
        width: 100%;
        height: 70px;
        position: fixed;
        bottom: 0;
        overflow: hidden;
        background: rgba(255,255,255,.7);
        -webkit-filter: blur(5px);
        -moz-filter: blur(5px);
        -ms-filter: blur(5px);
        -o-filter: blur(5px);
        filter: blur(5px);
    }
</style>
