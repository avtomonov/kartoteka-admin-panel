import { useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';

import { Edit as EditIcon } from '../../icons/edit';

import { Chart1 as Chart1Icon } from '../../icons/chart1';
import { Chart2 as Chart2Icon } from '../../icons/chart2';
import { Chart3 as Chart3Icon } from '../../icons/chart3';

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
  IconButton,
  Tooltip
} from '@mui/material';
import { getInitials } from '../../utils/get-initials';

export const OrganizationListResults = ({ organizations, ...rest }) => {
  const [selectedCustomerIds] = useState([]);

  return (
    <Card {...rest}
      sx={{
        padding: '10px 10px 10px 10px'
      }}
    >
      <PerfectScrollbar>
        <Box 
          sx={{ 
            minWidth: 1050, 
            maxHeight: {
              xs: 'initial',
              lg: '79vh'
            }, 
            paddingRight: '25px'
          }}
        >
          <Table
            className="table-full"
          >
            <TableHead
              sx={{
                position: 'sticky',
                top: '0',
                background: '#383e57',
                zIndex: 1,
              }}
            >
              <TableRow
                sx={{
                  height: '42px',
                  position: 'relative',
                  top: '-5px'
                }}
              >
                <TableCell
                  sx={{
                    paddingLeft: '0'
                  }}
                >
                  <Typography
                    variant="body5"
                  >
                    Наименование организации
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    variant="body5"
                  >
                    ИНН
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    variant="body5"
                  >
                    Руководитель
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    variant="body5"
                  >
                    Адрес
                  </Typography>
                </TableCell>
                <TableCell>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {organizations.map((organization) => (
                <TableRow
                  hover
                  key={organization.id}
                >
                  <TableCell
                    
                  >
                    <Box
                      sx={{
                        alignItems: 'center',
                        display: 'flex'
                      }}
                      

                    >
                      {organization.chartValue === 1 &&
                        <Chart1Icon sx={{ mr: 1 }} fontSize="small" />
                      }
                      {organization.chartValue === 2 &&
                        <Chart2Icon sx={{ mr: 1 }} fontSize="small" />
                      }
                      {organization.chartValue === 3 &&
                        <Chart3Icon sx={{ mr: 1 }} fontSize="small" />
                      }
                      <Typography
                        color="textSecondary"
                        variant="body10"
                      >
                        {organization.name}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Typography
                      color="textSecondary"
                      variant="body10"
                    >
                      {organization.inn}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      color="textSecondary"
                      variant="body10"
                    >
                      {organization.head}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      color="textSecondary"
                      variant="body10"
                    >
                    {organization.address}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Tooltip 
                      component="a"
                      href="#TODO" 
                      title="Редактировать"
                    >
                      <IconButton sx={{ 
                        '& .MuiSvgIcon-root': {
                          fontSize: '15px' 
                        }}} 
                        color="primary">
                        <EditIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
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
