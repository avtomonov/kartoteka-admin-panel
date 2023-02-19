import { useState } from 'react';
import { Box, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import { DashboardNavbar } from './dashboard-navbar';
import { DashboardSidebar } from './dashboard-sidebar';

const DashboardLayoutRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  flex: '1 1 auto',
  maxWidth: '100%',
  paddingTop: 64,
  [theme.breakpoints.up('lg')]: {
    paddingLeft: 240,
    paddingTop: 136,
    paddingBottom: 40
  }
}));

export const DashboardLayout = (props) => {
  const { children } = props;
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div>
      <DashboardLayoutRoot>
        <Box
          sx={{
            display: 'flex',
            flex: '1 1 auto',
            flexDirection: 'column',
            width: '100%'
          }}
        >
        <Container 
            maxWidth={false}
            disableGutters={true}
            sx={{
              flexGrow: 1,
              py: {
                xs: 3,
                sm: 4,
                md: 7,
                lg: 0
              },
              pr: {
                xs: 2,
                sm: 3.75,
                lg: 5, 
                x: 10, 
              },
              pl: {
                xs: 2,
                sm: 3.75,
                lg: 5
              }
            }}  
          >
          {children}
          </Container>
        </Box>
      </DashboardLayoutRoot>
      <DashboardNavbar onSidebarOpen={() => setSidebarOpen(true)} />
      <DashboardSidebar
        onClose={() => setSidebarOpen(false)}
        open={isSidebarOpen}
      />
    </div>
  );
};
