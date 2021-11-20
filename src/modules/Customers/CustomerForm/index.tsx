import React from 'react';
import { FormProps } from '@app-types';
import { Typography } from '@components';

export const CustomerForm: React.FC<FormProps> = ({ mode }) => {
  return (
    <>
      <Typography variant="body1">Customer form in {mode} mode</Typography>
    </>
  );
};
