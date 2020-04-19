import { showDetail } from './showDetail';
import { makeup } from './makeup';
import { favorite } from './favorite';
import { error } from './error';
import { combineReducers } from 'redux';

export const RootReducer = combineReducers({
  showDetail,
  makeup,
  favorite,
  error
});