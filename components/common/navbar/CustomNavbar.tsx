import Link from 'next/link';
import CustomNavbarStyle from './CustomNavbar.module.scss';
import type { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface INavbarLink {
  icon: IconDefinition;
  link: string;
  noTarget?: boolean;
}

type Props = {
  navItems: INavbarLink[];
};

const CustomNavbar = ({ navItems }: Props) => {
  return (
    <div className={CustomNavbarStyle['custom-navbar']}>
      <nav className="navbar navbar-light">
        {navItems.map((nav, index) => (
          <Link href={nav.link} passHref key={index} aria-label={nav.link}>
            <a className="navbar-brand" target={nav.noTarget ? '' : '_blank'}>
              <FontAwesomeIcon
                icon={nav.icon as IconProp}
                style={{ fontSize: '2rem' }}
              ></FontAwesomeIcon>
            </a>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default CustomNavbar;
