import { Dispatcher } from 'flux';
import { typeOfActions } from './actions.js';
import store from './store.js';
let AppDispatcher = new Dispatcher();


AppDispatcher.register((action) => {
  switch (action.actionType) {

    case typeOfActions.CHANGE_VIEWPORT:
      store.viewport.height = action.height;
      store.viewport.width = action.width;
      store.emit(typeOfActions.CHANGE_VIEWPORT);
      break;

    case typeOfActions.CHANGE_SCROLL:
      store.scroll = action.scroll;
      store.emit(typeOfActions.CHANGE_SCROLL);
      break;

    case typeOfActions.LEFT_PANEL:
      store.leftPanel = !store.leftPanel;
      store.emit(typeOfActions.LEFT_PANEL);
      break;

    case typeOfActions.SWITCH_PANEL:
      store.switchSide = action.side;
      store.emit(typeOfActions.SWITCH_PANEL);
      break;

    default:
      break;
  }
});


export default AppDispatcher;
