import React from 'react';
import { Container, Header, WhiteLink as Link } from '@components';
import { Outlet } from 'react-router-dom';

export const MainLayout: React.FC = () => {
  return (
    <>
      <Header>
        <Link to="/">Home</Link>
        <Link to="/customers">Customers</Link>
      </Header>
      <Container style={{ marginTop: 100 }}>
        <Outlet />
      </Container>
    </>
  );
};
