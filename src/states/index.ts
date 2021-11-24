import { RootState } from '@app-types';
import { combineReducers as combineStates } from 'redux';
import { customerState } from './customerState';
import { sidebarState } from './sidebarState';

export const states = combineStates<RootState>({
  customerState,
  sidebarState,
});
