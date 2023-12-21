<template>
  <section
    id="inicio"
    class="home-top first-section"
    :style="{ 'background-image': `url('${bg}')` }"
  >
    <div class="dark-overlay" />
    <div class="sub-wrapper">
      <div class="home-top-headline">
        <slot name="title">
          <h1>
            Nos respaldan más de 25 años de experiencia a nivel profesional
          </h1>
        </slot>
      </div>
      <div class="home-top-caption">
        <slot name="desc">
          <p>
            colaborando con distintas empresas transnacionales en los sectores:
            <b>Eléctrico, Energía y Automatización Industrial.</b>
          </p>
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
.home-top {
  color: var(--white);
  background-color: var(--navy);
  /* background-image: url('~assets/imgs/sparks.jpg'); */
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  position: relative;
  display: flex;
  flex-direction: column;
}

.home-top .dark-overlay {
  z-index: 1;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.home-top .sub-wrapper {
  z-index: 2;
  padding-top: 120px;
  padding-bottom: 200px;
}

.home-top-headline {
  font-weight: 700;
  font-size: 35px;
  line-height: 1.2;
  margin-bottom: 0.3em;
}

.home-top-caption,
.home-top-caption p {
  line-height: 1.2;
}

.home-top-caption b,
.home-top-caption strong {
  font-weight: 600;
}

@media (min-width: 1000px) {
  .home-top .sub-wrapper {
    z-index: 2;
    padding-top: 160px;
    padding-bottom: 250px;
  }

  .home-top-headline {
    width: 62%;
    min-width: 820px;
    font-size: 68px;
    margin-bottom: 0.3em;
  }

  .home-top-caption {
    width: 62%;
    min-width: 820px;
    font-size: 24px;
    line-height: 1.2;
  }
}
</style>
