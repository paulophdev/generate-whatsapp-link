import { createStore } from "vuex";

export default createStore({
  state: {
    urlLinkWhatsapp: "",
  },
  getters: {},
  mutations: {
    setUrlLinkWhatsapp(state, val) {
      state.urlLinkWhatsapp = val;
    },

    clearUrlLinkWhatsapp(state) {
      state.urlLinkWhatsapp = "";
    },
  },
  actions: {},
  modules: {},
});
