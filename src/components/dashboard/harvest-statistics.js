import { Box, Card, CardContent, Grid, Typography, Link } from '@mui/material';
import NextLink from 'next/link';


export const HarvestStatistics = (props) => (
  <NextLink
    href="/statistics"
    passHref
  >
    <Link
      component="a"
      href="/statistics"
      underline="none"
    >
      <Card {...props} >
        <CardContent>
          <Grid
            container
            spacing={3}
            sx={{ justifyContent: 'space-between' }}
          >
            <Grid item>
              <Typography
                color="textPrimary"
                gutterBottom
                variant="overline"
              >
                Статистика урожая
              </Typography>
              <Typography
                color="textPrimary"
                variant="subtitle1"
                sx={{
                  mt: '7px'
                }}
                component="p"
              >
                Поволжье
              </Typography>
            </Grid>
          </Grid>
          <Box
            sx={{
              justifyContent: 'flex-end',
              display: 'flex',
              mt: '-20px',
              '& img': {
                width: {
                  md: 'calc(100vw / 1440 * 384)',
                  lg: 'calc(100vw / 1440 * 284)'
                },
                height: 'auto',
                maxWidth: '100%'
              },
            }}
          >
            <img
              alt='Карта поволжья'
              src='/static/images/volga-area.svg'
              height='155'
              width='284'
            />
          </Box>
        </CardContent>
      </Card>
    </Link>
  </NextLink>
);
