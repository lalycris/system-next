import App, { AppProps } from 'next/app';
import { ThemeProvider } from '../contexts/themeContext';

function MyApp({ Component, pageProps }: AppProps ) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;