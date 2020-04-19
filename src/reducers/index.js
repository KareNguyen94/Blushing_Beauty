import { showDetail } from './showDetail';
import { makeup } from './makeup';
import { favorite } from './favorite';
import { combineReducers } from 'redux';

export const RootReducer = combineReducers({
  showDetail,
  makeup,
  favorite,
});