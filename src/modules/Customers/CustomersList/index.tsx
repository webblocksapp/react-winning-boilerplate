import React, { useEffect } from 'react';
import { Typography, List, ListItem, IconButton, Link } from '@components';
import { Edit as EditIcon } from '@material-ui/icons';
import { useCustomerRepository } from '@repositories';
import { useSelector } from 'react-redux';

export const CustomersList: React.FC = () => {
  const { getCustomers, list } = useCustomerRepository();
  const customers = useSelector(getCustomers);

  useEffect(() => {
    list();
  }, []);

  return (
    <List>
      {customers.map((customer) => (
        <ListItem key={customer.id}>
          <Typography variant="body1">{customer.firstName}</Typography>
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
