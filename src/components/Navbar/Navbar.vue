<template>
  <nav>
    <div class="menu" id="menu">
      <div class="topnav" id="myTopnav">
        <a style="padding: 8px 14px !important" href=""
          ><span class="fa fa-home desktop-home"></span
          ><span class="mobile-show">Home</span>
        </a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <div class="dropdown">
          <button class="dropbtn">
            Dropdown
            <!-- <i class="fa fa-caret-down"></i> -->
          </button>
          <div class="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
        <a href="#about">About</a>
        <a
          href="javascript:void(0);"
          style="padding: 4px 14px !important; font-size: 23px"
          class="icon"
          @click="myFunction()"
          >&#9776;</a
        >
      </div>
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
      var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
        x.className += " responsive";
        console.log(x.className);
      } else {
        x.className = "topnav";
        console.log(x.className);
      }
    },
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
window.onscroll = function() {scrollFunction()};
function scrollFunction() {

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      console.log("menu");
    document.getElementById("myTopnav").style.top = "0";
  } else {
      console.log("menu");
    document.getElementById("myTopnav").style.top = "-50px";
  }
}
</script>

<style>
@import "./Navbar.css";
</style>