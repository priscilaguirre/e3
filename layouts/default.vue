<template>
  <div class="main-body">
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
export default {
  async middleware({ store, $prismic, params }) {
    await store.dispatch('fetchContent', { $prismic, params })
  },
  mounted() {
    // console.log(this.$store.state.menuFoot)
  },
}
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.8s ease;
}

.page-enter,
.page-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.8s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
