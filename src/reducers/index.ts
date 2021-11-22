import { combineReducers } from 'redux';
import { customerReducer as customerState } from './customerReducer';

export const state = combineReducers({
  customerState,
});
