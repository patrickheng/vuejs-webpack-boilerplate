'use strict';

import Emitter from 'core/Emitter';

import States from 'core/States';

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
    this.addDeviceClass();
    this.addBrowserClass();
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
      window.addEventListener('resize', this.onResize, false);
    },

    removeEventListeners() {
      window.removeEventListener('resize', this.onResize, false);
    },

    addBrowserClass() {
      this.$el.classList.add(States.browserName + '-browser');
    },

    addDeviceClass() {
      this.$el.classList.add(States.deviceType + '-device');
    },

    /*
     * Resize
     */
    broadcastWindowSize() {

      Emitter.emit(WINDOW_RESIZE, {
        width: window.innerWidth,
        height: window.innerHeight
      });
    }
  }
});
