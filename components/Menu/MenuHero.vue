<template>
  <aside id="menu-hero" class="first-section" :class="{ active: active }">
    <div class="sub-wrapper">
      <ul class="menu-hero-nav">
        <li v-for="(item, i) in links" :key="`menu-mb-${i}`">
          <!-- <NuxtLink
            class="menu-hero-link"
            :to="item.link.url"
            @click.native="closeMenu()"
            >{{ item.label }}</NuxtLink
          > -->
          <NuxtLink
            v-if="item.link_or_section && item.link.link_type === 'Any'"
            class="menu-hero-link"
            :to="item.section_link.url"
            @click.native="closeMenu()"
            >{{ item.label }}</NuxtLink
          >
          <NuxtLink
            v-if="!item.link_or_section && item.link.link_type != 'Any'"
            class="menu-hero-link"
            :to="item.link.url"
            @click.native="closeMenu()"
            >{{ item.label }}</NuxtLink
          >
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
      default: false,
    },
    links: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    closeMenu() {
      this.$emit('close-menu')
    },
  },
}
</script>

<style>
#menu-hero {
  z-index: 10;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--green);
  color: var(--white);
  transform: scale(1.01);
  transform-origin: bottom center;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: all 0.5s ease;
}

#menu-hero .sub-wrapper {
  height: 100%;
  padding-top: 85px;
  padding-bottom: 70px;
}

#menu-hero.active {
  opacity: 1;
  transform: scale(1);
  visibility: visible;
  pointer-events: all;
}

ul.menu-hero-nav {
  font-size: 24px;
  font-weight: 500;
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

ul.menu-hero-nav li {
  margin-bottom: 1em;
  letter-spacing: 0.05em;
}

ul.menu-hero-nav li:last-child {
  margin-bottom: 0;
}

a.menu-hero-link {
  display: block;
  position: relative;
}

a.menu-hero-link::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  left: 0;
  bottom: -2px;
  background-color: var(--blue);
  transform: scaleX(0);
  transition: transform 0.3s ease-in-out;
}

a.menu-hero-link:hover::after,
a.menu-hero-link.nuxt-link-exact-active::after,
a.menu-hero-link.observer-active::after {
  transform: scaleX(1);
}
</style>
