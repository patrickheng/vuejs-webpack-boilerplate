'use strict';

import * as types from '../mutation-types';

export const counterIncrement = ({ dispatch }) => {
  dispatch(types.COUNTER_INCREMENT);
};
