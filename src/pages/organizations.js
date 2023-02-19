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
      <Box>
        <OrganizationListResults organizations={organizations} />
      </Box>
    </Box>
  </>
);

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
