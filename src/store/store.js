import { EventEmitter } from 'events';
import _ from 'lodash';

let init = {
  viewport: {
    width: window.innerWidth,
    height: window.innerHeight
  },
  scroll: window.scrollY
};

var store = _.assign(
  init,
  EventEmitter.prototype
);

export default store;
