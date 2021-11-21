import { Customer, CustomerState } from '@app-types';
import { buildState } from '@utils';

export const customerState = buildState<Customer, CustomerState, 'CUSTOMER'>(
  {
    records: [],
    listing: false,
    creating: false,
    updating: false,
    removing: false,
    error: '',
  },
  'CUSTOMER'
);
