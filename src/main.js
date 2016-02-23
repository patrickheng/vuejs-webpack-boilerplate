import Router from 'vue-router';

import Application from './containers/application';

import domready from 'domready';

import 'gsap';

Vue.use(Router);

class Main {

  constructor() {

    this.router = null;

    this.bind();

    this.addEventListener();

    this.initilizeRouter();

    this.start();
  }

  bind() {}

  addEventListener() {}

  initilizeRouter() {

    this.router = new Router({
      hashbang: false,
      pushState: true,
      history: true,
      abstract: false,
      saveScrollPosition: false,
      transitionOnLoad: false
    });

    this.router.map({

      '*': {
        name: "home",
        component: require('./containers/homepage/index.js').default
      },
      '/home' : {
        name: "home",
        component: require('./containers/homepage/index.js').default
      }
    });

    this.router.beforeEach( ({ to, from, abort, next }) => {

      if (to.path === from.path && to.path !== '/') {

        console.warn('Router: Same route path : ', to, from);

        abort();

      } else {

        next();
      }
    });

    this.router.afterEach( ({ to, from }) => {

      console.log('global afterEach : ', to, from);

    });
  }

  start() {

    this.router.start(Application, '#application');

  }
}

domready(() => {

  new Main();
});