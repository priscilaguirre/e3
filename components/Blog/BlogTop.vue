<template>
  <section
    id="blog-top"
    class="first-section"
    :style="{ 'background-image': `url('${bg}')` }"
  >
    <div class="dark-overlay" />
    <div class="sub-wrapper">
      <div class="blog-top-title">
        <slot name="title">
          <h1>Conoce lo ultimo de E3</h1>
        </slot>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    bg: {
      type: String,
      default: require('~/assets/imgs/sparks.jpg'),
    },
  },
}
</script>

<style>
#blog-top {
  color: var(--white);
  background-color: var(--navy);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  position: relative;
  display: flex;
  flex-direction: column;
}

#blog-top .dark-overlay {
  z-index: 1;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

#blog-top .sub-wrapper {
  padding-top: 65px;
  padding-bottom: 50px;
  position: relative;
  z-index: 2;
}

.blog-top-title {
  width: 100%;
  font-size: 32px;
  font-weight: 700;
  line-height: 1.1;
}

@media (min-width: 1000px) {
  .blog-top-title {
    font-size: 60px;
  }
}
</style>
