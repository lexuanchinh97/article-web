<template>
  <div class="navbar">
    <ul>
      <li  v-for="category in listCategory" v-bind:key="category.id">
        <router-link :to="category.actionName">{{category.name}}</router-link> |
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
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
};
</script>

<style>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
  position: fixed;
  top: 0;
  width: 100%;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover:not(.active) {
  background-color: #111;
}

.active {
  background-color: #4CAF50;
}
</style>