export type CommonAction<EntityName extends string, T> =
  | { type: `${EntityName}:LIST`; records: T[] }
  | { type: `${EntityName}:CREATE`; record: T }
  | { type: `${EntityName}:UPDATE`; id: number; record: T }
  | { type: `${EntityName}:REMOVE`; id: number }
  | { type: `${EntityName}:LIST_FAILED`; message: string }
  | { type: `${EntityName}:CREATE_FAILED`; message: string }
  | { type: `${EntityName}:UPDATE_FAILED`; message: string }
  | { type: `${EntityName}:REMOVE_FAILED`; message: string }
  | { type: `${EntityName}:LISTING`; flag: boolean }
  | { type: `${EntityName}:CREATING`; flag: boolean }
  | { type: `${EntityName}:UPDATING`; flag: boolean }
  | { type: `${EntityName}:REMOVING`; flag: boolean };
