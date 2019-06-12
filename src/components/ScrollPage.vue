<template>
  <div>
    <scroller v-if="dataList.length > 0"
              id="scroll"
              ref="scroll"
              :top="top"
              :stillHave="stillHave"
              :dataList="dataList"
              :refreshTime="refreshTime"
              :pullDownRefresh="DOWN_CONFIG"
              :pullUpLoad="UP_CONFIG"
              @showIcon="showIcon"
              @onPullUp="pullUpHandle"
              @onPullDown="pullDownHandle">
      <div class="list" slot="list">
        <video-list :list="dataList"></video-list>
      </div>
    </scroller>
    <div class="fix-icon" v-if="iconShow"  @click="backTop">
    </div>
  </div>
</template>

<script>
  import {
    DOWN_CONFIG,
    UP_CONFIG,
    DEVICE_RATIO
  } from "../util/api";

  import VideoList from "./VideoList";
  import Scroller from "./Scroller";
  import {dateFormat} from "../util/DateFormat";

  export default {
    components: {
      Scroller,
      VideoList
    },
    name: "scroll-page",
    props:{
      dataList:{
        type:Array,
        default:function () {
          return []
        }
      },
      top:{
        type:Number,
        default:0
      },
      isSecShow:{
        type:Boolean,
        default:true
      },
      tabIndex:{
        type:Number,
        default:0
      },
      stillHave:{
        type:Boolean,
        default:false
      },
      loading:{
        type:Boolean,
        default:false
      }
    },
    data() {
      return{
        list:[],
        DOWN_CONFIG,
        UP_CONFIG,
        DEVICE_RATIO,
        refreshTime:dateFormat().format('YYYY年MM月DD日 HH:mm:ss'),
        iconShow:false
      }
    },
    created() {
      this.initList()
    },
    computed:{
      scrollElement(){
        return this.$refs.scroll
      }
    },
    methods:{
      initList() {
        this.list = this.dataList
      },
      showIcon(status) {
        this.iconShow = status
      },
      backTop() {
        this.$refs.scroll.toTop()
      },
      pullUpHandle(val){
        this.scrollElement.PullingUpWord="加载完成";
        setTimeout(()=>{
          this.scrollElement.finish("PullUp");
          if(this.stillHave){
            this.$emit('getMoreList',0)
          }
        },1000)
      },
      pullDownHandle(val){
        if(!this.isSecShow){
          this.scrollElement.finish("PullDown");
          this.tempClick()
        }else {
          setTimeout(()=>{
            this.scrollElement.finish("PullDown");
            this.refreshTime = dateFormat().format('YYYY年MM月DD日 HH:mm:ss')
            this.$emit('getMoreList',1)
          },2000)
        }
      },
      tempClick() {
        this.$emit('pickStatus')
      }
    },
    watch:{
      tabIndex:{
        handler(v1,v2){
          if(v1 !=v2){
            this.initList()
          }
        },
        immediate: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  .list {
    height: 100%;
    position: relative;
  }
  .fix-icon {
    z-index: 999;
    width: px2Vw(40);
    height: px2Vw(40);
    background-size: cover;
    background-image: url("../assets/images/back-top.png");
    border-radius: 100%;
    position: absolute;
    bottom: 0;
    right: px2Vw(15);
  }
</style>
