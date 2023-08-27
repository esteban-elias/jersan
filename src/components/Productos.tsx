import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import portadaImg from '/productos/portada.png';
import reciclajeImg from '/productos/reciclaje.jpg';
import equidadGeneroImg from '/productos/equidad-genero.jpg';
import capitalHumanoImg from '/productos/capital-humano.jpg';

const Productos = () => {
  return (
    <>
      <img
        className="w-100 mb-4"
        src={portadaImg}
        alt="Equipo de trabajo"
      />
      <Container>
        <Row className="mb-3">
          <Col>
            <h1 className="text-center">Enfoque</h1>
          </Col>
        </Row>
        <Row className="mb-5">
          <Col className='mb-3 mb-sm-0'>
            <CustomCard title="Reciclaje" imgSrc={reciclajeImg}>
              El reciclaje es esencial para reducir residuos, conservar
              recursos y proteger el medio ambiente, impulsando un
              futuro sostenible.
            </CustomCard>
          </Col>
          <Col>
            <CustomCard
              title="Equidad de género"
              imgSrc={equidadGeneroImg}
            >
              La economía circular en techos en Chile promueve la
              reutilización y el reciclaje, integrando energía
              renovable. Involucrar a mujeres potencia productividad e
              innovación en la empresa.
            </CustomCard>
          </Col>
          <Col>
            <CustomCard
              title="Capital humano"
              imgSrc={capitalHumanoImg}
            >
              La gestión adecuada de capital humano en la construcción
              implica una planificación eficiente, considerando recursos
              y plazos, garantizando seguridad y bienestar del equipo.
              Es esencial para el éxito de los proyectos y la
              productividad del personal.
            </CustomCard>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <h1 className="text-center">Proyectos</h1>
          </Col>
        </Row>
        <ProyectoRow
          title="Calle Pedro Aguirre Cerda"
          imgSrc={reciclajeImg}
          alt="Proyecto Pedro Aguirre Cerda"
        >
          El trabajo en la calle Pedro Aguirre Cerda condujo a un
          desafío de ingeniería mayor. El objetivo era mejorar la
          eficiencia de la recolección de residuos en la calle. Para
          ello, se diseñó un sistema de recolección de residuos que
          consiste en un camión recolector de residuos y un sistema de
          contenedores de residuos.
        </ProyectoRow>
      </Container>
    </>
  );
};

interface LittleCardProps {
  title: string;
  imgSrc: string;
  children: React.ReactNode;
}

const CustomCard = ({ children, title, imgSrc }: LittleCardProps) => {
  return (
    <Card className="mx-5 rounded-0 shadow">
      <Card.Img className="rounded-0" variant="top" src={imgSrc} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{children}</Card.Text>
      </Card.Body>
    </Card>
  );
};

interface ProyectoRowProps {
  title: string;
  imgSrc: string;
  alt: string;
  children: React.ReactNode;
}

const ProyectoRow = ({
  title,
  imgSrc,
  alt,
  children,
}: ProyectoRowProps) => {
  return (
    <Row>
      <Col>
        <Card>
          <Card.Body>
            <Row>
              <Col xs={12} sm={6}>
                <img
                  className="w-100 mb-2 "
                  alt={alt}
                  src={imgSrc}
                />
              </Col>
              <Col
                xs={12}
                sm={6}
                className="d-flex flex-column justify-content-center"
              >
                <Card.Title className="text-center mb-2">
                  {title}
                </Card.Title>
                <Card.Text>{children}</Card.Text>
                <div className="text-center">
                  <Button>Detalles</Button>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Productos;
