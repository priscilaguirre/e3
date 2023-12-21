<template>
  <section class="home-links" :class="{ invert: invert }">
    <div class="sub-wrapper">
      <div class="home-links-info">
        <div class="home-links-title title-line green">
          <slot name="title">
            <h3>PRODUCTOS</h3>
          </slot>
        </div>
        <ul class="home-links-list">
          <li v-for="(item, i) in links" :key="`link-${i}`">
            <a
              :href="item.link.url"
              :target="item.link.target"
              @mouseenter="setIndex(i)"
            >
              <span class="label">{{ item.label }}</span>
              <span class="icon">
                <SVGCircleArrowRight />
              </span>
            </a>
          </li>
        </ul>
      </div>
      <div class="home-links-img">
        <img
          class="full"
          :src="links[activeIndex].image.url"
          :alt="links[activeIndex].image.alt"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    invert: {
      type: Boolean,
      default: false,
    },
    links: {
      type: Array,
      default() {
        return [
          {
            link: {
              url: 'https://google.com/',
              target: '_blank',
            },
            label: 'Rasho Láser',
          },
          {
            link: {
              url: 'https://google.com/',
              target: '_blank',
            },
            label: 'Generador TurboAstro™ 3000',
          },
        ]
      },
    },
  },
  data() {
    return {
      activeIndex: 0,
      hovering: false,
    }
  },
  methods: {
    setIndex(i) {
      this.activeIndex = i
    },
    toggleHover() {
      this.hovering = !this.hovering
    },
  },
}
</script>

<style>
.home-links .sub-wrapper {
  padding: 90px 0 40px;
}

.home-links-info {
  position: relative;
  z-index: 5;
  padding: 0 25px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 80px;
}

.home-links-title {
  width: 100%;
}

.home-links-list {
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.home-links-list li {
  width: 100%;
  padding: 0.8em 0;
  font-weight: 500;
  position: relative;
  border-bottom: 1px solid var(--mid-grey);
  line-height: 1.15;
}

.home-links-list li:last-child {
  border-bottom: 0;
}

.home-links-list a:hover {
  fill: var(--green);
  color: var(--blue);
}
.home-links-list a {
  fill: var(--navy);
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
}

.home-links-list a .icon {
  width: 1.1em;
  height: 1.1em;
  margin-left: 0.5em;
  flex-shrink: 0;
}

.home-links-img {
  width: 100%;
  height: 70vw;
  position: relative;
  z-index: 1;
}

.home-links-img .full {
  position: absolute;
}

.home-links-img .bot {
  z-index: 1;
}

.home-links-img .top {
  z-index: 2;
  opacity: 0;
  transition: all 0.5s ease;
}

.active .full.top {
  opacity: 1;
}

@media (min-width: 600px) {
  .home-links-info {
    padding: 40px;
  }

  .home-links-img {
    height: 55vw;
  }
}

@media (min-width: 1000px) {
  .invert .home-links-info {
    order: 2;
    text-align: right;
  }

  .invert .home-links-title:after {
    right: 0;
    left: initial;
  }

  .invert .home-links-img {
    order: 1;
    margin-left: 0;
    margin-right: -15%;
    border-radius: 0 20px 20px 0;
  }

  .invert.home-links .sub-wrapper {
    padding: 120px 50px 120px 0px;
  }

  .home-links .sub-wrapper {
    padding: 120px 0px 120px 50px;
    flex-direction: row;
    align-items: stretch;
  }

  .home-links-info {
    z-index: 2;
    flex-shrink: 0;
    width: 42%;
    padding: 0;
  }

  .home-links-title {
    padding-top: 1em;
  }

  .home-links-list {
    padding: 1em 1.5em;
    border-radius: 20px;
    background-color: var(--navy-85);
    backdrop-filter: blur(20px);
    will-change: filter;
    transform: translate3D(0, 0, 0);
    box-shadow: 0 20px 20px var(--navy-10);
    color: var(--white);
    margin: 0;
  }

  .home-links-list a {
    fill: var(--white);
  }

  .home-links-img {
    width: auto;
    max-height: 50vw;
    flex-grow: 1;
    margin-left: -15%;
    height: 100%;
    height: auto;
    border-radius: 20px 0 0 20px;
    overflow: hidden;
    line-height: 0;
  }

  .home-links-list a:hover {
    fill: var(--green);
    color: var(--green);
  }
}
</style>
