<template>
  <div class="home">
    <div class="container">

      <div class="col-8">
        <hotnew/>
        <news/>
        <itemcontent/>
<!--        <post></post>-->
      </div>
      <div class="col-4">
        <sidebar/>
        <advertisement/>
      </div>
    </div>
  </div>
</template>

<script>
import hotnew from "../HotNew/HotNew.vue";
import sidebar from "../SideBar/SideBar.vue";
import news from "../New/New.vue";
import itemcontent from "../ItemContent/ItemContent.vue"
import Advertisement from "../SideBar/Advertisement";
import Post from "../Post/Post";

export default {
  components: {Post, Advertisement, hotnew, sidebar, news, itemcontent},
  name: "Home",
  data() {
    return {
      msg: "Home page",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import './Home.css';
</style>
