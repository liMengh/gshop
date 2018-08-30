<template>
  <div id="app">
    <router-view/>
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
  import FooterGuide from "./components/FooterGuide/FooterGuide.vue"
  export default {
    components:{
      FooterGuide
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  /*stylus 结构化编码,父级引用&指向父选择器,定义变量,混合(复用css)*/
  .app
    width 100%
    height 100%
    background-color #f5f5f5
</style>
