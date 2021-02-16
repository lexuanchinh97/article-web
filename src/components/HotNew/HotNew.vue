<template>
  <div class="story">
    <a class="imghover" href="abcd">
      <figure>
        <img
          src="http://localhost:8888/wp-content/uploads/2018/11/ghhjgh-800x450.jpeg"
          alt="hihi"
          style="width: 100%"
        />
      </figure>
    </a>
    <a href="">
      <h2>Ông Huy chia tay Nhà Trắng, ông Biden tới Điện Capitol</h2>
    </a>
    <p>13 Giờ Trước</p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.story h2:hover {
  color: #0082e6;
}

figure {
  width: 100%;
  margin: 0;
  padding: 0;
  background: red;
  overflow: hidden;
  box-sizing: border-box;
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
  vertical-align:bottom;
}
.imghover figure:hover img {
  -webkit-transform: scale(1.02);
  transform: scale(1.02);
}

.story {
  padding: 0 4px 0 0;
}
.story h2 {
  margin: 0 0;
  padding: 8px 8px;
}

.story p {
  margin: 0 0;
  padding: 4px 8px;
  font-size: 12px;
  color: #888;
}

.story a {
  text-decoration: none;
  color: #333333;
}

@media screen and (max-width: 600px) {
  .story {
    padding: 0 0;
  }
}
</style>
