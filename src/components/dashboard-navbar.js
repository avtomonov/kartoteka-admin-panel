import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { AppBar, IconButton, Button, Toolbar, Tooltip, Typography, Container, Grid } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Settings as SettingsIcon } from '../icons/settings';
import { Plus as PlusIcon } from '../icons/plus';

import { AccountPopover } from './account-popover';

const DashboardNavbarRoot = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  boxShadow: 'none'
}));

export const DashboardNavbar = (props) => {
  const { onSidebarOpen, ...other } = props;
  const settingsRef = useRef(null);
  const [openAccountPopover, setOpenAccountPopover] = useState(false);

  const onScrollHeader = () => { // объявляем основную функцию onScrollHeader
    // const header = document.querySelector('.js-collapse-header') // находим header и записываем в константу

    // if (header) {
    //   let prevScroll = window.pageYOffset // узнаем на сколько была прокручена страница ранее
    //   let currentScroll // на сколько прокручена страница сейчас (пока нет значения)

    //   window.addEventListener('scroll', () => { // при прокрутке страницы

    //     currentScroll = window.pageYOffset // узнаем на сколько прокрутили страницу

    //     const headerHidden = () => header.classList.contains('header--collapsed') // узнаем скрыт header или нет

    //     if (currentScroll > prevScroll && !headerHidden()) { // если прокручиваем страницу вниз и header не скрыт
    //       header.classList.add('header--collapsed') // то скрываем header
    //     }

    //     if (currentScroll < prevScroll && headerHidden() && currentScroll == 0) { // если прокручиваем страницу вверх и header скрыт
    //       header.classList.remove('header--collapsed') // то отображаем header
    //     }
  
    //     prevScroll = currentScroll // записываем на сколько прокручена страница на данный момент
    //   })
    // }
  }

  onScrollHeader() // вызываем основную функцию onScrollHeader
  

  return (
    <>
      <DashboardNavbarRoot
        className="js-collapse-header"
        sx={{
          left: {
            lg: 240
          },
          width: {
            lg: 'calc(100% - 240px)'
          },
        }}
        
        {...other}>

        <Container 
          maxWidth={false}
          disableGutters={true}
          sx={{
            flexGrow: 1,
            py: {
              xs: 1,
              sm: 2,
              md: 3.5,
              lg: 4.5,
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
          <Toolbar
            disableGutters
            sx={{
              minHeight: 64,
              left: 0,
            }}
          >
            <Grid
              container
              sx={{ 
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <Grid item>
                <Grid container
                sx={{ 
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
                >
                <Button
                    onClick={onSidebarOpen}
                    color="primary"
                    variant="outlined"
                    sx={{
                      mr: 2,
                      display: {
                        xs: 'inline-flex',
                        lg: 'none'
                      }
                    }}
                  >
                  <MenuIcon fontSize="small" color="primary" />
                </Button>
                <Typography
                  color="textPrimary"
                  gutterBottom
                  variant="h1"
                  sx={{
                    mb: 0,
                    fontSize:{
                      xs: '14px',
                      sm: '20px'
                    }
                  }}
                >
                  ИП Васильев
                </Typography>
                </Grid>
              </Grid>

              <Grid item>
                <Tooltip 
                  component="a"
                  href="#" 
                  title="Добавить виджет"
                >
                  <IconButton sx={{ 
                    ml: 1,
                    transform: 'rotate(-9deg)',
                    '& .MuiSvgIcon-root': {
                      fontSize: '28px' 
                    } }} 
                    color="primary"
                  >
                    <PlusIcon fontSize="small" />
                  </IconButton>
                </Tooltip>

                <Tooltip 
                  component="a"
                  href="#" 
                  title="Настройки"
                >
                  <IconButton sx={{ ml: 1, 
                    '& .MuiSvgIcon-root': {
                      fontSize: '32px' 
                    }}} 
                    color="primary">
                    <SettingsIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </DashboardNavbarRoot>

      <AccountPopover
        anchorEl={settingsRef.current}
        open={openAccountPopover}
        onClose={() => setOpenAccountPopover(false)}
      />

    </>
  );
};

DashboardNavbar.propTypes = {
  onSidebarOpen: PropTypes.func
};
