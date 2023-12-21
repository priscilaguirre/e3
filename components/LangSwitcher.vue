<template>
  <section class="lang-switcher">
    <nuxt-link
      v-for="(item, i) in altLangs"
      :key="`lang-${i}`"
      :to="$prismic.linkResolver(item)"
    >
      <span>{{ getDisplayLang(item.lang) }}</span>
    </nuxt-link>
  </section>
</template>

<script>
export default {
  props: {
    altLangs: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    getDisplayLang(lang) {
      let val
      switch (lang) {
        case 'en-us':
          val = 'EN'
          break
        case 'es-mx':
          val = 'ES'
          break
        default:
          val = '/'
      }
      return val
    },
  },
}
</script>

<style>
.lang-switcher {
  width: 100%;
  left: 0;
  text-align: center;
  color: lime;
  font-weight: 900;
  z-index: 500;
}
</style>
