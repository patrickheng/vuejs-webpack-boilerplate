'use strict';

import EventManagerMixin from 'mixins/EventManagerMixin';

import './styles.scss';

export default Vue.extend({

  mixins: [ EventManagerMixin ],

  template: require('./template.html'),

  emitterEvents: [],

  domEvents: [],
  
  data() {

    return {
      _hidden: null
    };
  },

  ready() {},

  beforeDestroy() {},

  methods: {},

  transitions: {},

  components: {}
});
