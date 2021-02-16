<template>
  <nav class="navbar" role="navigation" id="navbar">
      <div class="nav-content" id="nav-content">
        <ul>
          <li>
            <a href="">
              <span class="fa fa-home desktop-home"></span>
              <span class="mobile-show">Home</span>
            </a>
          </li>
          <li>
            <a href="">News</a>
          </li>
          <li class="expand">
            <a href="#">Two</a>
            <ul class="dropdown">
              <li><a href="#">Sub-1</a></li>
              <li><a href="#">Sub-2</a></li>
              <li><a href="#">Sub-3</a></li>
            </ul>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
          <li class="icon-menu">
            <i class="fa fa-bars" @click="myFunction()"></i>
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
      var x = document.getElementById("nav-content");
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
    let recaptchaScript = document.createElement("script");
    recaptchaScript.setAttribute(
      "src",
      "https://kit.fontawesome.com/a076d05399.js"
    );
    document.head.appendChild(recaptchaScript);
  },
};
// window.onscroll = function() {scrollFunction()};
// function scrollFunction() {

//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//       console.log("menu");
//     document.getElementById("myTopnav").style.top = "0";
//   } else {
//       console.log("menu");
//     document.getElementById("myTopnav").style.top = "-50px";
//   }
// }

// window.onscroll = function() {myFunction()};

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", myFunction);
  var navbar = document.getElementById("navbar");
  var sticky = navbar.offsetTop;

  function myFunction() {
    console.log("chinh");
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
