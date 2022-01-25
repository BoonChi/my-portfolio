import Link from 'next/link'
import { Container, Nav, Navbar } from 'react-bootstrap'
import styled from 'styled-components'

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
      <Navbar bg='dark' variant='dark' sticky='top'>
        <Container>
          <Navbar.Brand>
            <Link href={'/'}>Home</Link>
          </Navbar.Brand>
          <Nav className='me-auto'>
            {navItems.map((item, index) => (
              <Nav.Link key={index}>
                <Link key={index} href={item.link} passHref>
                  {item.name}
                </Link>
              </Nav.Link>
            ))}
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default CustomNavbar
