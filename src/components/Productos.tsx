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
      <img className="w-100" src={portadaImg} alt="Equipo de trabajo" />
      <Container>
        <Row className='mt-5 mb-4'>
          <Col>
            <h1 className="text-center">Enfoque</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <CustomCard title="Reciclaje" imgSrc={reciclajeImg}>
              El reciclaje
            </CustomCard>
          </Col>
          <Col>
            <CustomCard
              title="Equidad de género"
              imgSrc={equidadGeneroImg}
            >
              La equidad de género
            </CustomCard>
          </Col>
          <Col>
            <CustomCard
              title="Capital humano"
              imgSrc={capitalHumanoImg}
            >
              El capital humano
            </CustomCard>
          </Col>
        </Row>
        <Row className='mt-5 mb-4'>
          <Col>
            <h1 className="text-center">Proyectos</h1>
          </Col>
        </Row>
        <ProyectoRow
          title="Calle Pedro Aguirre Cerda"
          imgSrc={reciclajeImg}
        >
          El trabajo en la calle Pedro Aguirre Cerda condujo a un
          desafío de ingeniería mayor. El objetivo era mejorar la
          eficiencia de la recolección de residuos en la calle. Para
          ello, se diseñó un sistema de recolección de residuos que
          consiste en un camión recolector de residuos y un sistema de
          contenedores de residuos. El camión recolector de residuos es
          ...
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
    <Card className="mx-5 rounded-0">
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
  children: React.ReactNode;
}

const ProyectoRow = ({ title, imgSrc, children }: ProyectoRowProps) => {
  return (
    <Row className="g-0 border">
      <Col className="d-flex align-items-center">
        <Card className="border-0 px-5">
          <Card.Body>
            <Card.Title className="text-center">{title}</Card.Title>
            <Card.Text>{children}</Card.Text>
            <div className="text-center">
              <Button>Detalles</Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <img
          className="w-100"
          alt="Proyecto Pedro Aguirre Cerda"
          src={imgSrc}
        />
      </Col>
    </Row>
  );
};

export default Productos;
