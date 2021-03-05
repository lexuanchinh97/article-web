<template>
  <nav class="navbar" role="navigation" id="navbar">
      <div class="nav-content" id="nav-content">
        <ul>
          <li>
            <a href="">
              <icon icon='home' class="desktop-home"></icon>
              <span class="mobile-show">Home</span>
            </a>
          </li>
          <li>
            <a href="">Thể Thao</a>
          </li>
          <li class="expand">
            <a href="#">Bóng Đá</a>
            <ul class="dropdown">
              <li><a href="#">Sub-1</a></li>
              <li><a href="#">Sub-2</a></li>
              <li><a href="#">Sub-3</a></li>
            </ul>
          </li>
          <li>
            <a href="">Du Lịch</a>
          </li>
          <li>
            <a href="">Đời Sống</a>
          </li>
          <li class="icon-menu">
            <icon icon="bars" @click="myFunction()"></icon>
          </li>
        </ul>
      </div>
    </nav>
</template>

<script >
import axios from "axios";
export default {
  // metaInfo: {
  //   //       title: 'Tiêu đề trang',
  //   //       titleTemplate: '%s | My Awesome Webapp'
  //   meta: { viewport: "width=device-width,initial-scale=1,user-scalable=no" },
  // },
  data() {
    return {
      listCategory: [],
    };
  },
  methods: {
    myFunction() {
      let x = document.getElementById("nav-content");
      if (x.className === "nav-content") {
        x.className += " responsive";
        console.log(x.className);
      } else {
        x.className = "nav-content";
        console.log(x.className);
      }
    }
  },
  computed: {},
  created() {
    axios
      .get("/categories")
      .then((response) => (this.listCategory = response.data))
      .catch((error) => console.log(error));
  },
  mounted() {

  },
};

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", myFunction);
  let navbar = document.getElementById("navbar");
  let sticky = navbar.offsetTop;

  function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  }
});
</script>

<style>
@import "./Navbar.css";
</style>
