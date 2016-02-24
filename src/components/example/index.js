'use strict';

import {
  WINDOW_RESIZE
} from '../../config/messages';

export default Vue.extend({

  template: require('./template.html'),

  data() {

    return {
      _hidden: null
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
    },

    addEventListeners() {
      this.$on(WINDOW_RESIZE, this.onWindowResize);
    },

    removeEventListeners() {
      this.$off(WINDOW_RESIZE, this.onWindowResize);
    },

    onWindowResize(width, height) {
    }

  },

  transitions: {

  },

  components: {}
});