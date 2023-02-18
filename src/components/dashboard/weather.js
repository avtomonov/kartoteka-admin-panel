import { Card, CardContent, Grid, Typography, Paper, CardHeader, Link  } from '@mui/material';
import { styled } from '@mui/material/styles';
import NextLink from 'next/link';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: 0,
  color: theme.palette.text.secondary,
  boxShadow: 'none'
}));

export const Weather = (props) => (
  <NextLink
    href="/weather"
    passHref
  >
    <Link
      component="a"
      href="/weather"
      underline="none"
    >
      <Card
        sx={{ height: '100%' }}
        {...props}
      >
        <CardContent
          sx={{ 
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between' 
          }}
        >
          <CardHeader
              title="Погода в Курской области"
              component="h2"
          />
          <Grid container spacing={0} sx={{ pt: 0 }}>
            <Grid container sx={{ pb: 1.4, flexWrap: 'nowrap' }}>
              <Grid item xs={6.4} xl={8}>
                <Item
                  sx={{ pt: 6.4 }}
                >
                  <Typography
                    color="textPrimary"
                    variant="subtitle1"
                    component="p"
                    sx={{ mb: '1px' }}
                  >
                    28.08.2020
                  </Typography>
                  <Typography
                    color="textPrimary"
                    variant="subtitle1"
                    component="p"
                  >
                    Среда
                  </Typography>
                </Item>
              </Grid>
              <Grid item xs={5.6} xl={4} container sx={{ flexWrap: 'nowrap', marginLeft: '-48px'}}>
                <Grid item>
                  <Item>
                    <Typography
                      color="textPrimary"
                      variant="body3"
                    >
                      +28
                    </Typography>
                  </Item>
                </Grid>
                <Grid item>
                  <Item>
                    <Typography
                      color="textPrimary"
                      variant="body4"
                    >
                    °C
                    </Typography>
                  </Item>
                </Grid>
              </Grid>
            </Grid>
            <Grid container sx={{ flexWrap: 'nowrap' }}>
              <Grid item xs={6.4} xl={8}  >
                <Item>
                  <Typography
                    color="textSecondary"
                    variant="subtitle1"
                    sx={{ mb: 0.5 }}
                    component="p"
                  >
                    750 мм рт. ст.
                  </Typography>
                  <Typography
                    color="textSecondary"
                    variant="subtitle1"
                    component="p"
                  >
                    3,5 м/с
                  </Typography>
                </Item>
              </Grid>
              <Grid item xs={5.6} xl={4}>
                <Item>
                  <Typography
                    color="textSecondary"
                    variant="subtitle1"
                    sx={{ mb: 0.5 }}
                    component="p"
                  >
                    Солнечно
                  </Typography>
                  <Typography
                    color="textSecondary"
                    variant="subtitle1"
                    component="p"
                  >
                    Осадки 7%
                  </Typography>
                </Item>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Link>
  </NextLink>
);
