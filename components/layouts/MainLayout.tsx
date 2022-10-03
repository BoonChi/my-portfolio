import CustomFooter from 'components/common/footer/CustomFooter';
import CustomNavbar from 'components/common/navbar/CustomNavbar';
import type { ReactNode } from 'react';
import { navItemArray, footerItemArray } from './link-config';

type IMainLayout = {
  children: ReactNode;
  withoutFooter?: boolean;
};

const MainLayout = ({ children, withoutFooter }: IMainLayout) => {
  return (
    <div
      className={withoutFooter ? 'main-layout-without-footer' : 'main-layout'}
    >
      <CustomNavbar navItems={navItemArray} />
      {children}
      <CustomFooter footerItems={footerItemArray} />
    </div>
  );
};

export default MainLayout;
