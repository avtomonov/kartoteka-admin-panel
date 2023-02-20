import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Grid,
  Box,
  Link,
} from '@mui/material';

import { ListSquare } from '../list-square';
import { Star as StarIcon } from '../../icons/star';

const listItems = [
  {
    title: 'Экскаваторы 2020',
    subtitles: ['15 100 машин', '130 областей', '5 предприятий'],
    indicator: 1
  }
]


export const RentChart = (props) => (
  <Card {...props}>
    <CardContent>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        '.MuiSvgIcon-root': {
          fontSize: '16px',
          marginLeft: '16px'
        }
      }}>
        <CardHeader title="Арендуемая техника" component="h2"/>
        <StarIcon />
      </Box>

      <Typography
        color="textPrimary"
        variant="subtitle1"
        component="p"

        sx={{
          mt: '15px',
          mb: '12px',
        }}
      >
        ООО “Магнат Мед”
      </Typography>

      <Grid container>
        
        <Grid item xs={12} sm={4} md={5}>
          <ListSquare items={listItems} />
        </Grid>
        <Grid item xs={12} sm={8} md={7}>
          <Box
            sx={{
              '& img': {
                width: {
                  xs: '100%',
                  x: 'calc(100vw / 1440 * 294)'
                },
                height: 'auto',
                marginTop: {
                  xs: '-50px',
                  sm: '-80px',
                  md: '-80px',
                  x: '-95px'
                },
                marginLeft: {
                  md: '0',
                  x: '0'
                },
                marginBottom: {
                  xs: '40px',
                  sm: '0',
                  md: '-27px'
                },
              },
            }}
          >
            <img
              alt='График аренды'
              src='/static/images/rent-chart.svg'
              height='313'
              width='270'
            />
          </Box>
        </Grid>
      </Grid>
   
      <Link
        href="#"
        color="secondary"
        variant="body6"
        underline="none"
        sx={{ 
          position: 'absolute',
          left: '20px',
          bottom: '26px' 
        }} 
      >
        Добавить технику
      </Link>

    </CardContent>
  </Card>
);
