<template>
  <header class="header">
    <div class="banner">
      <img
        src="http://localhost:8888/wp-content/uploads/2018/12/advt-768-90.png"
        alt=""
      />
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style>
.header .banner {
  padding: 0 8px;
}
.header img {
  width: 100%;
  margin: 0 auto;
  vertical-align:bottom;
  /*padding: 0 8px;*/
  /*padding-left: 8px;*/
}
@media screen and (min-width: 1024px) {
  .header {
    max-width: 970px;
    margin: 0 auto;
    padding: 8px 16px;
  }
}

@media screen and (max-width: 600px) {
  .header {
    padding: 4px 0;
  }
  .header .banner {
    padding: 0 0;
  }
}
</style>
