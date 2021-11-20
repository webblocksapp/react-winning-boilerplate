import React from 'react';
import { Typography, List, ListItem, IconButton, Link } from '@components';
import { Edit as EditIcon } from '@material-ui/icons';

const customers = [
  { id: 1, name: 'George Lucas' },
  { id: 2, name: 'Jim Carrey' },
  { id: 3, name: 'Will Smith' },
  { id: 4, name: 'John Williams' },
  { id: 5, name: 'Katherine Z Jones' },
];

export const CustomersList: React.FC = () => {
  return (
    <List>
      {customers.map((customer) => (
        <ListItem key={customer.id}>
          <Typography variant="body1">{customer.name}</Typography>
          <Link to={`${customer.id}/update`}>
            <IconButton>
              <EditIcon />
            </IconButton>
          </Link>
        </ListItem>
      ))}
    </List>
  );
};
