<template>
  <div class="home">
    <div class="container">
      <div class="col-8 hot-new">
        <hotnew />
      </div>
      <div class="col-4 right-content">
        <!-- <sidebar/> -->
      </div>
    </div>
  </div>
</template>

<script>
import hotnew from "../HotNew/HotNew.vue";
import sidebar from "../SideBar/RightContent.vue";
export default {
  components: { hotnew, sidebar },
  name: "Home",
  data() {
    return {
      msg: "Home page",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import './Home.css';
</style>
