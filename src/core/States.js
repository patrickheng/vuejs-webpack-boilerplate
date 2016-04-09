import MobileDetect from 'mobile-detect';
import projects from 'data/projects';
import browser from 'detect-browser';

import find from 'lodash.find';

class States {

  constructor() {
    this.previousView = null;
    this.currentView = 'home';
    this.userAgent = window.navigator.userAgent;
    this.mobileDetect = new MobileDetect(window.navigator.userAgent);
    this.projects = projects;
    this.currentSlide = 0;
  }

  setNewView(newView) {

    if(this.previousView && newView != 'home') {
      this.currentSlide = find(this.projects, { ref: newView }).id + 1;
    }

    this.previousView = this.currentView;
    this.currentView = newView;

  }

  isDesktop() {
    if(this.isTablet()) {
      return false;
    } else if (this.isMobile()) {
      return false;
    } else {
      return true;
    }
  }

  isTablet() {
    return this.mobileDetect.tablet();
  }

  isMobile() {
    return this.mobileDetect.mobile();
  }

  isIE() {
    return (this.userAgent.indexOf('MSIE ') > 0 || this.userAgent.indexOf('Trident/') > 0 || this.userAgent.indexOf('Edge/') > 0);
  }

  getBrowserName() {
    return browser.name;
  }
}


export default new States();