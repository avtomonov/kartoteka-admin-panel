import { useEffect } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { Box, Divider, Drawer, useMediaQuery } from '@mui/material';

import { Home as HomeIcon } from '../icons/home';
import { User as UserIcon } from '../icons/user';
import { Users as UsersIcon } from '../icons/users';
import { Events as EventsIcon } from '../icons/events';
import { Notes as NotesIcon } from '../icons/notes';
import { Statistics as StatisticsIcon } from '../icons/statistics';
import { Approvals as ApprovalsIcon } from '../icons/approvals';
import { Weather as WeatherIcon } from '../icons/weather';
import { Organizations as OrganizationsIcon } from '../icons/organizations';

import { NavItem } from './nav-item';
import { NavItemSecondary } from './nav-item-secondary';

const topItems = [
  {
    href: '/',
    icon: (<HomeIcon fontSize="small" />),
    title: 'Главная'
  },
  {
    href: '/settings',
    icon: (<UserIcon fontSize="small" />),
    title: 'Константин Константиновский'
  }
];

const items = [
  {
    href: '/events',
    icon: (<EventsIcon fontSize="medium" />),
    title: 'Мероприятия'
  },
  {
    href: '/staff',
    icon: (<UsersIcon fontSize="medium" />),
    title: 'Сотрудники'
  },
  {
    href: '/notes',
    icon: (<NotesIcon fontSize="medium" />),
    title: 'Заметки'
  },
  {
    href: '/statistics',
    icon: (<StatisticsIcon fontSize="medium" />),
    title: 'Статистика'
  },
  {
    href: '/approval',
    icon: (<ApprovalsIcon fontSize="medium" />),
    title: 'Одобрения'
  },
  {
    href: '/weather',
    icon: (<WeatherIcon fontSize="medium" />),
    title: 'Погода'
  },
  {
    href: '/organizations',
    icon: (<OrganizationsIcon fontSize="medium" />),
    title: 'Организации'
  }
];

export const DashboardSidebar = (props) => {
  const { open, onClose } = props;
  const router = useRouter();
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'), {
    defaultMatches: true,
    noSsr: false
  });

  useEffect(
    () => {
      if (!router.isReady) {
        return;
      }

      if (open) {
        onClose?.();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [router.asPath]
  );

  const content = (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          py: 2.7
        }}
      >
        <div>
          <Box sx={{ flexGrow: 1 }}>
            {topItems.map((item) => (
              <NavItemSecondary
                key={item.title}
                icon={item.icon}
                href={item.href}
                title={item.title}
              />
            ))}
          </Box>
        </div>
        <Divider
          sx={{
            borderColor: '#1F2339',
            my: "24px"
          }}
        />
        <Box sx={{ flexGrow: 1 }}>
          {items.map((item) => (
            <NavItem
              key={item.title}
              icon={item.icon}
              href={item.href}
              title={item.title}
            />
          ))}
        </Box>
      </Box>
    </>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: 'neutral.900',
            color: '#FFFFFF',
            width: 240
          }
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: 'neutral.900',
          color: '#FFFFFF',
          width: 240
        }
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

DashboardSidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool
};
