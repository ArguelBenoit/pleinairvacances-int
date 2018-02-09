import { combineReducers } from 'redux';
import viewport from './viewport';
import scroll from './scroll';

const reduxApp = combineReducers({
  viewport,
  scroll
});

export default reduxApp;
