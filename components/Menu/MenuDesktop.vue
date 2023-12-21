<template>
  <nav id="menu-desktop">
    <ul class="menu-dp-nav">
      <li v-for="(item, i) in links" :key="`menu-dp-${i}`">
        <NuxtLink
          v-if="item.link_or_section && item.link.link_type === 'Any'"
          class="menu-link"
          :to="item.section_link.url"
          >{{ item.label }}</NuxtLink
        >
        <NuxtLink
          v-if="!item.link_or_section && item.link.link_type != 'Any'"
          class="menu-link"
          :to="item.link.url"
          >{{ item.label }}</NuxtLink
        >
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    links: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style>
#menu-desktop {
  font-size: 14px;
  line-height: 1.5;
}

.menu-dp-nav {
  list-style: none;
  display: flex;
  padding: 0;
  font-weight: 500;
}

.menu-dp-nav li {
  margin-right: 2em;
  letter-spacing: 0.025em;
}

.menu-dp-nav li:last-child {
  margin-right: 0;
}

a.menu-link {
  display: block;
  position: relative;
}

a.menu-link:hover {
  color: var(--green);
}

a.menu-link::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  left: 0;
  bottom: -2px;
  background-color: var(--green);
  transform: scaleX(0);
  transition: transform 0.3s ease-in-out;
}

a.menu-link:hover::after,
a.menu-link.nuxt-link-exact-active::after,
a.menu-link.observer-active::after {
  transform: scaleX(1);
}
</style>
