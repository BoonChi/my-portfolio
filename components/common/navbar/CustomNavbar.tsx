import Link from 'next/link';
import CustomNavbarStyle from './CustomNavbar.module.scss';
import type { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface INavbarLink {
  icon: IconDefinition;
  link: string;
}

type Props = {
  navItems: Array<INavbarLink>;
};

const CustomNavbar: React.FC<Props> = ({ navItems }) => {
  return (
    <div className={CustomNavbarStyle['custom-navbar']}>
      <nav className="navbar navbar-light">
        {navItems.map((nav, index) => (
          <Link href={nav.link} passHref key={index}>
            <a className="navbar-brand">
              <FontAwesomeIcon
                icon={nav.icon}
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
