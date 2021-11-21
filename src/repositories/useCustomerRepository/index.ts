import { Dispatch } from 'react';
import { Customer, CustomerAction, RootState } from '@app-types';
import { handleAxiosApi, getAxiosErrorMessage } from '@utils';
import { useCustomerApi } from '@apis';
import { useDispatch } from 'react-redux';

export const useCustomerRepository = () => {
  const dispatch = useDispatch<Dispatch<CustomerAction>>();
  const customerApi = useCustomerApi();

  const list = async () => {
    try {
      dispatch({ type: 'CUSTOMER:LISTING', flag: true });
      const customers = await handleAxiosApi<Customer[]>(customerApi.list());
      dispatch({ type: 'CUSTOMER:LIST', records: customers });
    } catch (error) {
      dispatch({ type: 'CUSTOMER:LIST_FAILED', message: getAxiosErrorMessage(error) });
    } finally {
      dispatch({ type: 'CUSTOMER:LISTING', flag: false });
    }
  };

  const create = async (customer: Customer) => {
    try {
      dispatch({ type: 'CUSTOMER:CREATING', flag: true });
      const createdCustomer = await handleAxiosApi<Customer>(customerApi.create(customer));
      dispatch({ type: 'CUSTOMER:CREATE', record: createdCustomer });
    } catch (error) {
      dispatch({ type: 'CUSTOMER:CREATE_FAILED', message: getAxiosErrorMessage(error) });
    } finally {
      dispatch({ type: 'CUSTOMER:CREATING', flag: false });
    }
  };

  const update = async (id: number, customer: Customer) => {
    try {
      dispatch({ type: 'CUSTOMER:UPDATING', flag: true });
      const updatedCustomer = await handleAxiosApi<Customer>(customerApi.update(id, customer));
      dispatch({ type: 'CUSTOMER:UPDATE', id, record: updatedCustomer });
    } catch (error) {
      dispatch({ type: 'CUSTOMER:UPDATE_FAILED', message: getAxiosErrorMessage(error) });
    } finally {
      dispatch({ type: 'CUSTOMER:UPDATING', flag: false });
    }
  };

  const remove = async (id: number) => {
    try {
      dispatch({ type: 'CUSTOMER:REMOVING', flag: true });
      await handleAxiosApi(customerApi.remove(id));
      dispatch({ type: 'CUSTOMER:REMOVE', id });
    } catch (error) {
      dispatch({ type: 'CUSTOMER:REMOVE_FAILED', message: getAxiosErrorMessage(error) });
    } finally {
      dispatch({ type: 'CUSTOMER:REMOVING', flag: false });
    }
  };

  const getCustomers = (state: RootState) => state.customerState.records;

  return {
    list,
    create,
    update,
    remove,
    getCustomers,
  };
};
