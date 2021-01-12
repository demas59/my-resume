import Resources from '../service/ressource'

const ResourcesService = new Resources()

export const state = () => ({
  profil: {},
})

export const mutations = {
  updateProfil(state, profil) {
    state.profil = profil
  },
}
export const actions = {
  async fetchProfil(context) {
    const res = await ResourcesService.getProfil()
    context.commit('updateProfil', res)
  },
}
