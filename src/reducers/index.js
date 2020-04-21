import { showDetail } from './showDetail';
import { makeup } from './makeup';
import { favorite } from './favorite';
import { error } from './error';
import { combineReducers } from 'redux';
import { color } from './color';

export const RootReducer = combineReducers({
  showDetail,
  makeup,
  favorite,
  error,
  color
});