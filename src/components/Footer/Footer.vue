<template>
  <footer>
    <div class="row footer-content">
      <div class="col-4">
        <div class="footer-left">
          <h3>About</h3>
          <p class="footer-company-name">Lorem Ipsum is simply dummy text of the printing</p>
        </div>

      </div>
      <div class="col-4">
        <div class="footer-center">
          <h3>Thông Tin Liên Hệ</h3>
          <ul>
            <li>
              <icon :icon="['fas', 'home']" ></icon>
              <span>500 Nguyễn Văn Trỗi, Phường 1, Quận Tân Bình</span>
            </li>
            <li>
              <icon :icon="['fas', 'envelope']" ></icon>
              <span>support@gmail.com</span>
            </li>
            <li>
              <icon :icon="['fas', 'phone']" ></icon>
              <span>0935001122</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="col-4">
        <div class="footer-right">
          <h3>Follow Us</h3>
          <ul>
            <li>
              <a href="https://www.facebook.com/" target="_blank">
                <icon :icon="{prefix: 'fab', iconName: 'facebook'}" size="2x" ></icon>
              </a>
            </li>
            <li>
              <a href="">
                <icon :icon="{prefix: 'fab', iconName: 'youtube'}" size="2x" ></icon>
              </a>
            </li>
            <li>
              <a href="">
                <icon :icon="{prefix: 'fab', iconName: 'instagram'}" size="2x" ></icon>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="row footer-bottom">
      <p>© 2021 Copyright: chính nè </p>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style>

footer .footer-content {
  background: #333;
  padding: 16px 32px;
  margin: 0 0;
}

footer .footer-bottom {
  background: #393838;
}

footer .footer-bottom p {
  text-align: center;
  padding: 8px 8px;
  color: #8f9296;
  margin: 0 0;
}

footer {
  color: white;
  margin-top: 32px;
  padding: 16px 0;
}

footer .footer-center span {
  margin-left: 8px;
}

footer .footer-center ul {
  text-decoration: none;
  list-style-type: none;
  margin: 0 0;
  padding: 0 0;
}

footer .footer-right ul {
  text-decoration: none;
  list-style-type: none;
  margin: 0 0;
  padding: 0 0;
}

footer .footer-center li {
  padding: 8px 0;
}

footer .footer-right li {
  padding: 8px 0;
  display: inline;
}
footer .footer-right li {
  margin-right: 16px;
}

footer .footer-right a {
  text-decoration: none;
  color: inherit;
}

</style>
