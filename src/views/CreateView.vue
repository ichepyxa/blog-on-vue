<template>
  <article class="post">
    <h1>Create post</h1>
    <form action="#">
      <label for="form-title">Post title</label>
      <input id="form-title" type="text" placeholder="Post title"><br>
      <label for="form-description">Post description</label>
      <textarea id="form-description" placeholder="Post description"></textarea><br>
      <label for="form-content">Post content</label>
      <textarea id="form-content" placeholder="Post content"></textarea><br>
      <label for="form-image">Post image</label>
      <input id="form-image" type="file"><br><br>
      <input type="submit" value="Create">
    </form>
  </article>
</template>

<script>
export default {

}
</script>