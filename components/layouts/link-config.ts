import {
  faHome,
  faInfoCircle,
  IconDefinition as IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import {
  faLinkedin,
  faGithub,
  IconDefinition as IFreeBrandIconDefinition,
} from '@fortawesome/free-brands-svg-icons';
import { INavbarLink } from 'components/common/navbar/CustomNavbar';
import { ISocialLink } from 'components/common/footer/CustomFooter';
export const navItemArray: INavbarLink[] = [
  {
    icon: faHome,
    link: '/',
    noTarget: true,
  },
  {
    icon: faLinkedin as IconDefinition,
    link: 'https://www.linkedin.com/in/hum-b-1aab89229/',
  },
];

export const footerItemArray: ISocialLink[] = [
  {
    icon: faLinkedin,
    link: 'https://www.linkedin.com/in/hum-b-1aab89229/',
  },
  {
    icon: faGithub,
    link: 'https://github.com/BoonChi',
  },
  {
    icon: faInfoCircle as IFreeBrandIconDefinition,
    link: '/aboutMe',
  },
];
