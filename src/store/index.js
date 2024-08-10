// src/store/index.js
import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      count: 0
    };
  },
  mutations: {
    increment(state) {
      state.count += 1;
      console.log('Incrementado:', state.count);
    },
    decrement(state) {
      state.count -= 1;
      console.log('Decrementado:', state.count);
    }
  }
});

export default store;
