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
      personnelCount: '123', 
      id: '1'
  },
  {
      title: 'ФГБУН Институт нанотехнологий микроэлектроники РАН',
      subtitle: 'Находится в реорганизации с 23.09.2018 по 23.09.2020',
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
      },
      id: '2'
  },
  {
      title: 'ФГБУН Институт нанотехнологий микроэлектроники РАН',
      subtitle: 'Идёт процесс банкротства с 23.09.2018 по 23.09.2020',
      head: {
        title: 'Директор: Сауров Александр Николаевич',
        contractTime: 'Трудовой контракт с 25.03.2017 по 25.03.2023'
      },
      adress: '119991, Москва, Ленинский просп., 32а',
      personnelCount: '123',
      id: '3'
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
    </Box>
  </>
);

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
