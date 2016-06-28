'use strict';

import {
  COUNTER_INCREMENT
} from '../mutation-types';

const state = {
  count: 0
};

const mutations = {
  [ COUNTER_INCREMENT ] (state) {
    state.count++;
  }
};

export default {
  state,
  mutations
};
