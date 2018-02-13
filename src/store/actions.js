import AppDispatcher from './dispatch.js';

export var typeOfActions = {
  CHANGE_VIEWPORT: 'CHANGE_VIEWPORT',
  CHANGE_SCROLL: 'CHANGE_SCROLL'
};

export var Actions = {
  changeViewport(width, height) {
    AppDispatcher.dispatch({
      actionType: typeOfActions.CHANGE_VIEWPORT,
      width,
      height
    });
  },
  changeScroll(scroll) {
    AppDispatcher.dispatch({
      actionType: typeOfActions.CHANGE_SCROLL,
      scroll
    });
  }
};
