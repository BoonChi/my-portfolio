import 'bootstrap/dist/css/bootstrap.min.css';
import 'styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import store from '../components/store';
import CustomNavbar from 'components/common/navbar/CustomNavbar';

const navItemArray = [
  {
    link: '/aboutMe',
    name: 'About',
  },
  {
    link: '/todo',
    name: 'Todo',
  },
  {
    link: '/pomodoro',
    name: 'Pomodoro',
  },
];

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5.0, minimum-scale=0.86"
        />
      </Head>
      <CustomNavbar navItems={navItemArray} />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
