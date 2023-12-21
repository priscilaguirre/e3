<template>
  <div class="area-slide">
    <div class="area-slide-info">
      <div class="area-slide-title title-line navy">
        <span class="all-caps">{{ title }}</span>
      </div>
      <div class="area-slide-body">
        <prismic-rich-text :field="body" />
      </div>
    </div>
    <div class="area-slide-img">
      <img class="full" :src="img.url" :alt="img.alt" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Title',
    },
    body: {
      type: Array,
      default: () => [],
    },
    img: {
      type: Object,
      default() {
        return {}
      },
    },
  },
}
</script>

<style>
.area-slide {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.area-slide-info {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid var(--white-40);
  border-radius: 20px;
  padding: 1.5em;
  background-color: var(--white-20);
  backdrop-filter: blur(12px);
  will-change: filter;
  transform: translate3D(0, 0, 0);
}

.area-slide-title {
  margin-bottom: 30px;
}

.area-slide-body {
  width: 100%;
  font-weight: 500;
}

.area-slide-body ul {
  padding: 0;
  list-style-type: none;
}

.area-slide-body li {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 0.2em;
}

.area-slide-body li::before {
  content: url('~assets/svg/circle-check.svg');
  width: 1em;
  height: 1em;
  padding-top: 0.1em;
  margin-right: 0.5em;
  display: inline-block;
  flex-shrink: 0;
}

.area-slide-img {
  display: none;
}

@media (min-width: 1000px) {
  .area-slide {
    flex-direction: row;
    align-items: stretch;
  }

  .area-slide-info {
    width: 70%;
    flex-shrink: 0;
    border: 1px solid var(--teal);
    padding-right: 60px;
    background-color: var(--navy-40);
  }

  .area-slide-img {
    display: flex;
    align-items: center;
    position: relative;
    width: 30%;
    height: auto;
    z-index: 2;
    margin-left: -50px;
    flex-grow: 1;
  }

  .area-slide-img .full {
    position: absolute;
    height: 90%;
    border-radius: 20px;
    box-shadow: 0 0 20px var(--navy-25);
  }
}
</style>
