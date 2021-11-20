import React from 'react';
import { Box, Link, Typography } from '@components';
import { Outlet } from 'react-router-dom';

export const Customers: React.FC = () => {
  return (
    <>
      <Typography variant="h3">Customers module</Typography>
      <Box display="flex" justifyContent="space-between" mt={2} maxWidth={300}>
        <Link to="">Customers</Link>
        <Link to="create">Add customer</Link>
      </Box>
      <Box mt={2}>
        <Outlet />
      </Box>
    </>
  );
};

export * from './Customer';
export * from './CustomerForm';
export * from './CustomersList';
