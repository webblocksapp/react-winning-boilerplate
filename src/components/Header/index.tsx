import React from 'react';
import { AppBar, Box, Toolbar } from '@material-ui/core';

export const Header: React.FC = ({ children }) => {
  return (
    <AppBar>
      <Toolbar>
        <Box display="flex" justifyContent="center" width="100%">
          {children}
        </Box>
      </Toolbar>
    </AppBar>
  );
};
