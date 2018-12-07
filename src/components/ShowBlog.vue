<template>
  <div>
    <div class="container my-3 col-lg-8">
      <h1>ALL &nbsp; ARTICLES</h1>
      <div v-for="blog in blogs" class="col-sm-12">
        <span class="dispaly-4">{{blog.title}}</span>
        <p class="text-justify"></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShowBlog",
  data() {
    return {
      blogs: []
    };
  },
  created() {
    this.axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(function(data) {
        this.blogs = data.body.slice(0, 10);
      });
  }
};
</script>

<style scoped>
h1 {
  text-align: center;
}
</style>
