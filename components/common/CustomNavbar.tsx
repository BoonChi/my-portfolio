import Link from 'next/link'
import { Container, Nav, Navbar } from 'react-bootstrap'

interface INavbarLink {
  name: string
  link: string
}

type Props = {
  navItems: Array<INavbarLink>
}

const CustomNavbar: React.FC<Props> = ({ navItems }) => {
  return (
    <div>
      <Navbar bg='warning' sticky='top' expand={'lg'}>
        <Container>
          <Navbar.Brand>
            <Link href={'/'}>Home</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              {navItems.map((item, index) => (
                <Link key={index} href={item.link} passHref>
                  {item.name}
                </Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default CustomNavbar
