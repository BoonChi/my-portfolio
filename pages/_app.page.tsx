import 'bootstrap/dist/css/bootstrap.min.css';
import 'styles/globals.scss';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import store from 'components/store';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>My portfolio By NextJs</title>
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
