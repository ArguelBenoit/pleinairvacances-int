import { EventEmitter } from 'events';
import _ from 'lodash';

let init = {
  viewport: {
    width: document.innerWidth,
    height: document.innerHeight
  },
  scroll: window.scrollY,
  leftPanel: false,
  switchSide: false
};

if(navigator.userAgent.match(/Android/i)
|| navigator.userAgent.match(/webOS/i)
|| navigator.userAgent.match(/iPhone/i)
|| navigator.userAgent.match(/iPad/i)
|| navigator.userAgent.match(/iPod/i)
|| navigator.userAgent.match(/BlackBerry/i)
|| navigator.userAgent.match(/Windows Phone/i))
  init.mobile = true;
else
  init.mobile = false;

var store = _.assign(
  init,
  EventEmitter.prototype
);

export default store;
