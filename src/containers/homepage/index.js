'use strict';

import {
	WINDOW_RESIZE
} from '../../config/messages';

export default Vue.extend({

  template: require('./template.html'),

  data: function() {

    return {
      _hidden: null
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
    },

    addEventListeners: function() {
      this.$on(WINDOW_RESIZE, this.onWindowResize);
    },

    removeEventListeners: function() {
      this.$off(WINDOW_RESIZE, this.onWindowResize);
    },

    onWindowResize: function(width, height) {
      console.log('Window resize from application.', width, height);
    }

  },

  transitions: {

  },

  components: {}
});