import { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { AppBar, IconButton, Button, Toolbar, Tooltip, Typography, Container, Grid, Box, TextField, InputAdornment, SvgIcon } from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import { Settings as SettingsIcon } from '../icons/settings';
import { Plus as PlusIcon } from '../icons/plus';
import { Filter as FilterIcon } from '../icons/filter';
import { AccountPopover } from './account-popover';
import { useRouter } from 'next/router';



const DashboardNavbarRoot = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  boxShadow: 'none'
}));

export const DashboardNavbar = (props) => {
  const { onSidebarOpen, ...other } = props;
  const settingsRef = useRef(null);
  const [openAccountPopover, setOpenAccountPopover] = useState(false);

  const router = useRouter();
  const active = router.pathname;

  useEffect(() => {
    const header = document.querySelector('.js-collapse-header') // находим header и записываем в константу

    let prevScroll = window.pageYOffset // узнаем на сколько была прокручена страница ранее
    let currentScroll // на сколько прокручена страница сейчас (пока нет значения)

    window.addEventListener('scroll', () => { // при прокрутке страницы

      currentScroll = window.pageYOffset // узнаем на сколько прокрутили страницу

      const headerHidden = () => header.classList.contains('header--collapsed') // узнаем скрыт header или нет

      if (currentScroll > prevScroll && !headerHidden()) { // если прокручиваем страницу вниз и header не скрыт
        header.classList.add('header--collapsed') // то скрываем header
      }

      if (currentScroll < prevScroll && headerHidden() && currentScroll == 0) { // если прокручиваем страницу вверх и header скрыт
        header.classList.remove('header--collapsed') // то отображаем header
      }

      prevScroll = currentScroll // записываем на сколько прокручена страница на данный момент
    })
  }, []);

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
                <Box
                  sx={{ 
                    display: 'flex',
                    alignItems: 'baseline'
                  }}
                >
                  <Typography
                    color="textPrimary"
                    gutterBottom
                    variant="h1"
                    sx={{
                      mb: 0,
                      fontSize:{
                        xs: '14px',
                        sm: '20px'
                      },
                      marginRight: '20px'
                    }}
                  >
                    {active == '/' &&
                      <p>ИП Васильев</p>
                    }
                    {active == '/events' &&
                      <p>Карточка мероприятия</p>
                    }
                    {active == '/organizations' &&
                      <p>Организации</p>
                    }
                  </Typography>

                  {active == '/events' &&
            
                  <Typography
                    color="secondary"
                    variant="body11"
                    sx={{
                      display: {
                        xs: 'none',
                        lg: 'inline'
                      }
                    }}
                  >
                  Обновлено
                  </Typography>
                  }

                  </Box>
                </Grid>
              </Grid>

              <Grid item>

   
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  {active == '/events' &&
                    <Button 
                        variant="contained" 
                        color="white" 
                        size="default"
                        fontSize="medium"
                        href="#TODO"
                        sx={{
                          marginRight: '10px',
                          display: {
                            xs: 'none',
                            lg: 'flex'
                          }
                        }}
                    >Материалы проверки</Button>
                  }

                  {active == '/organizations' &&
                    <Box sx={{ 
                      display: {
                        xs: 'none',
                        lg: 'flex',
                        alignItems: 'center'
                      }
                    }}>

                      {/* TODO create search component */}
                      <TextField
                        fullWidth
                      
                        sx={{ 
                          marginBottom: 0,
                          
                          marginRight: '40px',
                          'input': {
                            height: '24px',
                          },
                          '.MuiInputBase-root': {
                            borderRadius: '6px',
                            minWidth: '465px',

                            'input': {
                              paddingRight: '40px'
                            }
                          },
                          '.MuiSvgIcon-root': {
                            top: '12px'
                          },
                          '.MuiInputAdornment-root': {
                            marginLeft: '-8px'
                          }
                        }}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <SvgIcon
                                fontSize="small"
                                color="action"
                              >
                                <FilterIcon />
                              </SvgIcon>
                            </InputAdornment>
                          ),
                        }}
                        placeholder="Поиск организации по ИНН или ОГРН"
                        variant="filled"
                      />
                      <Button 
                          variant="contained" 
                          color="white" 
                          size="default"
                          fontSize="medium"
                          href="#TODO"
                          sx={{
                            marginRight: '10px',
                            
                          }}
                      >Найти</Button>
                    </Box>
                  }

                  <Tooltip 
                    component="a"
                    href="#TODO" 
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
                    href="#TODO" 
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
                </Box>
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
