const state = {
  history:[],                         //  路由容器
  pageIndex:0,                        //  当前页面层级
  topNavigationClick:false            //  是否是导航栏点击
}

const mutations = {
  ADD_HISTORY (store,path) {
    state.history.push(path)
  },
  SET_HISTORY (store,history) {
    state.history = history
  },
  SET_PAGEINDEX (store,index) {
    state.pageIndex = index
  },
  SET_PRESS_TYPE (store,type) {
    state.topNavigationClick = type
  }
}

const actions = {
  someAsyncTask ({ commit }) {
    // do something async
    commit('INCREMENT_MAIN_COUNTER')
  }
}

export default {
  state,
  mutations,
  actions
}
