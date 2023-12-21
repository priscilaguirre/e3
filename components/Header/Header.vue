<template>
  <div class="head-wrap">
    <header id="head">
      <div class="sub-wrapper">
        <div class="head-logo color">
          <NuxtLink :to="`/`">
            <SVGLogo @click.native="closeMenu()" />
          </NuxtLink>
        </div>
        <LangSwitcher :alt-langs="langs" />
        <div class="head-menu">
          <MenuButton
            v-if="isMobile"
            :active="activeMenu"
            @click.native="toggleMenu()"
          />
          <MenuDesktop v-if="!isMobile" :links="adaptedMenu" />
        </div>
      </div>
    </header>
    <MenuHero
      :active="activeMenu"
      :links="adaptedMenu"
      @close-menu="closeMenu()"
    />
  </div>
</template>

<script>
export default {
  props: {
    langs: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      activeMenu: false,
      isMobile: true,
      adaptedMenu: [],
    }
  },
  mounted() {
    this.adaptedMenu = this.$store.state.menuFoot.data.menu_links.map(
      this.adaptMenuLink
    )
    // console.log(this.adaptedMenu)
    this.setQueries()
    window.addEventListener('resize', this.setQueries)
  },
  methods: {
    setQueries() {
      const vp = this.viewport()
      if (vp.width >= 1000) {
        this.isMobile = false
        this.closeMenu()
      } else {
        this.isMobile = true
      }
    },
    viewport() {
      let e = window
      let a = 'inner'
      if (!('innerWidth' in window)) {
        a = 'client'
        e = document.documentElement || document.body
      }
      return { width: e[a + 'Width'], height: e[a + 'Height'] }
    },
    toggleMenu() {
      this.activeMenu = !this.activeMenu
    },
    closeMenu() {
      this.activeMenu = false
    },
    adaptMenuLink(item) {
      const vm = this
      return {
        ...item,
        section_link: {
          url: vm.getLink(item.section_name),
        },
      }
    },
    getLink(section) {
      let link = ''
      switch (section) {
        case 'Inicio':
          link = '/'
          break
        case 'Nosotros':
          link = '#nosotros'
          break
        case 'Cultura':
          link = '#cultura'
          break
        case 'Que':
          link = '#que'
          break
        case 'Como':
          link = '#como'
          break
        case 'Productos':
          link = '#productos'
          break
        case 'Servicios':
          link = '#servicios'
          break
        case 'Equipo':
          link = '#equipo'
          break
        case 'Contacto':
          link = '#contacto'
          break
        default:
          link = ''
      }
      if (this.$route.params.lang) {
        link = `/${this.$route.params.lang}${link}`
      } else {
        link = `/${link}`
      }
      return link
    },
  },
}
</script>

<style>
#head {
  z-index: 50;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: var(--white);
  box-shadow: 0px 0px 50px var(--navy-25);
  padding: 15px 0;
}

#head .sub-wrapper {
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.head-logo {
  width: 60px;
  line-height: 0;
  flex-shrink: 0;
}

.head-menu {
  line-height: 0;
  flex-shrink: 0;
}

@media (min-width: 1000px) {
  .head-logo {
    width: 70px;
  }
}
</style>
