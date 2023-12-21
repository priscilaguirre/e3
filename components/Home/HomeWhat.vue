<template>
  <section id="que" class="home-what">
    <div class="sub-wrapper">
      <div class="areas-main">
        <div class="areas-start">
          <div class="areas-title title-line">
            <slot name="title">
              <h3>¿QUÉ OFRECEMOS?</h3>
            </slot>
          </div>
          <div class="areas-start-body" v-if="activeIndex === -1">
            <slot name="body">
              <p>
                Soluciones en distribución y conversión de energía, control y
                automatización optimizando la productividad y eficiencia
                energética asegurando a nuestros clientes una relación
                costo/beneficio con un alto valor agregado.
              </p>
            </slot>
          </div>
        </div>
        <div class="areas-controls">
          <button
            class="areas-control-btn"
            :class="{ active: activeIndex === 0 }"
            @click="toggleSection(0)"
          >
            {{ titleOne }}
          </button>
          <button
            class="areas-control-btn"
            :class="{ active: activeIndex === 1 }"
            @click="toggleSection(1)"
          >
            {{ titleTwo }}
          </button>
        </div>
      </div>
    </div>
    <div v-if="activeIndex === 0" class="areas-swiper one">
      <swiper ref="oneSwiper" :options="swiperOptions">
        <swiper-slide v-for="(item, i) in groupOne" :key="`areas-sub-${i}`">
          <HomeWhatSlide
            :title="item.title"
            :body="item.description"
            :img="item.item_image"
          />
        </swiper-slide>
        <div slot="button-next" class="swiper-button-next">
          <div class="icon">
            <SVGCircleArrowRight />
          </div>
        </div>
        <div slot="button-prev" class="swiper-button-prev">
          <div class="icon">
            <SVGCircleArrowRight />
          </div>
        </div>
      </swiper>
    </div>
    <div v-if="activeIndex === 1" class="areas-swiper two">
      <swiper ref="twoSwiper" :options="swiperOptions">
        <swiper-slide v-for="(item, i) in groupTwo" :key="`areas-sub-${i}`">
          <HomeWhatSlide
            :title="item.item_title"
            :body="item.description"
            :img="item.item_image"
          />
        </swiper-slide>
        <div slot="button-next" class="swiper-button-next">
          <div class="icon">
            <SVGCircleArrowRight />
          </div>
        </div>
        <div slot="button-prev" class="swiper-button-prev">
          <div class="icon">
            <SVGCircleArrowRight />
          </div>
        </div>
      </swiper>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    titleOne: {
      type: String,
      default: 'Title One',
    },
    titleTwo: {
      type: String,
      default: 'Title Two',
    },
    groupOne: {
      type: Array,
      default: () => [],
    },
    groupTwo: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      activeIndex: 0,
      swiperOptions: {
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1000: {
            slidesPerView: 1.8,
            spaceBetween: 30,
          },
        },
      },
    }
  },
  mounted() {
    this.activeGroup = this.groupOne
  },
  methods: {
    toggleSection(index) {
      if (this.activeIndex === index) {
        this.activeIndex = -1
      } else {
        this.activeIndex = index
      }
    },
  },
}
</script>
>

<style>
.home-what {
  background-color: var(--blue);
  background-image: url('~/assets/imgs/blue-waves.png');
  background-size: cover;
  background-position: bottom center;
  background-repeat: no-repeat;
  color: var(--white);
  padding-top: 90px;
  padding-bottom: 120px;
  transition: all 0.3s ease-in-out;
}

.areas-start {
  margin-bottom: 40px;
}

.areas-start-body {
  line-height: 1.3;
  font-weight: 400;
}

.areas-controls {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2em;
}

.areas-control-btn {
  background-color: var(--navy);
  margin: 0.25em;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 0.05em;
  padding: 0.3em 0.8em;
  flex-grow: 1;
  border-radius: 10px;
}

.areas-control-btn:hover {
  background-color: var(--green);
}

.areas-control-btn.active {
  background-color: var(--white);
  color: var(--navy);
}

.areas-swiper {
  width: 100%;
}

.areas-swiper .swiper-wrapper {
  display: flex;
  align-items: stretch;
}

.areas-swiper .swiper-slide {
  height: auto;
  padding: 0 25px;
}

.swiper-button-next:after,
.swiper-button-prev:after {
  content: '';
  display: none;
}

.areas-swiper .swiper-button-next,
.areas-swiper .swiper-button-prev {
  width: 2em;
  height: 2em;
  fill: var(--white);
}

.areas-swiper .swiper-button-prev {
  left: 10px;
  transform: rotate(-180deg);
}

@media (min-width: 600px) {
  .areas-swiper .swiper-slide {
    padding: 0 40px;
  }

  .areas-swiper .swiper-button-prev {
    left: 20px;
  }

  .areas-swiper .swiper-button-next {
    right: 20px;
  }
}

@media (min-width: 1000px) {
  .home-what {
    padding-top: 200px;
    padding-bottom: 150px;
  }

  .areas-main {
    width: 50%;
  }

  .areas-start {
    margin-bottom: 50px;
  }

  .areas-start-body {
    font-size: 24px;
  }

  .areas-control-btn {
    font-weight: 700;
    font-size: 20px;
    padding: 0.3em 0.8em;
  }

  .areas-swiper .swiper-slide {
    padding: 0;
  }

  .areas-swiper .swiper-container {
    padding: 0 50px;
  }

  .areas-swiper .swiper-button-prev {
    left: 30px;
  }

  .areas-swiper .swiper-button-next {
    right: 30px;
  }
}
</style>
