import { createTheme } from '@mui/material';

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 700,
      md: 1000,
      lg: 1240,
      lx: 1366,
      x:  1440,
      xl: 1640,
      xxl: 1920
    }
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '10px',
          color: '#43E8FF',
          fontWeight: 400,
          justifyContent: 'flex-start',
          minWidth: 'auto',

          '& .MuiSvgIcon-root': {
            fontSize: '24px' 
          },
          '&:hover': {
            backgroundColor: 'rgba(255,255,255, 0.08)',
            color: '#ffffff',
          },
        },
        sizeSmall: {
          padding: '6px 16px'
        },
        sizeMedium: {
          padding: '8px 8px'
        },
        sizeLarge: {
          padding: '11px 6px'
        },
        textSizeSmall: {
          padding: '7px 12px'
        },
        textSizeMedium: {
          padding: '10.25px 6px'
        },
        textSizeLarge: {
          padding: '10px',
          fontWeight: 600,
          fontSize: '14px',
          lineHeight: '19px'
        }
      }
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          height: '100%',
          position: 'relative'
        }
      }
    },
    
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: '24px 20px',
          height: '100%',
          backgroundColor: '#383E57',
          '&:last-child': {
            paddingBottom: '20px'
          }
        }
      }
    },
    MuiCardHeader: {
      defaultProps: {
        titleTypographyProps: {
          variant: 'h6'
        },
        subheaderTypographyProps: {
          variant: 'body2'
        }
      },
      styleOverrides: {
        root: {
          padding: '0'
        }
      }
    },
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          boxSizing: 'border-box',
          margin: 0,
          padding: 0
        },
        html: {
          MozOsxFontSmoothing: 'grayscale',
          WebkitFontSmoothing: 'antialiased',
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100%',
          width: '100%'
        },
        body: {
          display: 'flex',
          flex: '1 1 auto',
          flexDirection: 'column',
          minHeight: '100%',
          width: '100%'
        },
        '#__next': {
          display: 'flex',
          flex: '1 1 auto',
          flexDirection: 'column',
          height: '100%',
          width: '100%'
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: '#E6E8F0'
        }
      }
    },
    MuiTableHead: {
      styleOverrides: {
        root: {

          '& .MuiTableCell-root': {
            borderBottom: '1px solid #151E41',
            borderRight: 'none',
            fontWeight: 400,
            lineHeight: '19px',
            paddingTop: 12,
            paddingBottom: 10,
            paddingLeft: 11,
            paddingRight: 12,
          },
          '& .MuiTableCell-paddingCheckbox': {
            paddingTop: 4,
            paddingBottom: 4
          },
          '.MuiTableRow-root:last-child .MuiTableCell-root': {
            borderBottom: '1px solid #151E41'
          }
        }
      }
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: '1px solid #151E41',
          borderRight: '1px solid #151E41',
          paddingTop: 10,
          paddingBottom: 9,
          paddingLeft: 10,
          paddingRight: 10,
          fontWeight: 400,
          lineHeight: '19px',

          '&:last-child': {
            borderRight: 'none',
          },
        }
      }
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          '&:last-child .MuiTableCell-root': {
            borderBottom: 0
          }
        }
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          '&.header--collapsed':{
            boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.15)'
          },
          '&.header--collapsed .MuiContainer-root': {
            paddingBottom: 2,
            paddingTop: 2
          },
          '.MuiContainer-root': {
            transition: '0.3s',
            transitionProperty: 'padding box-shadow'
          }
        }
      }
    }
  },
  palette: {
    neutral: {
      100: '#F3F4F6',
      200: '#E5E7EB',
      300: '#FFFFFF',
      400: '#FFFFFF',
      500: '#ffffff',
      600: '#4B5563',
      700: '#374151',
      800: '#1F2937',
      900: '#1F2339'
    },
    action: {
      active: '#6B7280',
      focus: 'rgba(55, 65, 81, 0.12)',
      hover: 'rgba(55, 65, 81, 0.04)',
      selected: 'rgba(55, 65, 81, 0.08)',
      disabledBackground: 'rgba(55, 65, 81, 0.12)',
      disabled: 'rgba(55, 65, 81, 0.26)'
    },
    background: {
      default: '#4D5474',
      paper: '#383E57'
    },
    primary: {
      main: '#ffffff',
      light: '#828DF8',
      dark: '#23273A',
      contrastText: '#FFFFFF'
    },
    secondary: {
      main: '#43E8FF',
      active: '#43E8FF',
      light: '#3FC79A',
      dark: '#0B815A',
      contrastText: '#FFFFFF'
    },
    success: {
      main: '#14B8A6',
      light: '#43C6B7',
      dark: '#0E8074',
      contrastText: '#FFFFFF'
    },
    info: {
      main: '#2196F3',
      light: '#64B6F7',
      dark: '#0B79D0',
      contrastText: '#FFFFFF'
    },
    warning: {
      main: '#FFB020',
      light: '#FFBF4C',
      dark: '#B27B16',
      contrastText: '#FFFFFF'
    },
    error: {
      main: '#D14343',
      light: '#DA6868',
      dark: '#922E2E',
      contrastText: '#FFFFFF'
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#A1A6BE',
      disabled: 'rgba(55, 65, 81, 0.48)',
      textTransform: 'none'
    }
  },
  shape: {
    borderRadius: 16
  },
  shadows: [
    'none',
    '7px 7px 8px rgba(0, 0, 0, 0.15)',
    '0px 1px 2px rgba(100, 116, 139, 0.12)',
    '0px 1px 4px rgba(100, 116, 139, 0.12)',
    '0px 1px 5px rgba(100, 116, 139, 0.12)',
    '0px 1px 6px rgba(100, 116, 139, 0.12)',
    '0px 2px 6px rgba(100, 116, 139, 0.12)',
    '0px 3px 6px rgba(100, 116, 139, 0.12)',
    '0px 2px 4px rgba(31, 41, 55, 0.06), 0px 4px 6px rgba(100, 116, 139, 0.12)',
    '0px 5px 12px rgba(100, 116, 139, 0.12)',
    '0px 5px 14px rgba(100, 116, 139, 0.12)',
    '0px 5px 15px rgba(100, 116, 139, 0.12)',
    '0px 6px 15px rgba(100, 116, 139, 0.12)',
    '0px 7px 15px rgba(100, 116, 139, 0.12)',
    '0px 8px 15px rgba(100, 116, 139, 0.12)',
    '0px 9px 15px rgba(100, 116, 139, 0.12)',
    '0px 10px 15px rgba(100, 116, 139, 0.12)',
    '0px 12px 22px -8px rgba(100, 116, 139, 0.25)',
    '0px 13px 22px -8px rgba(100, 116, 139, 0.25)',
    '0px 14px 24px -8px rgba(100, 116, 139, 0.25)',
    '0px 10px 10px rgba(31, 41, 55, 0.04), 0px 20px 25px rgba(31, 41, 55, 0.1)',
    '0px 25px 50px rgba(100, 116, 139, 0.25)',
    '0px 25px 50px rgba(100, 116, 139, 0.25)',
    '0px 25px 50px rgba(100, 116, 139, 0.25)',
    '0px 25px 50px rgba(100, 116, 139, 0.25)'
  ],
  typography: {
    button: {
      fontWeight: 600
    },
    fontFamily: '"Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.5
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.57
    },
    body3: {
      fontSize: '80px',
      fontWeight: 300,
      lineHeight: '109px',
      letterSpacing: '-0.05em'
    },
    body4: {
      fontSize: '36px',
      fontWeight: 400,
      lineHeight: '78px',
    },
    body5: {
      fontSize: '14px',
      lineHeight: '19px',
      fontWeight: 400
    },
    body6: {
      fontSize: '14px',
      lineHeight: '19px',
      fontWeight: 600
    },
    subtitle1: {
      fontSize: '14px',
      lineHeight: '19px',
      fontWeight: 400
    },
    subtitle2: {
      fontSize: '0.875rem',
      fontWeight: 500,
      lineHeight: 1.57
    },
    overline: {
      fontSize: '1rem',
      fontWeight: 700,
      lineHeight: '26px',
      textTransform: 'none'
    },
    caption: {
      fontSize: '0.75rem',
      fontWeight: 400,
      lineHeight: 1.66
    },
    h1: {
      fontWeight: 700,
      fontSize: '20px',
      lineHeight: '27px'
    },
    h2: {
      fontWeight: 700,
      fontSize: '3rem',
      lineHeight: 1.375
    },
    h3: {
      fontWeight: 700,
      fontSize: '2.25rem',
      lineHeight: 1.375
    },
    h4: {
      fontWeight: 700,
      fontSize: '2rem',
      lineHeight: 1.375
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.375
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 700,
      lineHeight: '26px',
      textTransform: 'none'
    }
  }
});