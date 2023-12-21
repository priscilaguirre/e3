<template>
  <div class="wrapper post">
    <PostTop>
      <template #title>
        <prismic-rich-text :field="post.data.title" />
      </template>
      <template #subtitle>
        <prismic-rich-text :field="post.data.subtitle" />
      </template>
      <template #img>
        <img
          class="full"
          :src="post.data.featured_image.url"
          :alt="post.data.featured_image.alt"
        />
      </template>
    </PostTop>
    <PostBody>
      <template #body>
        <prismic-rich-text :field="post.data.post_body" />
      </template>
    </PostBody>
    <PostMore :blogs="morePosts" />
  </div>
</template>

<script>
export default {
  async asyncData({ $prismic, error, params }) {
    try {
      const post = await $prismic.api.getByUID('blog_post', params.post)
      const morePostsQuery = await $prismic.api.query(
        [
          $prismic.predicates.at('document.type', 'blog_post'),
          $prismic.predicates.not('my.blog_post.uid', params.post),
          $prismic.predicates.similar(post.id, 3),
        ],
        {
          // orderings: '[my.blog_article.article_date desc]',
          pageSize: 3,
        }
      )
      return { post, morePosts: morePostsQuery.results }
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
  head() {
    return {
      title: this.post.data.meta_title || 'E3 | Blog',
      meta: [
        {
          hid: 'description',
          name: 'description',
          property: 'og:description',
          content: this.post.data.meta_description,
        },
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: this.post.data.meta_title || 'E3 | Blog',
        },
        {
          hid: 'og:site_name',
          name: 'og:site_name',
          property: 'og:site_name',
          content: 'E3',
        },
        {
          hid: 'og:image',
          name: 'og:image',
          property: 'og:image',
          itemprop: 'image',
          content: this.post.data.meta_thumbnail.url,
        },
      ],
    }
  },
  mounted() {
    console.log(this.morePosts)
  },
}
</script>
