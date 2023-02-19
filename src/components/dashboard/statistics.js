import { Pie } from 'react-chartjs-2';
import { Box, Card, Grid, CardContent, CardHeader, useTheme, Button } from '@mui/material';
import { ArrowDown as ArrowDownIcon } from '../../icons/arrow-down';
import { ListSquare } from '../list-square';

export const Statistics = (props) => {
  const theme = useTheme();

  const listItems = [
    {
      title: 'Урожай 2020',
      subtitles: ['15 150 000 тонн', '120 областей'],
      indicator: 1
    },
    {
      title: 'Урожай 2019',
      subtitles: ['102 650 980 тонн', '250 областей'],
      indicator: 2
    }
  ]

  const data = {
    datasets: [
      {
        data: [35, 65],
        backgroundColor: ['#43E9FF', '#656CFF'],
        borderWidth: 0,
      }
    ],
    labels: ['Урожай 2020', 'Урожай 2019']
  };

  const options = {
    cutoutPercentage: 0,
    plugins: {
      animation: true,
        legend: {
        display: false
      }
    },
    responsive: true,
  };

  return (
    <Card {...props}>      
        <CardContent>
          <CardHeader
            component="h2"
            sx={{
              marginBottom: '12px',
              paddingRight: '120px',

              '.MuiCardHeader-action':{
                top: '20px',
                position: 'absolute',
                right: '20px',
              }
            }}
            action={(
              <Button
                endIcon={<ArrowDownIcon fontSize="small" />}
                size="large"
                color="secondary"
                sx={{
                  '& .MuiSvgIcon-root': {
                    fontSize: '21px',
                    transform: 'translate(-2px, 2px)'
                  },
                }}
              >
                По годам
              </Button>
            )}
            title="Статистика пшена на полях ЦАО"
          />

          <Grid container spacing={2}>
            <Grid item xs={12} md={5.4}>
              <ListSquare items={listItems} />
            </Grid>

            <Grid item xs={12} md={5.3176} >
              <Box
                sx={{
                  height: '100%',
                  width: '100%',
                  position: 'relative',
                  top: {
                    x: '-12px',
                    lx: 0
                  }
                }}
              >
                <Pie
                  data={data}
                  options={options}
                />
              </Box>
            </Grid>
          </Grid>

        </CardContent>
    </Card>
  );
};
