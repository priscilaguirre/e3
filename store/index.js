export const state = () => ({
  menuFoot: {},
})

export const mutations = {
  SET_MENU(state, menuFoot) {
    state.menuFoot = menuFoot
  },
  SET_MENU_ERROR(state, error) {
    state.menuFoot = error
  },
}

export const actions = {
  async fetchContent({ commit }, { $prismic, params }) {
    try {
      const menuFoot = await $prismic.api.getSingle('menu_footer', {
        lang: params.lang,
      })
      commit('SET_MENU', menuFoot)
    } catch (e) {
      const menuError = 'Menu & Footer not found'
      commit('SET_MENU_ERROR', menuError)
    }
  },
}
