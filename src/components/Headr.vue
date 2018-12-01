<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">
      <img src="../assets/blog.png" alt="blog" class="container">
    </a>
    <a href="#">
      <h1>
        Blog
        <span>
          <sub class="text-muted">write some awesome blog here!</sub>
        </span>
      </h1>
    </a>
  </nav>
</template>

<script>
export default {
  data() {}
};
</script>

<style scoped>
nav {
  background: #fff;
  box-shadow: -1px -13px 7px 12px;
}
h1 {
  color: rgb(17, 0, 255);
}
sub {
  font-size: 12px;
}
a {
  text-decoration: none;
}
</style>

