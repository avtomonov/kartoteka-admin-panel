import Head from 'next/head';
import { Box, Container, Grid } from '@mui/material';

import { Work } from '../components/dashboard/work';
import { RentChart } from '../components/dashboard/rent-chart';
import { Staff } from '../components/dashboard/staff';
import { Reports } from '../components/dashboard/reports';
import { Weather } from '../components/dashboard/weather';
import { HarvestStatistics } from '../components/dashboard/harvest-statistics.js';
import { Statistics } from '../components/dashboard/statistics';
import { DashboardLayout } from '../components/dashboard-layout';

const Page = () => (
  <>
    <Head>
      <title>
        Главная | Картотека
      </title>
    </Head>
    <Box
      component="main"
    >
      <Container 
        maxWidth={false}
        disableGutters={true}
        sx={{
          flexGrow: 1,
          py: {
            xs: 2,
            sm: 4,
            md: 7,
            lg: 0
          },
          pr: {
            xs: 3.75,
            lg: 5, 
            x: 10, 
          },
          pl: {
            xs: 3.75,
            lg: 5
          }
        }}  
      >
        <Grid
          container
          spacing={3.75}
        >
          <Grid
            item
            xxl={4.5}
            lg={4}
            md={4}
            xs={12}
          >
            <Work sx={{ height: '100%' }}/>
          </Grid>
          <Grid
            item
            xxl={4.5}
            lg={4}
            md={4}
            sm={6}
            xs={12}
          >
            <HarvestStatistics sx={{ height: '100%', minHeight: '230px' }} />
          </Grid>
          <Grid
            item
            xxl={3}
            md={4}
            lg={4}
            sm={6}
            xs={12}
          >
            <Weather sx={{ height: '100%' }}/>
          </Grid>
          <Grid
            item
            md={8}
            xs={12}
          >
            <Reports sx={{ height: '100%' }} />
          </Grid>
          
          <Grid
            item
            md={4}
            sm={12}
            xs={12}
          >
            <Staff sx={{ height: '100%' , minHeight: '230px'}} />
          </Grid>
          <Grid
            item
            md={6}
            sm={12}
            xs={12}
          >
            <Statistics sx={{ height: '100%' }} />
          </Grid>
          <Grid
            item
            md={6}
            xs={12}
          >
            <RentChart />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
