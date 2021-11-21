import { CommonState, Customer } from '@app-types';

export type CustomerState = Omit<CommonState<Customer>, 'record'>;
