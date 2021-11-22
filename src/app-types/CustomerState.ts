import { Customer, ErrorState, FlagState } from '@app-types';

export type CustomerState = {
  customers: Customer[];
} & FlagState &
  ErrorState;
