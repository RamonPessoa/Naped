import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { theme } from '@styles/themes';
import { GlobalStyle } from '@styles/global';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='true'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@400;500;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
