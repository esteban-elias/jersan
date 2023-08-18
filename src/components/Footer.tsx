import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5 pt-5">
      <Container >
        <Row>
          <Col>
            <h4 className="mb-3">Contacto</h4>
            <ul className="list-unstyled">
              <li>
                <FontAwesomeIcon icon="map-marker-alt" /> Arturo Prat
                269
              </li>
              <li>
                <FontAwesomeIcon icon="phone-alt" />{' '}
                <a href="tel:+56226391111">+56 2 2639 1111</a>
              </li>
              <li>
                <FontAwesomeIcon icon="envelope" />{' '}
                <a href="mailto:contacto@jersan.cl?subject=Contacto%20Jersan">
                  contacto@jersan.cl
                </a>
              </li>
            </ul>
          </Col>
          <Col>
            <h4 className="mb-3">Redes sociales</h4>
            <ul className="list-unstyled">
              <li>
                <a href="https://www.facebook.com/jersan.cl">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/jersan.cl">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/jersan-cl">
                  LinkedIn
                </a>
              </li>
            </ul>
          </Col>
          <Col>
            <h4 className="mb-3">Mapa del sitio</h4>
            <ul className="list-unstyled">
              <li>
                <a href="/">Inicio</a>
              </li>
              <li>
                <a href="/nosotros">Nosotros</a>
              </li>
              <li>
                <a href="/productos">Productos</a>
              </li>
              <li>
                <a href="/contacto">Contacto</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
