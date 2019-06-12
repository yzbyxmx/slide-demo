<template>
  <div class="hello">
    <scroll-page :dataList="dataList"
                 @getMoreList="getMoreList"></scroll-page>
  </div>
</template>

<script>
import ScrollPage from "./ScrollPage";
import PostImg from '../assets/images/main.png'

export default {
  components: {ScrollPage},
  name: 'HelloWorld',
  data () {
    return {
      dataList:[
        {
          img:PostImg,
          videoName:'追龙',
          videoType:'2D',
          isImax:true,
          score:7.6,
          director:'王晶',
          actress:'张三、里斯本、smith',
        },
        {
          img:PostImg,
          videoName:'追龙',
          videoType:'2D',
          isImax:true,
          score:7.6,
          director:'王晶',
          actress:'张三、里斯本、smith',
        },
        {
          img:PostImg,
          videoName:'追龙',
          videoType:'2D',
          isImax:true,
          score:7.6,
          director:'王晶',
          actress:'张三、里斯本、smith',
        },
        {
          img:PostImg,
          videoName:'追龙',
          videoType:'2D',
          isImax:true,
          score:7.6,
          director:'王晶',
          actress:'张三、里斯本、smith',
        },
        {
          img:PostImg,
          videoName:'追龙',
          videoType:'2D',
          isImax:true,
          score:7.6,
          director:'王晶',
          actress:'张三、里斯本、smith',
        },
        {
          img:PostImg,
          videoName:'追龙',
          videoType:'2D',
          isImax:true,
          score:7.6,
          director:'王晶',
          actress:'张三、里斯本、smith',
        },
        {
          img:PostImg,
          videoName:'追龙',
          videoType:'2D',
          isImax:true,
          score:7.6,
          director:'王晶',
          actress:'张三、里斯本、smith',
        },
        {
          img:PostImg,
          videoName:'追龙',
          videoType:'2D',
          isImax:true,
          score:7.6,
          director:'王晶',
          actress:'张三、里斯本、smith',
        },
        {
          img:PostImg,
          videoName:'追龙',
          videoType:'2D',
          isImax:true,
          score:7.6,
          director:'王晶',
          actress:'张三、里斯本、smith',
        },
      ]
    }
  },
  methods:{
    getMoreList(type) {
       //调用接口
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "../assets/scss/mixinx";
  @import "../assets/scss/variables";
 .hello {
    height: 100%;
 }
</style>
