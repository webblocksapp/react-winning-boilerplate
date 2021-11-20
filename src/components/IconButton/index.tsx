import React from 'react';
import { IconButton as MuiIconButton, IconButtonProps as MuiIconButtonProps } from '@material-ui/core';

interface IconButtonProps extends MuiIconButtonProps {
  button?: false;
}

export const IconButton: React.FC<IconButtonProps> = (props) => {
  return <MuiIconButton {...props} />;
};
