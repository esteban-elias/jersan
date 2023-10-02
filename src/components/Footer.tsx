import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5 pt-5">
      <Container>
        <Row>
          <Col className="d-flex flex-column align-items-center">
            <h4>Contacto</h4>
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
          <Col className="d-flex flex-column align-items-center">
            <h4>Redes sociales</h4>
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
          <Col className="d-flex flex-column align-items-center">
            <h4>Información</h4>
            <ul className="list-unstyled">
              <li>UF: $30.000</li>
              <li>Dólar: $864</li>
              <li>
                <span>Jersan© 2023 Todos los derechos reservados.</span>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
