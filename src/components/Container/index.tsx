import React from 'react';
import { Container as MuiContainer, ContainerProps as MuiContainerProps } from '@material-ui/core';

interface ContainerProps extends MuiContainerProps {}

export const Container: React.FC<ContainerProps> = (props) => {
  return <MuiContainer {...props} />;
};
