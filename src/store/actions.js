import AppDispatcher from './dispatch.js';

export var typeOfActions = {
  CHANGE_VIEWPORT: 'CHANGE_VIEWPORT',
  CHANGE_SCROLL: 'CHANGE_SCROLL',
  LEFT_PANEL: 'LEFT_PANEL',
  SWITCH_PANEL: 'SWITCH_PANEL'
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
  },
  leftPanel() {
    AppDispatcher.dispatch({
      actionType: typeOfActions.LEFT_PANEL
    });
  },
  switchPanel(side) {
    AppDispatcher.dispatch({
      actionType: typeOfActions.SWITCH_PANEL,
      side
    });
  }
};
