import { showDetail } from './showDetail';
import { makeup } from './makeup'
import { combineReducers } from 'redux';

export const RootReducer = combineReducers({
  showDetail,
  makeup,
});