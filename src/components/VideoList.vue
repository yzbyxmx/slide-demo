<template>
    <div class="container">
         <div v-for="item in list" class="content">
              <div class="img" :style="{backgroundImage: `url(${item.img})`}">
              </div>
             <div class="detail">
               <p>{{item.videoName}}</p>
               <p>评分:<span class="cor-cau">{{item.score}}</span></p>
               <p>{{item.director}}</p>
               <p>{{item.actress}}</p>
             </div>
           <div class="buy">
               <span>购票</span>
           </div>
         </div>
    </div>
</template>

<script>
    export default {
        name: "video-list",
        props:['list']
    }
</script>

<style lang="scss" scoped>
  /*@import "../assets/scss/base/function";*/
  .container {
    margin-top: px2Vw(35);
  }
  .content {
    width: px2Vw(355);
    height: px2Vw(95);
    padding-top: px2Vw(5);
    margin-left: px2Vw(10);
    border-bottom: 0.5px solid #e9ecf0;
    font-size: px2Vw(14);
    &:last-child {
      border: none;
    }
      .img {
        margin-left: px2Vw(10);
        width: px2Vw(73);
        height: 73px;
        margin-right: px2Vw(10);
        float: left;
        background-size: cover;
      }
      .detail {
        float: left;
        width: px2Vw(180);
        height: 83px;
        font-size: px2Vw(12);
      }
      .buy {
        span {
          margin-top: px2Vw(20);
          font-size: px2Vw(12);
          padding: px2Vw(3) px2Vw(10);
          display: inline-block;
          background-color: pink;
          border-radius: px2Vw(20);
          color: white;
        }
      }
  }
</style>
