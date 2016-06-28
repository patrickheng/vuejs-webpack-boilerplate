'use strict';

import Vuex from 'vuex';
import exampleStore from 'vuex/example/store';
import createLogger from 'vuex/logger';

Vue.use(Vuex);
Vue.config.debug = true;

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    exampleStore
  },
  strict: debug,
  middlewares: debug ? [createLogger()] : []
});
