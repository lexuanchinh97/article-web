<template>
  <div class="row related-post">
    <div class="col-12 section-title">
      <h2>Tin tức liên quan</h2>
    </div>


    <div class="row">
      <div class="col-6 left">
        <div class="content">
          <a class="imghover" href="">
            <figure>
              <img
                src="./assets/1.png"
                alt="hihi"
                style="width: 100%"
              />
            </figure>
          </a>
          <a href="">
            <h4>Thủ tướng Nguyễn Xuân Phúc: Không để 'tháng Giêng là tháng ăn chơi</h4>
          </a>
          <!--        <p>13 Giờ Trước</p>-->
        </div>
      </div>
      <div class="col-6 right">
        <div class="content">
          <a class="imghover" href="">
            <figure>
              <img
                src="./assets/2.png"
                alt="hihi"
                style="width: 100%"
              />
            </figure>
          </a>
          <a href="">
            <h4>Ông Trump chia tay Nhà Trắng, ông Biden tới Điện Capitol</h4>
          </a>
          <!--        <p>13 Giờ Trước</p>-->
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-6 left">
        <div class="content">
          <a class="imghover" href="">
            <figure>
              <img
                src="./assets/3.png"
                alt="hihi"
                style="width: 100%"
              />
            </figure>
          </a>
          <a href="">
            <h4>Thủ tướng Nguyễn Xuân Phúc: Không để 'tháng Giêng là tháng ăn chơi</h4>
          </a>
          <!--        <p>13 Giờ Trước</p>-->
        </div>
      </div>

      <div class="col-6 right">
        <div class="content">
          <a class="imghover" href="">
            <figure>
              <img
                src="./assets/4.png"
                alt="hihi"
                style="width: 100%"
              />
            </figure>
          </a>
          <a href="">
            <h4> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</h4>
          </a>
          <!--        <p>13 Giờ Trước</p>-->
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-6 left">
        <div class="content">
          <a class="imghover" href="">
            <figure>
              <img
                src="./assets/5.png"
                alt="hihi"
                style="width: 100%"
              />
            </figure>
          </a>
          <a href="">
            <h4>Thủ tướng Nguyễn Xuân Phúc: Không để 'tháng Giêng là tháng ăn chơi</h4>
          </a>
          <!--        <p>13 Giờ Trước</p>-->
        </div>
      </div>

      <div class="col-6 right">
        <div class="content">
          <a class="imghover" href="">
            <figure>
              <img
                src="./assets/6.png"
                alt="hihi"
                style="width: 100%"
              />
            </figure>
          </a>
          <a href="">
            <h4>Ông Trump chia tay Nhà Trắng, ông Biden tới Điện Capitol</h4>
          </a>
          <!--        <p>13 Giờ Trước</p>-->
        </div>
      </div>
    </div>






  </div>
</template>

<script>
export default {
  name: "RelatedPost"
}
</script>

<style>

.section-title {
  margin-top: 20px;
  position: relative;
  margin-bottom: 25px;
  text-align: left;
  overflow: hidden; }

.section-title h2 {
  margin-top: 0;
  margin-bottom: 20px; }

.section-title h2 {
  display: inline-block;
  font-size: 20px;
  font-weight: bold;
  position: relative;
  width: 100%;
  margin: 0;
}

.section-title h2::after {
  content: '';
  position: absolute;
  height: 2px;
  width: 100%;
  top: 50%;
  margin-left: 15px;
  background-color: #FF3D00;
}

.related-post .content {
  padding: 0 0;
}

.related-post {
  padding: 8px 8px;
}

.related-post .left .content {
  padding-right: 8px !important;
}

.related-post .right .content {
  padding-left: 8px !important;
}

.related-post a {
  color: inherit;
  text-decoration: none
}
</style>
