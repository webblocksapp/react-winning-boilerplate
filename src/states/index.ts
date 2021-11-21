import { combineReducers as combineStates } from 'redux';
import { customerState } from './customerState';

export const states = combineStates({
  customerState,
});
