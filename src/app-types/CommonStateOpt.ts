export type CommonStateOpt<T> = {
  records?: T[];
  record?: T;
  error?: string;
  listing?: boolean;
  creating?: boolean;
  updating?: boolean;
  removing?: boolean;
};
