import React from 'react';
import { useRoutes } from 'react-router-dom';
import { routes } from '@routes';

const App: React.FC = () => {
  const router = useRoutes(routes);
  return router;
};

export default App;
