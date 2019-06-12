<template>
  <div ref="wrapper" class="list-wrapper" :style="{top:0+'px',bottom: 0 +'px'}">
    <div class="scroll-content">
      <slot name="list"></slot>
      <div>
        <pulling-words v-show="!inPullUp && stillHave" :loadingText="beforePullUpWord"></pulling-words>
        <pulling-words  v-show="!inPullUp && !stillHave && dataList.length " :loadingText="'- 已经到底啦 -'"></pulling-words>
        <loading v-show="inPullUp" :loadingWord="PullingUpWord" :text="''"></loading>
      </div>
    </div>

    <transition name="pullDown">
      <loading class="pullDown" v-show="inPullDown" :loadingWord="refreshTime" :text="'上次刷新时间:'"></loading>
    </transition>
  </div>
</template>

<script>

  import Loading from "./loading/Loading";

  const  PullingUpWord="正在拼命加载中...";
  const  beforePullUpWord="上拉加载更多";
  const  finishPullUpWord="加载完成";

  const  PullingDownWord="加载中...";

  import BScroll from 'better-scroll'
  import PullingWords from "./pullingWords/PullingWords";



  export default {
    components: {
      PullingWords,
      Loading
    },
    name: "scroller",
    props:{
      dataList:{
        type: Array,
        default: []
      },
      stillHave:{
        type:Boolean,
        default:true
      },
      probeType: {
        type: Number,
        default: 3
      },
      click: {
        type: Boolean,
        default: true
      },
      pullDownRefresh: {
        type: null,
        default: false
      },
      pullUpLoad: {
        type: null,
        default: false
      },
      refreshTime:{
        type:String,
        default:''
      }
    },
    data(){
      return{
        scroll:null,
        inPullUp:false,
        inPullDown:false,
        beforePullUpWord,
        PullingUpWord,
        PullingDownWord,
        continuePullUp:true,
        fixIconShow:false,
        box:{},
        tempShow:false
      }
    },
    computed:{

    },
    mounted() {
      setTimeout(()=>{
        this.initScroll();

        this.scroll.on('scroll',(e)=>{
          let status = this.scroll.y < -200
          this.$emit('showIcon', status)
        })

        this.scroll.on('pullingUp',()=> {
          if(this.continuePullUp){
            this.beforePullUp();
            this.$emit("onPullUp");
          }
        });

        this.scroll.on('pullingDown',()=> {
          this.beforePullDown();
          this.$emit("onPullDown");
        });


      },20)


    },
    methods:{
      toTop() {
        this.scroll.scrollTo(0,0)
      },

      initScroll() {
        if (!this.$refs.wrapper) {
          return
        }
        this.scroll = new BScroll(this.$refs.wrapper, {
          probeType: this.probeType,
          click: this.click,
          pullDownRefresh: this.pullDownRefresh,
          pullUpLoad: this.pullUpLoad,
        })
      },
      beforePullUp(){
        this.PullingUpWord = PullingUpWord;
        this.inPullUp=true;
      },
      beforePullDown(){
        this.disable();
        this.inPullDown=true;
      },
      finish(type){
        this["finish"+type]();
        this.enable();
        this["in"+type]=false;
      },
      disable() {
        this.scroll && this.scroll.disable()
      },
      enable() {
        this.scroll && this.scroll.enable()
      },
      refresh() {
        this.scroll && this.scroll.refresh()
      },
      finishPullDown(){
        this.scroll&&this.scroll.finishPullDown()
      },
      finishPullUp(){
        this.scroll&&this.scroll.finishPullUp()
      },
    }
  }
</script>

<style lang="scss" scoped>
  .list-wrapper{
    position: absolute;
    left: 0;
    right:0;
    overflow: hidden;
    background: #f7f8f9;
  }
  .scroll-content {
    min-height: calc(100% + 1px );
  }



  .pullDown{
    position: absolute;
    top:0;
    left:0;
  }

  .pullDown-enter-active{
    transition:all 0.2s;
  }

  .pullDown-enter, .pullDown-leave-active{
    transform:translateY(-100%);
    transition:all 0.2s;
  }

</style>
