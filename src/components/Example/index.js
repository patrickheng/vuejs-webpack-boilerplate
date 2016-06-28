'use strict';

import './styles.scss';

import EventManagerMixin from 'mixins/EventManagerMixin';

import {
  counterIncrement
} from 'vuex/example/actions';

import {
  countExample
} from 'vuex/example/getters';


export default Vue.extend({

  mixins: [ EventManagerMixin ],

  template: require( './template.html' ),

  vuex: {
    getters: {
      count: countExample
    },
    actions: {
      counterIncrement
    }
  },

  emitterEvents: [],

  domEvents: [],

  data() {

    return {
      _hidden: null
    };
  },

  ready() {},

  methods: {},

  transitions: {},

  components: {}
});
