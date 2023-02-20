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
          '&.MuiButton-containedDefault:hover': {
            color: '#23273A',
            backgroundColor: '#FFFFFF'
          },
          '&.Mui-expanded': {
            minHeight: 'auto'
          },

          '&.Mui-focusVisible': {
            outline: '1px solid #FFFFFF'
          }
        },
        sizeSmall: {
          padding: '6px 16px',
          '& .MuiSvgIcon-root >*:nth-of-type(1)': {
            fontSize: '24px' 
          },
        },
        sizeMedium: {
          padding: '8px 8px'
        },
        sizeDefault: {
          borderRadius: '6px',
          padding: '7px 30px',
          fontWeight: '600',
          fontSize: '16px',
          lineHeight: '22px'
        },
        sizeLarge: {
          padding: '11px 6px'
        },
        textSizeSmall: {
          padding: '7px 12px',
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
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: '#151E41',
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          minHeight: '100%',
          position: 'relative',
          
          '+ .MuiCard-root': {
            marginTop: '30px',
            minHeight: 'auto'
          },

          '&.MuiCard-root:has(+ .MuiCard-root)': {
            minHeight: 'auto'
          },

         
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
            paddingBottom: '20px',
          },
          '.MuiAccordion-root, .MuiAccordion-root.Mui-expanded': {
            margin: '0 -20px'
          },
          '.MuiDivider-root': {
            marginLeft: '-20px',
            marginRight: '-20px',
          },

          '&.card-variant':{
           '@media(min-width: 1200px)': {
            padding: '24px 30px',

            '.MuiDivider-root': {
              marginLeft: '-30px',
              marginRight: '-30px',
            },
           }
          },

           '&.card-variant--2':{
            '@media(min-width: 1200px)': {
              padding: '20px 22px 20px 30px',
  
              '.MuiDivider-root': {
                marginLeft: '-30px',
                marginRight: '-30px',
              }
            }
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
          padding: '0',

          '+ .MuiDivider-root': {
            marginTop: '30px'
          }
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

    MuiInputBase: {
      styleOverrides: {
        root: {
          background: '#3E4459',
          padding: 0,
          color: '#C4C4C4',

          '&:after, &:before': {
            display: 'none',
          },

          '.MuiInputBase-input': {
            padding: '6px 10px',

            '&:focus': {
              background: '#43E8FF',
              borderRadius: '4px',
              color: '#23273A',

              '+ input + .MuiSvgIcon-root': {
                color: '#23273A',
              }
            },

            '&[aria-expanded="true"]': {
              background: '#43E8FF',
              borderRadius: '4px',
              color: '#23273A',

              '+ input + .MuiSvgIcon-root': {
                color: '#23273A',
                transform: 'rotate(180deg)'
              }
            }
          },

          
        }
      }
    },

    MuiFormLabel: {
      styleOverrides: {
        root: {
          lineHeight: '19px',
          position: 'relative',

          '&.Mui-focused': {
            transform: 'none',
            position: 'relative',
            marginBottom: '6px',
            userSelect: 'initial',
          }
        }
      }
    },

    MuiFormControl: {
      styleOverrides: {
        root: {
          marginBottom: '16px',

          '.MuiSvgIcon-root': {
            position: 'absolute',
            right: '15px',
            fontSize: '14px',
            pointerEvents: 'none'
          },
      
        }
      }
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          borderColor: '#E6E8F0',
          backgroundColor: '#3E4459',
          borderRadius: '5px',
          padding: 0,

          '&.Mui-focused': {
            backgroundColor: '#3E4459',
          },

          '.MuiSelect-select': {
            paddingRight: '50px',
          }
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {

          '&.MuiMenu-paper': {
            borderRadius: '4px',
            marginTop: '4px',
            boxShadow: '7px 7px 8px rgba(0, 0, 0, 0.15)',
            outline: '1px solid #151E41',

            '.Mui-selected':{
              background: 'rgba(255, 255, 255, 0.12)'
            },

            '.Mui-selected:hover': {
              background: '#43E8FF',
              color: '#23273A'
            }
            
          },

          '.MuiMenuItem-root':{
            background: 'rgba(255, 255, 255, 0.12)',
            borderBottom: '1px solid #151E41',
            padding: '7px 10px',

            '&:last-child': {
              border: 0
            }
          },

          '.MuiMenuItem-root:hover': {
            background: '#43E8FF',
            color: '#23273A'
          },
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

            '.table-full &:first-child': {
              paddingLeft: 0
            },

            '.table-full &:last-child': {
              paddingRight: 6,
              paddingLeft: 8,
              width: '43px'
            }
          },
          '& .MuiTableCell-paddingCheckbox': {
            paddingTop: 4,
            paddingBottom: 4
          },
          '.MuiTableRow-root:last-child .MuiTableCell-root': {
            borderBottom: '1px solid #151E41'
          },
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

          '.table-full &' :{
            paddingLeft: 28,
            paddingBottom: 10,

            '&:first-child': {
              paddingLeft: 0
            },

            '&:last-child': {
              paddingRight: 6,
              paddingLeft: 8,
              width: '43px'
            }
          }
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
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          padding: '0 0 26px'
        }
      }
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          padding:'20px 0',
          borderTop: '1px',
          borderBottom: '1px',
          borderColor: '#151E41',
          minHeight: 'auto',

          '.MuiAccordionSummary-content': {
            margin: 0
          },
          
          '&.Mui-expanded .MuiAccordionSummary-content': {
            margin: 0,
          },

          '&.Mui-expanded': {
            minHeight: 'auto',
          }
        }
      }
    },
    MuiList:{
      styleOverrides: {
        root: {
          paddingBottom: 0,
          paddingTop: 0,

          '&.list-square': {
            paddingBottom: 0,
            marginBottom: '24px',
            paddingTop: 0,
            marginTop: '8px',
          }
        }
      }
    },
    MuiListItem:{
      styleOverrides: {
        root: {
          padding: 0,
          marginBottom: '11px',

          '.MuiSvgIcon-root': {
            marginRight: '7px'
          },
          '&:last-child': {
            marginBottom: 0,
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
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          padding: '0 20px',

          '&:before': {
            display: 'none'
          }
        }
      }
    },
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
      active: '#FFFFFF',
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
    default: {
      main: '#23273A',
      active: '#FFFFFF',
      light: '#FFFFFF',
      dark: '#FFFFFF',
      contrastText: '#FFFFFF',
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
    },
    notification:{
      main: '#FF8991'
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
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: '19px'
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
      fontWeight: 700
    },
    body6: {
      fontSize: '14px',
      lineHeight: '19px',
      fontWeight: 600
    },
    body7: {
      fontSize: '14px',
      lineHeight: '19px',
      fontWeight: 600
    },
    body8: {
      fontSize: '12px',
      lineHeight: '16px',
      fontWeight: 300
    },
    body9: {
      fontSize: '12px',
      lineHeight: '16px',
      fontWeight: 400
    },
    body10: {
      fontSize: '12px',
      lineHeight: '16px',
      fontWeight: 400
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
