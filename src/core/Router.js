import VueRouter from 'vue-router';

import HomePageComponent from 'containers/Homepage';

Vue.use( VueRouter );

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

    this.path = '/';
    this.firstRoute = true;
    this.routeTimeout = null;


    this.map({

      '*': {
        name: "home",
        component: HomePageComponent
      }

    });
  }
}

export default new Router;
