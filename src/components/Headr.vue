<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">
      <img src="../assets/blog.png" alt="blog" class="container">
    </a>
    <a href="#">
      <h1 style="font-family: 'Lobster', cursive;">
        Blog
        <span>
          <sub class="text-muted">write an awesome blog here!</sub>
        </span>
      </h1>
    </a>
  </nav>
</template>

<script>
export default {
  name: "Headr"
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Lobster");
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

