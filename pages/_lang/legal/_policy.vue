<template>
  <div class="wrapper policy first-section">
    <div class="sub-wrapper">
      <div class="policy-title title-line green">
        <prismic-rich-text :field="policy.data.title" />
      </div>
      <prismic-rich-text class="policy-body" :field="policy.data.body" />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $prismic, error, params }) {
    try {
      const policy = await $prismic.api.getByUID('policy_page', params.policy)
      return { policy }
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
  head() {
    return {
      title: this.policy.data.meta_title || 'E3 | Legal',
      meta: [
        {
          hid: 'description',
          name: 'description',
          property: 'og:description',
          content: this.policy.data.meta_description,
        },
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: this.policy.data.meta_title || 'E3 | Legal',
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
          content: this.policy.data.meta_thumbnail.url,
        },
      ],
    }
  },
  mounted() {
    // console.log(this.policy)
  },
}
</script>

<style>
.policy .sub-wrapper {
  padding-top: 100px;
  padding-bottom: 100px;
  width: 100%;
  max-width: 900px;
}

.policy-body a {
  word-break: break-all;
  font-weight: 500;
  text-decoration: underline;
  color: var(--blue);
}

.policy-body a:hover {
  color: var(--green);
}

.policy-body * {
  line-height: 1.4em;
}

.policy-title {
  margin-bottom: 0.5em;
  text-transform: uppercase;
}

.policy-body {
  width: 100%;
  align-self: center;
}

.policy h3 {
  color: var(--blue);
  font-weight: 600;
  text-align: center;
  font-size: 2em;
  margin-bottom: 1.2em;
  margin-top: 2em;
}

.policy h6 {
  color: var(--green);
  font-size: 1.2em;
  font-weight: 600;
  margin-top: 2em;
  margin-bottom: 0.5em;
}

.policy-body p,
.policy-body ul,
.policy-body ol {
  margin-bottom: 1em;
}

.policy-body ul,
.policy-body ol {
  font-weight: 500;
  color: var(--navy-65);
  font-size: 0.9em;
}

.policy-body ul li,
.policy-body ol li {
  margin-bottom: 1em;
}
</style>
