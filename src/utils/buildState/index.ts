import { CommonAction, CommonStateOpt, Id } from '@app-types';
import { stateHandlers } from '@utils';

export const buildState = <T extends Id, TState extends CommonStateOpt<T>, ActionType extends string>(
  initialState: TState,
  actionType: ActionType
) => {
  return (state: TState = initialState, action: CommonAction<ActionType, TState>) => {
    const handlers = stateHandlers<T, TState>();
    const anyAction = action as any;

    switch (anyAction.type) {
      case `${actionType}:LIST`:
        return handlers.list(anyAction.records, state);
      case `${actionType}:LISTING`:
        return handlers.listing(anyAction.flag, state);
      case `${actionType}:LIST_FAILED`:
        return handlers.error(anyAction.message, state);
      case `${actionType}:CREATE`:
        return handlers.create(anyAction.record, state);
      case `${actionType}:CREATING`:
        return handlers.creating(anyAction.flag, state);
      case `${actionType}:CREATE_FAILED`:
        return handlers.error(anyAction.message, state);
      case `${actionType}:UPDATE`:
        return handlers.update(anyAction.id, anyAction.record, state);
      case `${actionType}:UPDATING`:
        return handlers.updating(anyAction.flag, state);
      case `${actionType}:UPDATE_FAILED`:
        return handlers.error(anyAction.message, state);
      case `${actionType}:REMOVE`:
        return handlers.remove(anyAction.id, state);
      case `${actionType}:REMOVING`:
        return handlers.removing(anyAction.flag, state);
      case `${actionType}:REMOVE_FAILED`:
        return handlers.error(anyAction.message, state);
      default:
        return state;
    }
  };
};
