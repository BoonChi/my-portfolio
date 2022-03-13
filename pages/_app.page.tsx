import 'bootstrap/dist/css/bootstrap.min.css';
import 'styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import store from 'components/store';
import CustomNavbar from 'components/common/navbar/CustomNavbar';
import { faHome, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faLinkedin,
  faYoutube,
} from '@fortawesome/fontawesome-free-brands';

const navItemArray = [
  {
    icon: faHome,
    link: '/',
  },
  {
    icon: faInfoCircle,
    link: '/aboutMe',
  },
];

const footerItemsArray = [
  {
    icon: faGithub,
    link: 'https://github.com/BoonChi',
  },
  {
    icon: faLinkedin,
    link: 'https://www.linkedin.com/in/hum-b-1aab89229/',
  },
  {
    icon: faYoutube,
    link: 'https://www.youtube.com/channel/UCC64GC8w0_3E4wC1NPP7qAA',
  },
];

const MyApp = ({ Component, pageProps }: AppProps) => {
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
};

export default MyApp;
