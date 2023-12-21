<template>
  <button id="menu-btn" :class="{ active: active }">
    <div class="icon">
      <SVGBurger />
    </div>
  </button>
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style>
#menu-btn {
  font-size: 25px;
  fill: var(--navy);
}

#menu-btn.active {
  fill: var(--green);
}

#menu-btn .icon {
  width: 1em;
  height: 1em;
}
</style>
