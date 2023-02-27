import Vue from "vue";
import Vuex from "vuex";
import api from "@/services/api";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    clientes: [],
    cliente: {},
  },

  actions: {
    getClientes({ commit }) {
      api
        .get("clientes/")
        .then((response) => {
          commit("getClientes", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    addCliente({ commit }, cliente) {
      api
        .post("clientes/", cliente)
        .then((response) => {
          commit("addCliente", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    deleteCliente({ commit }, id) {
      api.delete('clientes/'+id)
      .then(() => {
        commit('deleteCliente', id)
      })
      .catch(error => {
        console.log(error.data)
      })
    },
  },

  mutations: {
    getClientes(state, clientes) {
      state.clientes = clientes;
    },

    addCliente(state, cliente) {
      state.clientes.push(cliente);
    },

    deleteCliente(state, clienteId) {
      state.clientes = state.clientes.filter(cliente => cliente.id != clienteId);
    }
  },
});

export { store };
