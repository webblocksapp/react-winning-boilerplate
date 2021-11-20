import React from 'react';
import { Box as MuiBox, BoxProps as MuiBoxProps } from '@material-ui/core';

interface BoxProps extends MuiBoxProps {}

export const Box: React.FC<BoxProps> = (props) => {
  return <MuiBox {...props} />;
};
