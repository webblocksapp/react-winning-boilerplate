import { CommonStateOpt, Id } from '@app-types';

export const stateHandlers = <T extends Id, TState extends CommonStateOpt<T>>() => {
  const list = (records: T[], state: TState) => {
    return { ...state, records, error: '' };
  };

  const listing = (flag: boolean, state: TState) => {
    return { ...state, listing: flag };
  };

  const create = (record: T, state: TState) => {
    const records = [...(state.records || []), record];
    return { ...state, records, error: '' };
  };

  const creating = (flag: boolean, state: TState) => {
    return { ...state, creating: flag };
  };

  const update = (id: number | string, record: T, state: TState) => {
    let records = [...(state.records || [])];
    records = records.map((item) => {
      if (item.id === id) {
        return { ...item, ...record };
      }

      return item;
    });

    return { ...state, records, error: '' };
  };

  const updating = (flag: boolean, state: TState) => {
    return { ...state, updating: flag };
  };

  const remove = (id: number | string, state: TState) => {
    const records = [...(state.records || [])].filter((record) => record.id !== id);
    return { ...state, records, error: '' };
  };

  const removing = (flag: boolean, state: TState) => {
    return { ...state, removing: flag };
  };

  const error = (message: string, state: TState) => {
    return { ...state, error: message };
  };

  return {
    list,
    listing,
    create,
    creating,
    update,
    updating,
    remove,
    removing,
    error,
  };
};
