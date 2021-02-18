<template>
  <footer>
    <div class="row">
      <div class="col-4">
        <div class="footer-left">
          <h3>About<span>Eduonix</span></h3>
          <p class="footer-company-name">© 2019 Eduonix Learning Solutions Pvt. Ltd.</p>
        </div>

      </div>
      <div class="col-4">
        <div class="footer-center">
          <ul>
            <li>
                <i class="fa fa-map-marker"></i>
                <p style="margin-left: 10px"><span>309 - Rupa Solitaire,
             Bldg. No. A - 1, Sector - 1</span>
                  Mahape, Navi Mumbai - 400710</p>
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
        <p>test</p>
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
  padding: 40px 40px;
}

.row .footer-company-name{
  color:  #8f9296;
  font-size: 14px;
  font-weight: normal;
  margin: 0;
  text-align: left;
}

footer .row h3 {
  text-align: left;
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

footer .footer-center i.fa-envelope{
  font-size: 17px;
  line-height: 38px;
}

footer .footer-center {
  margin-top: 20px;
}

footer .footer-left {
  padding: 8px 8px;
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

</style>
