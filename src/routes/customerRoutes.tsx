import { RouteObject } from 'react-router-dom';
import { Customers, Customer, CustomersList } from '@modules/Customers';

export const customerRoutes: RouteObject[] = [
  {
    path: 'customers',
    element: <Customers />,
    children: [
      { path: '', element: <CustomersList /> },
      { path: 'create', element: <Customer mode="create" /> },
      { path: ':id/update', element: <Customer mode="update" /> },
      { path: ':id', element: <Customer mode="view" /> },
    ],
  },
];
