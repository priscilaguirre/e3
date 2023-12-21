<template>
  <div class="social-icons-wrap">
    <ul class="social-icons">
      <li v-for="(social, s) in socials" :key="`menu-social-${s}`">
        <a :href="social.link.url" :target="social.link.target" class="icon">
          <SVGInstagram v-if="social.social_media === 'Instagram'" />
          <SVGFacebook v-if="social.social_media === 'Facebook'" />
          <SVGYouTube v-if="social.social_media === 'YouTube'" />
          <SVGLinkedIn v-if="social.social_media === 'LinkedIn'" />
          <SVGWhatsApp v-if="social.social_media === 'WhatsApp'" />
          <SVGVimeo v-if="social.social_media === 'Vimeo'" />
          <SVGTikTok v-if="social.social_media === 'TikTok'" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    socials: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style>
.social-icons-wrap {
  width: 100%;
  font-size: 20px;
}

ul.social-icons {
  list-style-type: none;
  padding-left: 0;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.social-icons li {
  margin: 0 0.5em;
}

.social-icons li:last-child {
  margin-right: 0;
}

.social-icons .icon {
  width: 1em;
  height: 1em;
  transition: all 0.5s ease;
  transform-origin: bottom center;
}

.social-icons a {
  fill: var(--white);
}

.social-icons a:hover {
  fill: var(--green);
}

@media (min-width: 1000px) {
  .social-icons-wrap {
    font-size: 25px;
  }
}
</style>
