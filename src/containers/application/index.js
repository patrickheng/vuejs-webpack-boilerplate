'use strict';

import debounce from 'lodash.debounce';

import {
  WINDOW_RESIZE
} from 'config/messages';

export default Vue.extend({

  template: require('./template.html'),

  data() {

    return {
    };
  },

  created() {

    this.bind();
  },

  ready() {

    this.addEventListeners();
  },

  beforeDestroy() {

    this.removeEventListeners();
  },

  methods: {

    /*
     * Binding & Events
     */

    bind() {
      this.onResize = debounce(this.broadcastWindowSize, 200);
    },

    addEventListeners() {

      // Resize
      window.addEventListener('resize', this.onResize, false);
    },

    removeEventListeners() {
      window.removeEventListener('resize', this.onResize, false);
    },

    /*
     * Resize
     */
    broadcastWindowSize() {

      this.$broadcast(WINDOW_RESIZE, window.innerWidth, window.innerHeight);
    }
  },

  transitions: {

  },

  components: {

  }
});