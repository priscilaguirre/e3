<template>
  <section id="post-more">
    <div class="sub-wrapper">
      <div class="post-more-title title-line green">
        <h3>MÁS ARTÍCULOS</h3>
      </div>
      <BlogGrid :blogs="blogs" />
    </div>
  </section>
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
#post-more {
  padding-top: 50px;
  padding-bottom: 50px;
}
</style>
