<template>
  <div class="loading"><img src="../../assets/images/tail.gif"  alt="">
    <span>{{text}}{{loadingWord}}</span>
  </div>
</template>

<script>
    export default {
        name: "loading",
        props:['loadingWord','text']
    }
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/function";
  .loading {
    text-align: center;
    z-index: 100;
    width: 100%;
    height: px2Vw(20);
    line-height: px2Vw(20);
    margin-top: px2Vw(10);
    color:#959ba3 ;
    img {
      margin: 0 auto;
      width: px2Vw(20);
      height: px2Vw(20);
      vertical-align: middle;
    }
    span {
      vertical-align: middle;
      margin-left: px2Vw(10);
      font-size: px2Vw(12);
    }
  }
</style>
