<template>
  <div class="home-team-slide">
    <div class="home-team-slide-img">
      <img class="full" :src="img.url" :alt="img.alt" />
    </div>
    <div class="home-team-slide-name">
      {{ name }}
    </div>
    <div class="home-team-slide-role">
      {{ role }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: 'Nikola Tesla',
    },
    role: {
      type: String,
      default: 'Director de Innovación',
    },
    img: {
      type: Object,
      default: () => ({
        url: require('~/assets/imgs/tesla.jpg'),
        alt: 'Nikola Telsa Photo',
      }),
    },
  },
}
</script>

<style>
.home-team-slide {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  line-height: 1;
  padding-bottom: 1em;
}

.home-team-slide-img {
  width: 100%;
  height: 58vw;
  border-radius: 10px;
  overflow: hidden;
  line-height: 0;
  margin-bottom: 1em;
}

.home-team-slide-name {
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 0.3em;
}

.home-team-slide-role {
  font-size: 14px;
  font-weight: 500;
  color: var(--mid-grey);
}

@media (min-width: 600px) {
  .home-team-slide-img {
    height: 34vw;
  }

  .home-team-slide-role {
    font-size: 1em;
  }
}

@media (min-width: 1000px) {
  .home-team-slide-img {
    height: 22vw;
  }

  .home-team-slide-name {
    font-size: 28px;
  }
}
</style>
