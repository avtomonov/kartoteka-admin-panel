import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { OrganizationListResults } from '../components/customer/customer-list-results';
import { DashboardLayout } from '../components/dashboard-layout';
import { organizations } from '../__mocks__/organizations';

const Page = () => (
  <>
    <Head>
      <title>
        Организации | Картотека
      </title>
    </Head>
    <Box
      component="main"
    >
      <Container  
        maxWidth={false}
        disableGutters={true}
        sx={{
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
        }}  >
        <Box >
          <OrganizationListResults organizations={organizations} />
        </Box>
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
