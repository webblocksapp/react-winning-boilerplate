import { Customer, CustomerAction, CustomerState } from '@app-types';
import { buildState } from '@utils';

export const customerState = buildState<Customer, CustomerState, CustomerAction>({
  records: [],
  listing: false,
  creating: false,
  updating: false,
  removing: false,
  error: '',
});
