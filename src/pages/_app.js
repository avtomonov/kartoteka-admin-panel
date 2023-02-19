import Head from 'next/head';
import '../styles/common.css';

import { CacheProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { createEmotionCache } from '../utils/create-emotion-cache';
import { registerChartJs } from '../utils/register-chart-js';
import { theme } from '../theme';
import 'react-perfect-scrollbar/dist/css/styles.css';

registerChartJs();

const clientSideEmotionCache = createEmotionCache();

const App = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>
          Kartoteka
        </title>
        <meta
          name="viewport"
          content="initial-scale=1, width=device-width"
        />
      </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
              {
                getLayout(<Component {...pageProps} />)
              }
        </ThemeProvider>
    </CacheProvider>
  );
};

export default App;
