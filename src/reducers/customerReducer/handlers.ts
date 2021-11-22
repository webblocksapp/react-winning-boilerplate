import { Customer, CustomerState } from '@app-types';

export const list = (customers: Customer[], state: CustomerState) => {
  return { ...state, customers, error: '' };
};

export const listing = (flag: boolean, state: CustomerState) => {
  return { ...state, listing: flag };
};

export const create = (customer: Customer, state: CustomerState) => {
  const customers = [...state.customers, customer];
  return { ...state, customers, error: '' };
};

export const creating = (flag: boolean, state: CustomerState) => {
  return { ...state, creating: flag };
};

export const update = (id: number, customer: Customer, state: CustomerState) => {
  let customers = [...state.customers];
  customers = customers.map((item) => {
    if (item.id === id) {
      return { ...item, ...customer };
    }

    return item;
  });

  return { ...state, customers, error: '' };
};

export const updating = (flag: boolean, state: CustomerState) => {
  return { ...state, updating: flag };
};

export const remove = (id: number, state: CustomerState) => {
  const customers = [...state.customers].filter((customer) => customer.id !== id);
  return { ...state, customers, error: '' };
};

export const removing = (flag: boolean, state: CustomerState) => {
  return { ...state, removing: flag };
};

export const error = (message: string, state: CustomerState) => {
  return { ...state, error: message };
};
