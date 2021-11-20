import React from 'react';
import { List as MuiList, ListProps as MuiListProps } from '@material-ui/core';

interface ListProps extends MuiListProps {}

export const List: React.FC<ListProps> = (props) => {
  return <MuiList {...props} />;
};
