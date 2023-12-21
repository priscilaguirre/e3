<template>
  <footer id="foot">
    <div class="sub-wrapper">
      <div class="foot-logo white">
        <NuxtLink to="/">
          <SVGLogo @click.native="closeMenu()" />
        </NuxtLink>
      </div>
      <div class="foot-mid">
        <div class="foot-legal">
          <prismic-rich-text
            :field="$store.state.menuFoot.data.legal_statement"
          />
        </div>
        <div class="foot-links">
          <li
            v-for="(item, i) in $store.state.menuFoot.data.footer_links"
            :key="`foot-link-${i}`"
          >
            <a
              v-if="item.link.link_type === 'Web'"
              :href="item.link.url"
              :target="item.link.target"
              >{{ item.label }}</a
            >
            <NuxtLink
              v-if="item.link.link_type === 'Document'"
              :to="item.link.url"
              >{{ item.label }}</NuxtLink
            >
          </li>
        </div>
      </div>

      <div class="foot-socials">
        <FooterSocials :socials="$store.state.menuFoot.data.socials" />
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      socials: [
        {
          social_media: 'Facebook',
          social_link: {
            url: 'https://www.facebook.com/Etresmx/',
            target: '_blank',
          },
        },
        {
          social_media: 'LinkedIn',
          social_link: {
            url: 'https://www.linkedin.com/',
            target: '_blank',
          },
        },
      ],
    }
  },
}
</script>

<style>
#foot {
  background-color: var(--navy);
  color: var(--white);
  padding: 40px 0;
}

#foot .sub-wrapper {
  align-items: center;
  text-align: center;
}

.foot-logo {
  width: 50px;
  line-height: 0;
  margin-bottom: 25px;
}

.foot-mid {
  width: 70%;
  font-size: 14px;
  margin-bottom: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.foot-legal {
  margin-bottom: 1em;
}

.foot-links {
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.foot-links li {
  margin-bottom: 0.3em;
}

.foot-links a {
  font-weight: 500;
  color: var(--white-60);
}

.foot-links a:hover {
  color: var(--white);
}

@media (min-width: 1000px) {
  #foot .sub-wrapper {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }
  .foot-logo {
    width: 60px;
    margin-bottom: -0;
  }

  .foot-mid {
    width: auto;
    font-size: 16px;
    margin-bottom: 0;
  }

  .foot-links {
    flex-direction: row;
    flex-wrap: wrap;
  }

  .foot-links li {
    margin: 0 0.3em;
  }
}
</style>
