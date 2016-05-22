'use strict';

import EventManagerMixin from 'mixins/EventManagerMixin';

import States from 'core/States';

import debounce from 'lodash.debounce';

import {
  WINDOW_RESIZE
} from 'config/messages';

export default Vue.extend({

  mixins: [EventManagerMixin],

  template: require('./template.html'),

  emitterEvents: [],

  domEvents: [{
    target: window,
    event: 'resize',
    method: 'onResize'
  }],

  data() {

    return {
    };
  },

  ready() {

    this.addDeviceClass();
    this.addBrowserClass();
  },

  methods: {

    bind() {

      this.onResize = debounce(this.broadcastWindowSize, 200);
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
      this.emitter.emit(WINDOW_RESIZE, {
        width: window.innerWidth,
        height: window.innerHeight
      });
    }
  }
});
