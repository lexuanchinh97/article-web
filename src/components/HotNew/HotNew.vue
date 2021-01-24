<template>
  <div class="new">
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
    <div class="row">
      <div class="col-4 content">
        <a href="">
          <img
            src="https://image.thanhnien.vn/660x370/uploaded/minhgiao/2021_01_19/hoang-sa-afp_exxp.jpg"
            alt="hihi"
            style="width: 100%"
          />
        </a>
        <h4>Ông Trump chia tay Nhà Trắng, ông Biden tới Điện Capitol</h4>
        <p>13 Giờ Trước</p>
      </div>
      <div class="col-4 content">
        <a href="">
          <img
            src="https://image.thanhnien.vn/660x370/uploaded/minhgiao/2021_01_19/hoang-sa-afp_exxp.jpg"
            alt="hihi"
            style="width: 100%"
          />
        </a>
        <h4>Ông Trump chia tay Nhà Trắng, ông Biden tới Điện Capitol</h4>
        <p>13 Giờ Trước</p>
      </div>
      <div class="col-4 content" >
        <a href="">
          <img
            src="https://image.thanhnien.vn/660x370/uploaded/minhgiao/2021_01_19/hoang-sa-afp_exxp.jpg"
            alt="hihi"
            style="width: 100%"
          />
        </a>
        <h4>Ông Trump chia tay Nhà Trắng, ông Biden tới Điện Capitol</h4>
        <p>13 Giờ Trước</p>
      </div>
    </div>

    <div class="row">
      <div class="col-3">
        <a href="" >
          <img
            src="https://image.thanhnien.vn/660x370/uploaded/minhgiao/2021_01_19/hoang-sa-afp_exxp.jpg"
            alt="hihi"
            style="width: 100%;"
          />
        </a>
      </div>
      <div class="col-9">
        <h4 style="padding: 1em 1em;">
            Ông Trump chia tay Nhà Trắng, ông Biden tới Điện Capitol
        </h4>
         <p style="padding: 1em 1em;">13 Giờ Trước</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
};
</script>
    
<style>

/* .imghover img {
    
    	-webkit-transition: all 0.7s ease;
	 -moz-transition: all 0.7s ease;
	  -ms-transition: all 0.7s ease;
   	   -o-transition: all 0.7s ease;
          transition: all 0.7s ease;
}

.imghover {
    position: relative;
    overflow: hidden;
   
}

.imghover:hover img  {

   -webkit-transform: scale(1.05);
    	-ms-transform: scale(1.05);
    		transform: scale(1.05);
} */

/* .imghover img {
  transition: all 0.7s ease; }

. {
  position: relative;
  overflow: hidden; }

.imghover:hover img {
  transform: scale(1.05); }
   */
.story h1:hover {
  color: #0082e6;
}

figure {
  width: 100%;
  /* height: 200px; */
  margin: 0;
  padding: 0;
  background: #fff;
  overflow: hidden;
}
figure:hover+span {
  bottom: -36px;
  opacity: 1;
}


/* Zoom In #1 */
.imghover figure img {
  -webkit-transform: scale(1);
  transform: scale(1);
  -webkit-transition: .3s ease-in-out;
  transition: .3s ease-in-out;
}
.imghover figure:hover img {
  -webkit-transform: scale(1.05);
  transform: scale(1.05);
}

.content {
  padding: 0.3em 0.3em;
}
.story {
    padding: 0.3em 0.3em;
}
.story h1 {
  margin: 0.3em 0em;
}
row::after {
  content: "";
  clear: both;
  display: table;
}

[class*="col-"] {
  float: left;
  /* padding: 5px 0px; */
}
[class*="col-"] {
  width: 100%;
}

@media only screen and (min-width: 600px) {
  /* For tablets: */
  .col-s-1 {
    width: 8.33%;
  }

  .col-s-2 {
    width: 16.66%;
  }

  .col-s-3 {
    width: 25%;
  }

  .col-s-4 {
    width: 33.33%;
  }

  .col-s-5 {
    width: 41.66%;
  }

  .col-s-6 {
    width: 50%;
  }

  .col-s-7 {
    width: 58.33%;
  }

  .col-s-8 {
    width: 66.66%;
  }

  .col-s-9 {
    width: 75%;
  }

  .col-s-10 {
    width: 83.33%;
  }

  .col-s-11 {
    width: 91.66%;
  }

  .col-s-12 {
    width: 100%;
  }
}

@media only screen and (min-width: 768px) {
  /* For desktop: */
  /* [class*="col-"] {
    padding: 10px 10px !important;
  } */
  .col-1 {
    width: 8.33%;
  }

  .col-2 {
    width: 16.66%;
  }

  .col-3 {
    width: 25%;
  }

  .col-4 {
    width: 33.33%;
  }

  .col-5 {
    width: 41.66%;
  }

  .col-6 {
    width: 50%;
  }

  .col-7 {
    width: 58.33%;
  }

  .col-8 {
    width: 66.66%;
  }

  .col-9 {
    width: 75%;
  }

  .col-10 {
    width: 83.33%;
  }

  .col-11 {
    width: 91.66%;
  }

  .col-12 {
    width: 100%;
  }
  .row {
    margin: 0 auto;
  }
}
</style>