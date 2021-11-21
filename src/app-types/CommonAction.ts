export type CommonAction<ActionType extends string, T> =
  | { type: `${ActionType}:LIST`; records: T[] }
  | { type: `${ActionType}:CREATE`; record: T }
  | { type: `${ActionType}:UPDATE`; id: number; record: T }
  | { type: `${ActionType}:REMOVE`; id: number }
  | { type: `${ActionType}:LIST_FAILED`; message: string }
  | { type: `${ActionType}:CREATE_FAILED`; message: string }
  | { type: `${ActionType}:UPDATE_FAILED`; message: string }
  | { type: `${ActionType}:REMOVE_FAILED`; message: string }
  | { type: `${ActionType}:LISTING`; flag: boolean }
  | { type: `${ActionType}:CREATING`; flag: boolean }
  | { type: `${ActionType}:UPDATING`; flag: boolean }
  | { type: `${ActionType}:REMOVING`; flag: boolean };
