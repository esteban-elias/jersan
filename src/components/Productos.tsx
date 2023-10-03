import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import useImagePreloader from '../hooks/useImagePreloader';
import Loading from './Loading';
import PortadaImg from './PortadaImg';
import { truncateText } from './utils/utils';

const Productos = () => {
  const isLoading = useImagePreloader([
    'https://esteban-elias.s3.sa-east-1.amazonaws.com/jersan/public/productos/portada.jpg',
    'https://esteban-elias.s3.sa-east-1.amazonaws.com/jersan/public/productos/reciclaje.jpg',
    'https://esteban-elias.s3.sa-east-1.amazonaws.com/jersan/public/productos/equidad-genero.jpg',
    'https://esteban-elias.s3.sa-east-1.amazonaws.com/jersan/public/productos/capital-humano.jpg',
  ]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <PortadaImg
        src="https://esteban-elias.s3.sa-east-1.amazonaws.com/jersan/public/productos/portada.jpg"
        alt="portada página productos"
        text='Productos'
      />
      <Container>
        <Row className="mb-4 mb-lg-5">
          <Col>
            <h2 className="text-center">Enfoque</h2>
          </Col>
        </Row>
        <Row className="mb-5" xs={1} md={3}>
          <Col className="mb-5 px-5 px-md-2 px-lg-4">
            <EnfoqueCard
              title="Reciclaje"
              imgSrc="https://esteban-elias.s3.sa-east-1.amazonaws.com/jersan/public/productos/reciclaje.jpg"
            >
              El reciclaje es esencial para reducir residuos, conservar
              recursos y proteger el medio ambiente, impulsando un
              futuro sostenible.
            </EnfoqueCard>
          </Col>
          <Col className="mb-5 px-5 px-md-2 px-lg-4">
            <EnfoqueCard
              title="Equidad de género"
              imgSrc="https://esteban-elias.s3.sa-east-1.amazonaws.com/jersan/public/productos/equidad-genero.jpg"
            >
              Involucrar mujeres incrementa productividad e innovación,
              siendo esencial para el crecimiento empresarial
              equitativo.
            </EnfoqueCard>
          </Col>
          <Col className="mb-5 px-5 px-md-2 px-lg-4">
            <EnfoqueCard
              title="Capital humano"
              imgSrc="https://esteban-elias.s3.sa-east-1.amazonaws.com/jersan/public/productos/capital-humano.jpg"
            >
              Una gestión eficaz y bien planificada del capital humano
              asegura la seguridad y bienestar del equipo, potenciando
              así el éxito.
            </EnfoqueCard>
          </Col>
        </Row>
        <Row className="mb-4 mb-lg-5">
          <Col>
            <h2 className="text-center">Proyectos</h2>
          </Col>
        </Row>
        <ProyectoRow
          title="Calle Pedro Aguirre Cerda"
          imgSrc="https://esteban-elias.s3.sa-east-1.amazonaws.com/jersan/public/productos/pedro-aguirre-cerda.jpg"
          alt="Proyecto Pedro Aguirre Cerda"
        >
          El proyecto en la calle Pedro Aguirre Cerda representó un gran
          reto de ingeniería con el objetivo de optimizar la recolección
          de residuos.
        </ProyectoRow>
      </Container>
    </>
  );
};

interface EnfoqueCardProps {
  title: string;
  imgSrc: string;
  children: React.ReactNode;
}

const EnfoqueCard = ({ children, title, imgSrc }: EnfoqueCardProps) => {
  return (
    <Card className="shadow">
      <Card.Img className="mb-3" variant="top" src={imgSrc} />
      <Card.Body>
        <Card.Title className="mb-3">{title}</Card.Title>
        <Card.Text>{children}</Card.Text>
      </Card.Body>
    </Card>
  );
};

interface ProyectoRowProps {
  title: string;
  imgSrc: string;
  alt: string;
  children: string;
}

const ProyectoRow = ({
  title,
  imgSrc,
  alt,
  children,
}: ProyectoRowProps) => {
  return (
    <Row className="mb-5">
      <Col>
        <Card className="card-proyectos">
          <Row xs={1} md={2}>
            <Col className="mb-4 mb-lg-0">
              <Card.Img
                src={imgSrc}
                alt={alt}
                className="card-img-proyectos"
              />
            </Col>
            <Col className="d-flex flex-column justify-content-center">
              <div>
                <Card.Body className="mx-4 mx-lg-5 px-lg-5">
                  <Card.Title className="mb-4 mb-md-3 mb-lg-4">
                    {title}
                  </Card.Title>
                  <Card.Text className="mb-4 mb-md-2 mb-lg-4">
                    {truncateText(children, 22)}
                  </Card.Text>
                  <div className="text-center">
                    <Button>Detalles</Button>
                  </div>
                </Card.Body>
              </div>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
};

export default Productos;
