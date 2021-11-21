import { CommonAction, CommonState, CommonStateOpt, Id } from '@app-types';
import { stateHandlers } from '@utils';

export const buildState = <T extends Id, TState, Action extends CommonAction<any, T>>(
  initialState: CommonStateOpt<CommonState<T>>
) => {
  return (state: TState = initialState as TState, action: Action) => {
    const handlers = stateHandlers<T, TState>();
    const entityName = action.type.split(':')[0];
    const anyAction = action as any;

    switch (anyAction.type) {
      case `${entityName}:LIST`:
        return handlers.list(anyAction.records, state);
      case `${entityName}:LISTING`:
        return handlers.listing(anyAction.flag, state);
      case `${entityName}:LIST_FAILED`:
        return handlers.error(anyAction.message, state);
      case `${entityName}:CREATE`:
        return handlers.create(anyAction.record, state);
      case `${entityName}:CREATING`:
        return handlers.creating(anyAction.flag, state);
      case `${entityName}:CREATE_FAILED`:
        return handlers.error(anyAction.message, state);
      case `${entityName}:UPDATE`:
        return handlers.update(anyAction.id, anyAction.record, state);
      case `${entityName}:UPDATING`:
        return handlers.updating(anyAction.flag, state);
      case `${entityName}:UPDATE_FAILED`:
        return handlers.error(anyAction.message, state);
      case `${entityName}:REMOVE`:
        return handlers.remove(anyAction.id, state);
      case `${entityName}:REMOVING`:
        return handlers.removing(anyAction.flag, state);
      case `${entityName}:REMOVE_FAILED`:
        return handlers.error(anyAction.message, state);
      default:
        return state;
    }
  };
};
