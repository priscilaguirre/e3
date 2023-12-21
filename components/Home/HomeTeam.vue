<template>
  <section id="equipo" class="home-team">
    <div class="sub-wrapper">
      <div class="home-team-title title-line green">
        <slot name="title">
          <h3>CONOCE AL EQUIPO</h3>
        </slot>
      </div>
    </div>
    <div class="team-swiper">
      <swiper ref="teamSwiper" :options="swiperOptions">
        <swiper-slide v-for="(member, m) in team" :key="`team-member-${m}`">
          <HomeTeamSlide
            :name="member.name"
            :role="member.role"
            :img="member.photo"
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
    team: {
      type: Array,
      default() {
        return [
          {
            name: 'Nikola Tesla',
            photo: {
              url: require('~/assets/imgs/tesla.jpg'),
            },
            role: 'Director de Innovación',
          },
          {
            name: 'Luz Guajardo',
            photo: {
              url: require('~/assets/imgs/people-3.jpg'),
            },
            role: 'Directora General',
          },
          {
            name: 'José Aguilar',
            photo: {
              url: require('~/assets/imgs/people-1.jpg'),
            },
            role: 'Director de Operaciones',
          },
        ]
      },
    },
  },
  data() {
    return {
      swiperOptions: {
        // centeredSlides: true,
        slidesPerView: 1,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          300: {
            slidesPerView: 1.6,
            spaceBetween: 10,
          },
          600: {
            slidesPerView: 2.6,
            spaceBetween: 15,
          },
          1000: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
        },
      },
    }
  },
}
</script>

<style>
.home-team {
  padding-top: 90px;
  padding-bottom: 90px;
}

.team-swiper {
  width: 100%;
}

.team-swiper .swiper-container {
  padding: 0 25px;
}

.swiper-button-next:after,
.swiper-button-prev:after {
  content: '';
  display: none;
}

.team-swiper .swiper-button-next,
.team-swiper .swiper-button-prev {
  width: 2em;
  height: 2em;
  fill: var(--blue);
}

.team-swiper .swiper-button-prev {
  left: 10px;
  transform: rotate(-180deg);
}

/* .team-swiper .swiper-slide {
  border: 1px solid lime;
} */

@media (min-width: 600px) {
  .team-swiper .swiper-container {
    padding: 0 40px;
  }
}

@media (min-width: 1000px) {
  .home-team {
    padding-top: 120px;
    padding-bottom: 100px;
  }

  .team-swiper .swiper-container {
    padding: 0 50px;
  }
}
</style>
