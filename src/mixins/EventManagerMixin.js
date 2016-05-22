import Emitter from 'core/Emitter';

/*
 *  ==== EventManagerMixin ====
 */

const EventManagerMixin = {

  emitterEvents: [],

  domEvents: [],

  created() {

    this.emitter = Emitter;
    this.emitterEvents = this.$options.emitterEvents;
    this.domEvents = this.$options.domEvents;

    this.bind();
  },

  ready() {
    this.addEventListeners();
  },

  beforeDestroy() {

    this.removeEventListeners();
  },

  methods: {

    bind() {

      this.emitterEvents.forEach((event) => {

        this[event.method] = ::this[event.method];
      });
    },

    addEventListeners() {

      // Add EventEmitter events
      this.emitterEvents.forEach((emitterEvent) => {

        if(typeof emitterEvent.once !== 'undefined') {
          if(emitterEvent.once) {
            this.emitter.once(emitterEvent.message, this[emitterEvent.method]);
          }
        } else {
          this.emitter.on(emitterEvent.message, this[emitterEvent.method]);
        }
      });

      // Add DOM events
      this.domEvents.forEach((domEvent) => {

        if( typeof domEvent.target === 'undefined') {
          domEvent.target = document;
        }

        domEvent.target.addEventListener(domEvent.event, this[domEvent.method], false);
      });
    },

    removeEventListeners() {

      // Remove EventEmitter events
      this.emitterEvents.forEach((emitterEvent) => {

        this.emitter.off(emitterEvent.message, this[emitterEvent.method]);
      });

      // Remove DOM events
      this.domEvents.forEach((domEvent) => {

        domEvent.target.removeEventListener(domEvent.event, this[domEvent.method], false);
      });
    }
  }
};

module.exports = EventManagerMixin;
