'use strict';

import EventManagerMixin from 'mixins/EventManagerMixin';

import States from 'core/States';

import debounce from 'lodash.debounce';

import store from 'vuex/store';

import {
  WINDOW_RESIZE,
  WINDOW_ON_FOCUS,
  WINDOW_ON_BLUR
} from 'config/messages';

export default Vue.extend({

  store,

  mixins: [EventManagerMixin],

  template: require('./template.html'),

  emitterEvents: [],

  domEvents: [{
    target: window,
    event: 'resize',
    method: 'handleWindowResize'
  },{
    target: window,
    event: 'blur',
    method: 'handleWindowBlur'
  },{
    target: window,
    event: 'focus',
    method: 'handleWindowFocus'
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

      this.handleWindowResize = debounce(this.broadcastWindowSize, 200);
    },

    addBrowserClass() {
      this.$el.classList.add(States.browserName + '-browser');
    },

    addDeviceClass() {
      this.$el.classList.add(States.deviceType + '-device');
    },

    handleWindowBlur() {
      this.emitter.emit( WINDOW_ON_BLUR );
    },

    handleWindowFocus() {
      this.emitter.emit( WINDOW_ON_FOCUS );
    },

    broadcastWindowSize() {

      this.emitter.emit(WINDOW_RESIZE, {
        width: window.innerWidth,
        height: window.innerHeight
      });
    }
  }
});
