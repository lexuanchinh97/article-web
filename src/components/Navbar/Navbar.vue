<template>
  <div class="navbar">
    <nav>
      <div class="menu">
        <input type="checkbox" id="check" />
        <label for="check" class="checkbtn">
          <i class="fas fa-bars"></i>
        </label>
        <label class="logo">Logo</label>
        <ul>
          <li v-for="category in listCategory" v-bind:key="category.id">
            <router-link :to="category.actionName">{{
              category.name
            }}</router-link>
          </li>
        </ul>
      </div>
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
@import './Navbar.css';
</style>