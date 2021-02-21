<template>
  <div class="advertisement" id="advertisement">
      <div class="content">
        <a href="">
          <img src="https://baomoi-static.zadn.vn/events/bluezone_3_min.jpg" alt="">
        </a>
      </div>
      <div class="space"></div>
      <div class="content">
        <a href="">
          <img src="https://baomoi-static.zadn.vn/events/banner_hcm_02-min.png" alt="">
        </a>
      </div>
      <div class="space"></div>

    </div>

</template>

<script>
  export default {
    methods: {

    }
  }
</script>

<style>
  .advertisement .space {
    margin-top: 8px;
  }
  .advertisement .content {
    background: #f5f5f5;
    padding: 8px 8px;
  }
  .advertisement {
    position: sticky;
    position: -webkit-sticky;
    top: 40px;
  }
  .advertisement img {
    width: 100%;
  }
  .advertisement a {
  }
  @media only screen and (max-width: 600px) {
    .advertisement {
      display: none;
    }
  }
</style>
