'use strict';

import './styles.scss';

import Emitter from 'core/Emitter';

import {
  WINDOW_RESIZE
} from 'config/messages';


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
      Emitter.on(WINDOW_RESIZE, this.onWindowResize);
    },

    removeEventListeners() {
      Emitter.off(WINDOW_RESIZE, this.onWindowResize);
    },

    onWindowResize({width, height}) {
      console.log(`Window resize from application with debounce -> width: ${width}px || height: ${height}`);
    },

    transitions: {

    },

    components: {
    }

  }
});
