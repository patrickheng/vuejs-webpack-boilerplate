import AWDLoader from 'common/utils/AWDLoader';
import Emitter from 'helpers/Emitter';
import SoundManager from 'helpers/SoundManager';
import files from 'config/resources';

import { RESOURCES_READY } from 'config/messages';

/**
 * Loader class
 */
class Loader {

  /**
   * constructor function
   * @param {array} files               Files to load
   * @param {function} onResourceLoaded Called everytime a resource is loaded
   */
  constructor() {

    this.promises = [];
    this.totalProgress = files.length;
    this.currentProgress = 0;

    const getLoader = type => {
      switch( type ) {
        case 'model': return new AWDLoader();
        case 'texture': return new THREE.TextureLoader();
        case 'audio': return SoundManager;
      }
    };

    files.map( file => {

      const { type, id, url } = file;

      const promise = new Promise( ( resolve, reject ) => {

        getLoader( type ).load(
          url,
          resource => {
            resolve({ id, resource });
            this.currentProgress++;
          },
          () => null,
          () => reject,
          id
        );
      });

      this.promises.push( promise );

    });
  }

  /**
   * load function
   * @return {promise} Promise
   */
  load() {

    Emitter.emit( RESOURCES_READY );

    return Promise.all( this.promises );
  }

}

export default new Loader();
