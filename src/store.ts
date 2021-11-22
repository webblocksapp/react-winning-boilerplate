import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { state } from '@reducers';

export const store = createStore(state, composeWithDevTools());
