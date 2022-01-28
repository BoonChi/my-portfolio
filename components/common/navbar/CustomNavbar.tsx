import { Container, Nav, Navbar } from "react-bootstrap";
import Link from "next/link";
import CustomNavbarStyle from "./CustomNavbar.module.scss";

interface INavbarLink {
  name: string;
  link: string;
}

type Props = {
  navItems: Array<INavbarLink>;
};

const CustomNavbar: React.FC<Props> = ({ navItems }) => {
  return (
    <div>
      <nav className="navbar navbar-light">
        <Link href={"/"} passHref>
          <a className="navbar-brand">Portfolio</a>
        </Link>
      </nav>
    </div>
  );
};

export default CustomNavbar;
