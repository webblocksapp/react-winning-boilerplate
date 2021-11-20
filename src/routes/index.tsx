import { RouteObject } from 'react-router-dom';
import { customerRoutes } from './customerRoutes';
import { MainLayout } from '../layouts/MainLayout';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout />,
    children: [...customerRoutes],
  },
];
