<template>
  <div class="story">
    <a class="imghover" href="abcd">
      <figure>
        <img
          src="https://image.thanhnien.vn/660x370/uploaded/minhgiao/2021_01_19/hoang-sa-afp_exxp.jpg"
          alt="hihi"
          style="width: 100%"
        />
      </figure>
    </a>
    <h1>Ông Huy chia tay Nhà Trắng, ông Biden tới Điện Capitol</h1>
    <p>13 Giờ Trước</p>
  </div>
</template>

<script>
export default {};
</script>
    
<style scoped>
.story h1:hover {
  color: #0082e6;
}

figure {
  width: 100%;
  height: 300px;
  margin: 0;
  padding: 0;
  background: #fff;
  overflow: hidden;
}
figure:hover + span {
  bottom: -36px;
  opacity: 1;
}

.imghover figure img {
  -webkit-transform: scale(1);
  transform: scale(1);
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
}
.imghover figure:hover img {
  -webkit-transform: scale(1.05);
  transform: scale(1.05);
  width: 100%;
}

.story {
  padding: 0.3em 0.3em;
}
.story h1 {
  margin: 0.3em 0em;
}
</style>