<template>
  <div>
    <div class="container my-3 col-lg-8">
      <h3 class="text-info">ADD A NEW BLOG</h3>
      <form>
        <label>Author Name:</label>
        <input
          type="text"
          v-model.lazy="blog.Aname"
          class="form-control"
          placeholder="Enter Author Name..."
          required
        >
        <br>
        <label>Title:</label>
        <input
          type="text"
          v-model.lazy="blog.title"
          class="form-control"
          placeholder="Enter Title for Blog..."
          required
        >
        <br>
        <label>Content:</label>
        <textarea
          rows="10"
          v-model="blog.content"
          class="form-control"
          placeholder="Write content for your blog..."
        ></textarea>
        <br>
        <div>
          <label>Category:</label>
          <br>
          <label class="checkbox-inline pl-4">
            <input type="checkbox" value="Social" v-model="blog.categories"> Social
          </label>
          <label class="checkbox-inline pl-3">
            <input type="checkbox" value="News" v-model="blog.categories"> News
          </label>
          <label class="checkbox-inline pl-3">
            <input type="checkbox" value="Entertainment" v-model="blog.categories"> Entertainment
          </label>
          <label class="checkbox-inline pl-3 custom-checkbox">
            <input type="checkbox" value="Educational" v-model="blog.categories"> Educational
          </label>
        </div>
        <button
          type="submit"
          v-on:click.prevent="post"
          class="btn btn-outline-success pull-right"
        >Add Blog</button>
      </form>
    </div>
    <hr class="my-5">
    <!--Preview -->
    <div class="container my-3 col-lg-8">
      <h3 class="text-danger">BLOG PREVIEW</h3>
      <p class="text-primary">Author:</p>
      <p class="text-justify pl-4">{{blog.Aname}}</p>
      <p class="text-primary">Title:</p>
      <p class="text-justify pl-4">{{blog.title}}</p>
      <p class="text-primary">Content:</p>
      <p class="text-justify pl-4">{{blog.content}}</p>
      <p class="text-primary">Category:</p>
      <ul>
        <p v-for="category in blog.categories">
          <i class="fa fa-hand-o-right" aria-hidden="true"></i>
          {{category}}
        </p>
      </ul>
    </div>
  </div>
</template> 

<script>
export default {
  data() {
    return {
      blog: {
        Aname: "",
        title: "",
        content: "",
        categories: []
      }
    };
  },
  methods: {
    post: function() {
      this.axios
        .post("https://jsonplaceholder.typicode.com/posts", {
          title: this.blog.title,
          body: this.blog.content,
          userId: 1
        })
        .then(function(data) {
          console.log(data);
        });
    }
  }
};
</script>

<style scoped>
h3 {
  text-align: center;
}
i {
  color: #7fff00;
}
.bdy {
  font-family: Arial;
  color: white;
}
</style>
