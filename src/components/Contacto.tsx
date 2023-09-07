import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Map, Marker } from 'pigeon-maps';

const Contacto = () => {
  return (
    <>
      <img
        className="w-100 mb-4"
        src="https://esteban-elias.s3.sa-east-1.amazonaws.com/jersan/public/contacto/portada.png"
        alt="Equipo de trabajo"
      />
      <Container>
        <Row className="mb-4">
          <Col>
            <h1 className="text-center">Contacto</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form>
              <Form.Group className="mb-3" controlId="formularioNombre">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nombre"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formularioCorreo">
                <Form.Label>Correo electrónico</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Correo electrónico"
                  required
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="formularioTelefono"
              >
                <Form.Label>Teléfono</Form.Label>
                <Form.Control type="text" placeholder="Teléfono" />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="formularioMensaje"
              >
                <Form.Label>Mensaje</Form.Label>
                <Form.Control as="textarea" rows={3} required />
              </Form.Group>

              <div className="text-center">
                <Button type="submit"> Enviar</Button>
              </div>
            </Form>
          </Col>
          <Col>
            <Container>
              <Row>
                <Col>
                  <Map
                    height={300}
                    defaultCenter={[
                      -33.44845757309831, -70.64961138614805,
                    ]}
                    defaultZoom={15}
                  >
                    <Marker
                      width={50}
                      anchor={[-33.44845757309831, -70.64961138614805]}
                    />
                  </Map>
                </Col>
              </Row>
              <Row>
                <Col className="d-flex justify-content-center mt-3">
                  <ul className="list-unstyled">
                    <li>
                      <FontAwesomeIcon icon="map-marker-alt" /> Arturo
                      Prat 269
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
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contacto;
