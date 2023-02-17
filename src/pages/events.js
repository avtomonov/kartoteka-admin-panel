import Head from 'next/head';
import { Box, Container, Typography } from '@mui/material';
import { DashboardLayout } from '../components/dashboard-layout';

const Page = () => (
  <>
    <Head>
      <title>
        Мероприятия | Картотека
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container
        maxWidth={false}
        disableGutters={true}
        sx={{
            flexGrow: 1,
            py: 0,
            pr: {
            xs: 3.75, 
            lg: 10, 
            },
            pl: 5
        }}  
      >
        <Typography
          sx={{ mb: 3 }}
          variant="h4"
        >
          Мероприятия
        </Typography>
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
