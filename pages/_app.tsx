import type { AppProps } from 'next/app';
import '../src/styles/globals.css';
import theme from '../theme';
import { Analytics } from '@vercel/analytics/react';
import Head from 'next/head';
import { AppCacheProvider } from '@mui/material-nextjs/v16-pagesRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';


export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;
  return (
    <AppCacheProvider {...props} >
      {/* <GlobalStyles styles="@layer theme, base, mui, components, utilities;" /> */}
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme} >
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline  />
        <Component {...pageProps} />
        <Analytics />
      </ThemeProvider>
    </AppCacheProvider>
  );
}