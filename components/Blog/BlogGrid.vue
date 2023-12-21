<template>
  <div class="blog-grid">
    <BlogGridPost
      v-for="(post, p) in blogs"
      :key="`blog-post-${p}`"
      :img="post.data.featured_image"
      :title="$prismic.asText(post.data.title)"
      :subtitle="post.data.subtitle"
      :url="post.url"
    />
  </div>
</template>

<script>
export default {
  props: {
    blogs: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style>
.blog-grid {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: stretch;
}
</style>
