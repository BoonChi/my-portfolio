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
        <meta
          name="description"
          content="I'm a web software developer who is interested in FRONTend & BACKend 💄 REACT(NextJs TS) ✨ NODE(ExpressJS & NestJs TS) Porforlio of a software developer"
        ></meta>
        <title>My portfolio By NextJs</title>
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
