import { Box, Card, CardContent, Grid, Typography, Link} from '@mui/material';
import NextLink from 'next/link';

export const Work = (props) => (
  <NextLink
    href="/notes"
    
    passHref
  >
    <Link
      component="a"
      href="/notes"
      underline="none"
    >
      <Card
        sx={{ height: '100%' }}
        {...props}
      >
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
                Работа с полями
              </Typography>
            </Grid>
          </Grid>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              '& img': {
                maxWidth: '100%',
                width: {
                  md: 'calc(100vw / 1440 * 250)',
                  lg: 'calc(100vw / 1440 * 187)'
                },
                height: 'auto'
              },
            }}
          >
            <img
                alt='Поля с уражаем'
                src='/static/images/harvest.svg'
                width='187'
                height='148'
              />
          </Box>
        </CardContent>
      </Card>
    </Link>
  </NextLink>
);
