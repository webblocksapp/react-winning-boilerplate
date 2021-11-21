export type CommonStateOpt<CommonState> = {
  [Property in keyof CommonState]?: CommonState[Property];
};
