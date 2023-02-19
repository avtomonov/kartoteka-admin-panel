import { useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';

import { Edit as EditIcon } from '../../icons/edit';

import {
  Avatar,
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  IconButton
} from '@mui/material';
import { getInitials } from '../../utils/get-initials';

export const OrganizationListResults = ({ organizations, ...rest }) => {
  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
  const [limit] = useState(100);

  return (
    <Card {...rest}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050, maxHeight: '82vh' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                Наименование организации
                </TableCell>
                <TableCell>
                ИНН
                </TableCell>
                <TableCell>
                Руководитель
                </TableCell>
                <TableCell>
                Адрес
                </TableCell>
                <TableCell>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {organizations.slice(0, limit).map((organization) => (
                <TableRow
                  hover
                  key={organization.id}
                  selected={selectedCustomerIds.indexOf(organization.id) !== -1}
                >
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: 'center',
                        display: 'flex'
                      }}
                    >
                      <Avatar
                        src={organization.chartUrl}
                        sx={{ mr: 2 }}
                        variant="square"
                      >
                        {getInitials(organization.name)}
                      </Avatar>
                      <Typography
                        color="textPrimary"
                        variant="body1"
                      >
                        {organization.name}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {organization.inn}
                  </TableCell>
                  <TableCell>
                    {organization.head}
                  </TableCell>
                  <TableCell>
                    {organization.address}
                  </TableCell>
                  <TableCell>
                    <IconButton sx={{ 
                      '& .MuiSvgIcon-root': {
                        fontSize: '15px' 
                      }}} 
                      color="primary">
                      <EditIcon fontSize="small" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
    </Card>
  );
};

OrganizationListResults.propTypes = {
  organizations: PropTypes.array.isRequired
};
