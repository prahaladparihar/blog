<template>
  <div id="ShowBlog">
    <div class="container my-3 col-lg-8">
      <h1>ALL &nbsp; ARTICLES</h1>
      <div class="col-sm-12" v-for="blog in blogs">
        <span class="display-4">{{blog.title}}</span>
        <p class="text-justify">{{blog.body}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ShowBlog",
  data: function(){
    return {
      blogs:" "
    };
  },
  methods:{
    getBlog: function() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        this.blogs = response.data.userId[1];
      });
  }
  }
};
</script>

<style scoped>
h1 {
  text-align: center;
}
</style>
