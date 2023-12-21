<template>
  <div class="wrapper blog">
    <BlogTop :bg="feed.data.bg_image.url">
      <template #title>
        <prismic-rich-text :field="feed.data.title" />
      </template>
    </BlogTop>
    <section class="blog-feed">
      <div class="sub-wrapper">
        <BlogGrid :blogs="posts" />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ $prismic, error, params }) {
    try {
      const feed = await $prismic.api.getSingle('blog_feed', {
        lang: params.lang,
      })
      const postsQuery = await $prismic.api.query(
        [$prismic.predicates.at('document.type', 'blog_post')],
        {
          lang: params.lang,
          // orderings: '[my.blog_article.article_date desc]',
          // pageSize: 3,
        }
      )
      return { feed, posts: postsQuery.results }
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
  head() {
    return {
      title: this.feed.data.meta_title || 'E3 | Blog',
      meta: [
        {
          hid: 'description',
          name: 'description',
          property: 'og:description',
          content: this.feed.data.meta_description,
        },
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: this.feed.data.meta_title || 'E3 | Blog',
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
          content: this.feed.data.meta_thumbnail.url,
        },
      ],
    }
  },
  mounted() {
    // console.log(this.posts)
  },
}
</script>

<style>
.wrapper.blog {
  min-height: 100vh;
}

.blog-feed {
  padding-top: 30px;
}

.blog-feed .sub-wrapper {
}

@media (min-width: 1000px) {
  .blog-feed {
    padding-top: 40px;
  }
}
</style>
