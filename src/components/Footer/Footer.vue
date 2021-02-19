<template>
  <footer>
    <div class="row">
      <div class="col-4">
        <div class="footer-left">
          <h3>About<span>Eduonix</span></h3>
          <p class="footer-company-name">Lorem Ipsum is simply dummy text of the printing</p>
          <p class="footer-company-name">© 2019 Eduonix Learning Solutions Pvt. Ltd.</p>
        </div>

      </div>
      <div class="col-4">
        <div class="footer-center">
          <ul>
            <li>
                <i class="fa fa-map-marker"></i>
                <p style="margin-left: 10px"><span>226, Lý Thường Kiệt, Phường 14, Quận 10, Hồ Chí Minh</span>
                </p>
            </li>

            <li>
                <i class="fa fa-phone"></i>
                <p style="padding: 10px 10px">+91 22-27782183</p>
            </li>

            <li>
                <i class="fa fa-envelope"></i>
                <p style="padding: 10px 10px"><a href="mailto:support@eduonix.com">support@gmail.com</a></p>
            </li>
          </ul>



        </div>
      </div>

      <div class="col-4">
        <div class="footer-right">
          <p class="footer-company-about">
            <span>About the company</span>
            We offer training and skill building courses across Technology, Design, Management, Science and Humanities.</p>
          <div class="footer-icons">
            <a href="#"><i class="fa fa-facebook"></i></a>
            <a href="#"><i class="fa fa-twitter"></i></a>
            <a href="#"><i class="fa fa-instagram"></i></a>
            <a href="#"><i class="fa fa-linkedin"></i></a>
            <a href="#"><i class="fa fa-youtube"></i></a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style>

/* The footer is fixed to the bottom of the page */

footer{
  margin: 40px 0 0 0;
  width: 100%;
  background-color: #2c292f;
  color: white;
  text-align: center;
  padding: 50px 50px;
}

.row .footer-company-name{
  color:  #8f9296;
  font-size: 14px;
  font-weight: normal;
  margin: 0;
  text-align: left;
}

footer .footer-left h3 {
  text-align: left;
  margin: 0 0;
  padding: 8px 8px;
}

footer .footer-left p {
  padding: 8px 8px;
}

footer .footer-center i {
  background-color:  #33383b;
  color: #ffffff;
  font-size: 25px;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  text-align: center;
  line-height: 42px;
  /*margin: 10px 15px;*/
  vertical-align: center;
}

footer .footer-center i.fa-envelope {
  font-size: 17px;
  line-height: 38px;
}

footer .footer-center p {
  display: block;
  color: #ffffff;
  vertical-align: center;
  margin: 0 0;
  text-align: center;
  horiz-align: center;
}

footer .footer-center p span{
  display:block;
  font-weight: normal;
  font-size:14px;
  line-height:2;
}

footer .footer-center p a {
  color:  #e0ac1c;
  text-decoration: none;;
}

footer .footer-center ul li {
  list-style-type: none;
  display: flex;
  padding: 8px 8px;
}

footer .footer-center ul {
  margin: 0 0;
  padding: 0 0;
}

footer .footer-company-about{
  line-height: 20px;
  color:  #92999f;
  font-size: 13px;
  font-weight: normal;
  margin: 0;
}

footer .footer-company-about span{
  display: block;
  color:  #ffffff;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
}

footer .footer-icons{
  margin-top: 25px;
  margin-left: 8px;
}

footer .footer-icons a {
  display: inline-block;
  width: 35px;
  height: 35px;
  cursor: pointer;
  background-color:  #33383b;
  border-radius: 2px;
  font-size: 20px;
  color: #ffffff;
  text-align: center;
  line-height: 35px;
  vertical-align: center;
  float: left;
  margin-right: 3px;
  margin-bottom: 5px;
}

footer .footer-right p {
  text-align: left;
  padding: 8px 8px;
}

@media only screen and (max-width: 600px) {
  footer .footer-center {
    margin-top: 40px;
  }

  footer .footer-right {
    margin-top: 40px;
  }
}

</style>
