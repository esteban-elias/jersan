import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useLocation } from 'react-router-dom';
import jersanLogo from './../assets/jersan.svg';

const Header = () => {
  const location = useLocation();
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      sticky="top"
      className='shadow'
      style={{ backgroundColor: '#FFFFFF', padding: '0px' }}
    >
      <Container fluid>
        <Navbar.Brand as={Link} to="/" style={{ padding: '0px' }}>
          <img
            alt="Logo de Jersan"
            src={jersanLogo}
            width="80px"
            height="80px"
            style={{ marginLeft: '50px' }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav
            variant="underline"
            style={{ marginLeft: 'auto', marginRight: '50px' }}
            activeKey={location.pathname}
          >
            <NavItem to="/">INICIO</NavItem>
            <NavItem to="/nosotros">QUIÉNES SOMOS</NavItem>
            <NavItem to="/productos">NUESTROS PRODUCTOS</NavItem>
            <NavItem to="/contacto">CONTÁCTANOS</NavItem>
            {/* <Nav.Link eventKey="/" as={Link} to="/">
              INICIO
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

interface NavItemProps {
  to: string;
  children: React.ReactNode;
}

const NavItem = ({ to, children }: NavItemProps) => {
  return (
    <Nav.Link
      as={Link}
      to={to}
      eventKey={to}
      style={{ color: '#333C4A' }}
    >
      {children}
    </Nav.Link>
  );
};

export default Header;
