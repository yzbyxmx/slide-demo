<template>
  <div class="loading-word ">
        <span>
            {{loadingText}}
        </span>
  </div>
</template>

<script>
  export default {
    name: "pulling-words",
    props:['loadingText']
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/function";
  .loading-word {
    text-align: center;
    z-index: 100;
    width: 100%;
    margin-top: px2Vw(10);
    padding-bottom: px2Vw(15);
    height: px2Vw(25);
    line-height: px2Vw(25);
    color:#959ba3 ;
    span {
      vertical-align: middle;
      margin-left: px2Vw(5);
      font-size: px2Vw(12);
      padding-top: px2Vw(12);
    }
  }
</style>
