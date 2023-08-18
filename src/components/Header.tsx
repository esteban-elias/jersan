import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useLocation } from 'react-router-dom';
import jersanLogo from './../assets/jersan.svg';

const Header = () => {
  return (
    <Navbar
      expand="lg"
      sticky="top"
      collapseOnSelect
      style={{ backgroundColor: '#FFFFFF', padding: '0px' }}
    >
      <Navbar.Brand as={Link} to="/" style={{ padding: '0px' }}>
        <img
          alt="Logo de Jersan"
          src={jersanLogo}
          width="80px"
          height="80px"
          style={{ marginLeft: '50px' }}
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar" />
      <Navbar.Collapse
        id="navbar"
        style={{ display: 'flex', flexDirection: 'row' }}
      >
        <Nav
          variant="underline"
          style={{ marginLeft: 'auto', marginRight: '50px' }}
        >
          <NavItem to="/">INICIO</NavItem>
          <NavItem to="/nosotros">QUIÉNES SOMOS</NavItem>
          <NavItem to="/productos">NUESTROS PRODUCTOS</NavItem>
          <NavItem to="/contacto">CONTÁCTANOS</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

interface NavItemProps {
  to: string;
  children: React.ReactNode;
}

const NavItem = ({ to, children }: NavItemProps) => {
  const location = useLocation();
  return (
    <Nav.Link
      as={Link}
      to={to}
      active={location.pathname === to}
      style={{ color: '#333C4A' }}
    >
      {children}
    </Nav.Link>
  );
};

export default Header;
