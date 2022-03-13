import { faHome, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import CustomNavbar from 'components/common/navbar/CustomNavbar';

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

const MainLayout: React.FC = ({ children }) => {
  return (
    <div className="main-layout">
      <CustomNavbar navItems={navItemArray} />
      {children}
    </div>
  );
};

export default MainLayout;
