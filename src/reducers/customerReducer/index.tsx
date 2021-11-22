import { CustomerAction, CustomerState } from '@app-types';
import { list, listing, error, create, creating, update, updating, remove, removing } from './handlers';

const initialState: CustomerState = {
  customers: [],
  listing: false,
  creating: false,
  updating: false,
  removing: false,
  error: '',
};

export const customerReducer = (state: CustomerState = initialState, action: CustomerAction) => {
  switch (action.type) {
    case 'CUSTOMER:LIST':
      return list(action.customers, state);
    case 'CUSTOMER:LISTING':
      return listing(action.flag, state);
    case 'CUSTOMER:LIST_FAILED':
      return error(action.message, state);
    case 'CUSTOMER:CREATE':
      return create(action.customer, state);
    case 'CUSTOMER:CREATING':
      return creating(action.flag, state);
    case 'CUSTOMER:CREATE_FAILED':
      return error(action.message, state);
    case 'CUSTOMER:UPDATE':
      return update(action.id, action.customer, state);
    case 'CUSTOMER:UPDATING':
      return updating(action.flag, state);
    case 'CUSTOMER:UPDATE_FAILED':
      return error(action.message, state);
    case 'CUSTOMER:REMOVE':
      return remove(action.id, state);
    case 'CUSTOMER:REMOVING':
      return removing(action.flag, state);
    case 'CUSTOMER:REMOVE_FAILED':
      return error(action.message, state);
    default:
      return state;
  }
};
