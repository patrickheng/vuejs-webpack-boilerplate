'use strict';

import debounce from 'lodash.debounce';

import {
  WINDOW_RESIZE
} from 'config/messages';

export default Vue.extend({

  template: require('./template.html'),

  data: function() {

    return {
    };
  },

  created: function() {

    this.bind();
  },

  ready: function() {

    this.addEventListeners();
  },

  beforeDestroy: function() {

    this.removeEventListeners();
  },

  methods: {

    /*
     * Binding & Events
     */

    bind: function() {
      this.onResize = debounce(this.broadcastWindowSize, 200);
    },

    addEventListeners: function() {

      // Resize
      window.addEventListener('resize', this.onResize, false);
    },

    removeEventListeners: function() {
      window.removeEventListener('resize', this.onResize, false);
    },

    /*
     * Resize
     */
    broadcastWindowSize: function() {

      this.$broadcast(WINDOW_RESIZE, window.innerWidth, window.innerHeight);
    }
  },

  transitions: {

  },

  components: {

  }
});