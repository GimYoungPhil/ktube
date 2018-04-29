import API from '@/api'
import {
  REQUEST_IDOL_LIST,
  RECEIVE_IDOL_LIST,
} from '@/store/mutation-types'
import { parseIdols } from '@/util/parser'

const state = {
  idols: [],
  girls: [],
  boys: [],
}

const getters = {
}

const mutations = {
  [REQUEST_IDOL_LIST] (state) {
  },
  [RECEIVE_IDOL_LIST] (state, { result }) {
    const { idols, girls, boys } = parseIdols(result)
    state.idols = [ ...idols ]
    state.girls = [ ...girls ]
    state.boys = [ ...boys ]
  },
}

const actions = {
  fetchIdolList ({ commit }, { lang }) {
    commit(REQUEST_IDOL_LIST)
    API.getIdols({ lang })
      .then(result => commit(RECEIVE_IDOL_LIST, { result }))
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
