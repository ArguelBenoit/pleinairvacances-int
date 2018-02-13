import { Dispatcher } from 'flux';
import { typeOfActions } from './actions.js';
import store from './store.js';
let AppDispatcher = new Dispatcher();


AppDispatcher.register((action) => {
  switch (action.actionType) {

    case typeOfActions.CHANGE_VIEWPORT:
      store.emit(typeOfActions.CHANGE_VIEWPORT);
      store.viewport.height = action.height;
      store.viewport.width = action.width;
      break;

    case typeOfActions.CHANGE_SCROLL:
      store.emit(typeOfActions.CHANGE_SCROLL);
      store.scroll = action.scroll;
      break;

    case typeOfActions.LEFT_PANEL:
      store.emit(typeOfActions.LEFT_PANEL);
      store.leftPanel = !store.leftPanel;
      break;

    default:
      break;
  }
});


export default AppDispatcher;
