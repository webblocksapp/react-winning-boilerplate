import { RouteObject } from 'react-router-dom';
import { Customers, CustomerForm, CustomersList } from '@modules/Customers';

export const customerRoutes: RouteObject[] = [
  {
    path: 'customers',
    element: <Customers />,
    children: [
      { path: '', element: <CustomersList /> },
      { path: 'create', element: <CustomerForm mode="create" /> },
      { path: ':id/update', element: <CustomerForm mode="update" /> },
      { path: ':id', element: <CustomerForm mode="view" /> },
    ],
  },
];
