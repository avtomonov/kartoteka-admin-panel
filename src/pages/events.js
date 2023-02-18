import Head from 'next/head';
import { Box, Container, Grid } from '@mui/material';
import { Structure } from '../components/events/structure';
import { ListActions } from '../components/events/list-actions';
import { Decision } from '../components/events/decision';
import { DashboardLayout } from '../components/dashboard-layout';

const structures = [
  {
      title: 'ФГБУН Институт нанотехнологий микроэлектроники РАН',
      subtitle: 'Идёт процесс ликвидации с 25.10.2019 по 10.10.2020',
      head: {
          title: 'Директор: Сауров Александр Николаевич',
          contractTime: 'Трудовой контракт с 25.03.2017 по 25.03.2023'
      },
      adress: '119991, Москва, Ленинский просп., 32а',
      personnelCount: '123' 
  },
  {
      title: 'ФГБУН Институт нанотехнологий микроэлектроники РАН',
      subtitle: 'Идёт процесс ликвидации с 25.10.2019 по 10.10.2020',
      head: {
        title: 'Директор: Сауров Александр Николаевич',
        contractTime: 'Трудовой контракт с 25.03.2017 по 25.03.2023'
      },
      adress: '119991, Москва, Ленинский просп., 32а',
      personnelCount: '123',
      oldNames: [
          'ФГБУН науки Объединенный институт высоких температур РАН', 
          'ФГБУН Институт проблем управления сложными системами РАН'
      ],
      file: {
        url: '#TODO'
      }
  },
  {
      title: 'ФГБУН Институт нанотехнологий микроэлектроники РАН',
      subtitle: 'Идёт процесс ликвидации с 25.10.2019 по 10.10.2020',
      head: {
        title: 'Директор: Сауров Александр Николаевич',
        contractTime: 'Трудовой контракт с 25.03.2017 по 25.03.2023'
      },
      adress: '119991, Москва, Ленинский просп., 32а',
      personnelCount: '123' 
  }
]

const actions = [
  {
    title: 'Справка проверки',
    href: '#TODO'
  },
  {
    title: 'Акт проверки',
    href: '#TODO'
  },
  {
    title: 'Схема проверки',
    href: '#TODO'
  }
]

const Page = () => (
  <>
    <Head>
      <title>
        Мероприятия | Картотека
      </title>
    </Head>
    <Box component="main">
      <Container 
        maxWidth={false}
        disableGutters={true}
        sx={{
          flexGrow: 1,
          py: {
            xs: 2,
            sm: 4,
            md: 7,
            lg: 0
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
        <Grid
          container
          spacing={3.75}
        >
          <Grid
            item
            md={6}
            xs={12}
          >
            <Structure structures={structures}/>
          </Grid>

          <Grid
            item
            md={6}
            xs={12}
          >
            <ListActions 
              list={actions}
            />
            <Decision/>
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
