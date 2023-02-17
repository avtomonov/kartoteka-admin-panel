import { Bar} from 'react-chartjs-2';
import { 
  Box, 
  Card, 
  CardContent, 
  CardHeader,  
  useTheme, 
  Grid,   
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
  } from '@mui/material';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { v4 as uuid } from 'uuid';

const orders = [
  {
    id: uuid(),
    amount1: '123 000 000 ₽',
    amount2: '90 568 666 ₽',
    amount3: '200 568 666 ₽',
  },
  {
    id: uuid(),
    amount1: '123 587 569 ₽',
    amount2: '123 587 569 ₽',
    amount3: '123 587 569 ₽',
  },
  {
    id: uuid(),
    amount1: '258 654 588 ₽',
    amount2: '258 654 588 ₽',
    amount3: '258 654 588 ₽',
  },
];

export const Reports = (props) => {
  const theme = useTheme();

  const data = {
   
    datasets: [
      {
        backgroundColor: '#2D8EFF',
        barThickness: 33,
        borderRadius: 4,
        data: [5, 20, 15, 25],
        maxBarThickness: 33,
      }
    ],
    labels: ['2017 год', '2018 год', '2019 год', '2020 год']
  };

  const options = {
    animation: true,
    cornerRadius: 2,
    layout: { padding: 0 },
    legend: { display: false },
    plugins: {
      legend: false // Hide legend
    },
    maintainAspectRatio: false,
    responsive: true,
    scales: {
        y: {
            display: false // Hide Y axis labels
        },
        x: {
            display: false // Hide X axis labels
        }
    },  
    tooltips: {
      backgroundColor: theme.palette.background.paper,
      bodyFontColor: theme.palette.text.secondary,
      borderColor: theme.palette.divider,
      borderWidth: 1,
      enabled: true,
      footerFontColor: theme.palette.text.secondary,
      intersect: false,
      mode: 'index',
      titleFontColor: theme.palette.text.primary
    }
  };

  return (
    <Card {...props}>
      <CardContent>
        <CardHeader
          title="Отчёты и статистика"
          component="h2"
        />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6.8}>
            <PerfectScrollbar>
              <Box sx={{
                minWidth: '320px'
              }}>
                <Table sx={{
                  marginLeft: '-10px',
                  width: {
                    xs: 'calc(100% + 15px)',
                    sm: '100%'
                  },
                  marginTop: '3px'
                }}>
                  <TableHead>
                    <TableRow>
                      <TableCell>
                        2020 год
                      </TableCell>
                      <TableCell>
                        2019 год
                      </TableCell>
                      <TableCell>
                        2018 год
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {orders.map((order) => (
                      <TableRow
                        hover
                        key={order.id}
                      >
                        <TableCell>
                          {order.amount1}
                        </TableCell>
                        <TableCell>
                          {order.amount2}
                        </TableCell>
                        <TableCell>
                          {order.amount3}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </PerfectScrollbar>
          </Grid>
          <Grid item xs={12} sm={5.2}>
            <Box
              sx={{
                height: 184,
                position: {
                  xs: 'relative',
                  sm: 'absolute'
                },
                bottom: {
                  xs: '0',
                  sm: '26px'
                },
                width: {
                  xs: '100%',
                  sm: '174px'
                },
                right:  {
                  xs: '0',
                  sm: '43px'
                },
              }}
            >
              <Bar
                data={data}
                options={options}
              />
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
