<template>
  <NuxtLink :to="url" class="blog-grid-post">
    <div class="grid-post-img">
      <img class="full" :src="img.url" :alt="img.alt" />
    </div>
    <div class="grid-post-info">
      <div class="grid-post-info-top">
        <div class="grid-post-title">
          <h6>{{ title }}</h6>
        </div>
        <div class="grid-post-subtitle">
          <prismic-rich-text v-if="subtitle" :field="subtitle" />
        </div>
      </div>
      <div class="grid-post-cta">LEER</div>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    img: {
      type: Object,
      default: () => ({
        url: require('~/assets/imgs/tesla.jpg'),
        alt: 'Nikola Tesla Photo',
      }),
    },
    title: {
      type: String,
      default: 'Blog Post Title',
    },
    subtitle: {
      type: Array,
      default: () => [],
    },
    url: {
      type: String,
      default: '/blog/post',
    },
  },
}
</script>

<style>
.blog-grid-post {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 30px;
}

.grid-post-img {
  width: 100%;
  flex-shrink: 0;
  height: 65vw;
  border-radius: 15px;
  overflow: hidden;
  line-height: 0;
  margin-bottom: 1em;
}

.grid-post-info {
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-grow: 1;
  align-items: flex-start;
  justify-content: space-between;
}

.grid-post-info-top {
  width: 100%;
}

.grid-post-title {
  font-size: 18px;
  font-weight: 600;
  line-height: 1.1;
  margin-bottom: 0.3em;
}

.grid-post-subtitle {
  font-size: 14px;
  font-weight: 500;
  color: var(--mid-grey);
  margin-bottom: 1em;
  line-height: 1.2;
}

.grid-post-cta {
  border: 2px solid var(--green);
  padding: 0.5em 3em;
  border-radius: 10px;
  font-size: 14px;
  color: var(--green);
  font-weight: 800;
  letter-spacing: 0.05em;
  line-height: 1;
  transition: all 0.5s ease;
}

.blog-grid-post:hover .grid-post-cta {
  background-color: var(--green);
  color: var(--white);
}

.grid-post-img .full {
  transition: transform 0.8s ease;
}

.blog-grid-post:hover .grid-post-img .full {
  transform: scale(1.05);
}

@media (min-width: 600px) {
  .blog-grid-post:nth-child(3n + 1) {
    width: 100%;
  }

  .blog-grid-post:nth-child(3n + 1) .grid-post-img {
    height: 35vw;
  }

  .blog-grid-post {
    width: 50%;
    padding: 0 7.5px;
  }

  .grid-post-img {
    height: 30vw;
  }

  .grid-post-title {
    font-size: 20px;
  }

  .grid-post-subtitle {
    font-size: 1em;
  }
}

@media (min-width: 1000px) {
  .blog-grid-post,
  .blog-grid-post:nth-child(n) {
    width: calc(100% / 3);
    padding: 0 7.5px;
    margin-bottom: 40px;
  }

  .grid-post-img,
  .blog-grid-post:nth-child(n) .grid-post-img {
    height: 22vw;
  }

  .grid-post-title {
    font-size: 30px;
  }

  .blog-feed .blog-grid-post:nth-child(1) {
    width: 100%;
    flex-direction: row;
  }

  .blog-feed .blog-grid-post:nth-child(1) .grid-post-img {
    width: calc((100% / 3 * 2) - 7.5px);
    flex-shrink: 0;
    order: 2;
    height: 36vw;
    margin-bottom: 0;
  }

  .blog-feed .blog-grid-post:nth-child(1) .grid-post-info {
    width: calc(100% / 3);
    order: 1;
    padding-right: 60px;
  }

  .blog-feed .blog-grid-post:nth-child(1) .grid-post-title {
    font-size: 45px;
  }

  .blog-feed .blog-grid-post:nth-child(1) .grid-post-title::before {
    content: 'NOTICIAS';
    display: block;
    font-size: 18px;
    font-weight: 800;
    letter-spacing: 0.05em;
    color: var(--mid-grey);
    padding: 1em 0 0.5em;
  }
  .grid-post-subtitle {
    font-size: 1em;
  }

  .blog-feed .blog-grid-post:nth-child(1) .grid-post-subtitle {
    font-size: 1.2em;
  }

  .blog-feed .blog-grid-post:nth-child(1) .grid-post-cta {
    font-size: 1em;
  }
}
</style>
