<template>
  <svg id="burger" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
    <g>
      <rect id="burger-top" y="4.86" width="30" height="3" />
      <rect id="burger-mid" y="13.5" width="30" height="3" />
      <rect id="burger-bot" y="22.14" width="30" height="3" />
    </g>
  </svg>
</template>

<style>
#burger-top,
#burger-mid,
#burger-bot {
  transform-origin: center center;
  transition: transform 0.5s ease, opacity 0.5s ease;
}

.active #burger-top {
  transform: rotate(45deg) translateY(8.64px);
}

.active #burger-bot {
  transform: rotate(-45deg) translateY(-8.64px);
}

.active #burger-mid {
  opacity: 0;
}
</style>
