<template>
  <div class="navbar">
    <nav>
      <input type="checkbox" id="check" />
      <label for="check" class="checkbtn">
        <i class="fas fa-bars"></i>
      </label>
      <label class="logo">DesignX</label>
      <ul>
        <li v-for="category in listCategory" v-bind:key="category.id">
          <router-link :to="category.actionName">{{
            category.name
          }}</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script >
import axios from "axios";
export default {
  metaInfo: {
    //       title: 'Tiêu đề trang',
    //       titleTemplate: '%s | My Awesome Webapp'
    meta: { viewport: "width=device-width,initial-scale=1,user-scalable=no" },
  },
  data() {
    return {
      listCategory: [],
    };
  },
  methods: {},
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
</script>

<style>
* {
  padding: 0;
  margin: 0;
  text-decoration: none;
  list-style: none;
  box-sizing: border-box;
}
body {
  font-family: montserrat;
}
nav {
  background: #0082e6;
  height: 60px;
  width: 100%;
}
label.logo {
  color: white;
  font-size: 35px;
  line-height: 60px;
  padding: 0 100px;
  font-weight: bold;
  float: left;
}
nav ul {
  /* float: right; */
  margin-right: 20px;
}
nav ul li {
  display: inline;
  line-height: 60px;
  margin: 0 5px;
}
nav ul li a {
  color: white;
  font-size: 17px;
  padding: 7px 13px;
  border-radius: 3px;
}
a.active,
a:hover {
  background: #1b9bff;
  transition: 0.5s;
}
.checkbtn {
  font-size: 30px;
  color: white;
  float: right;
  line-height: 60px;
  margin-right: 40px;
  cursor: pointer;
  display: none;
}
#check {
  display: none;
}
@media (max-width: 952px) {
  label.logo {
    font-size: 30px;
    padding-left: 50px;
  }
  nav ul li a {
    font-size: 16px;
  }
}
@media (max-width: 600px) {
  .checkbtn {
    display: block;
  }
  ul {
    position: fixed;
    width: 100%;
    height: 100vh;
    background: #2c3e50;
    top: 80px;
    left: -100%;
    text-align: center;
    transition: all 0.5s;
  }
  nav ul li {
    display: block;
    margin: 50px 0;
    line-height: 30px;
  }
  nav ul li a {
    font-size: 20px;
  }
  a:hover,
  a.active {
    background: none;
    color: #0082e6;
  }
  #check:checked ~ ul {
    left: 0;
  }
}
section {
  /* background: url() no-repeat; */
  background-size: cover;
  height: calc(100vh - 80px);
}
</style>