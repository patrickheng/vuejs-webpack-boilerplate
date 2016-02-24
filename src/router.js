import VueRouter from 'vue-router';

import HomepageComponent from 'containers/homepage';

Vue.use(VueRouter);

class Router extends VueRouter {

  constructor() {

    super({
      hashbang: false,
      pushState: true,
      history: true,
      abstract: false,
      saveScrollPosition: false,
      transitionOnLoad: false
    });

    this.map({

      '*': {
        name: "home",
        component: HomepageComponent
      }
    });

    this.beforeEach( ({ to, from, abort, next }) => {

      if (to.path === from.path && to.path !== '/') {

        console.warn('Router: Same route path : ', to, from);

        abort();

      } else {

        next();
      }
    });

    this.afterEach( ({ to, from }) => {

      console.log('global afterEach : ', to, from);

    });
  }
}

export default new Router;