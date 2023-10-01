import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import useImagePreloader from '../hooks/useImagePreloader';
import Loading from './Loading';

const Inicio = () => {
  const isLoading = useImagePreloader([
    'https://esteban-elias.s3.sa-east-1.amazonaws.com/jersan/public/inicio/portada.png',
  ]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <img
        className="w-100 mb-5"
        src="https://esteban-elias.s3.sa-east-1.amazonaws.com/jersan/public/inicio/portada.png"
        alt="Viviendas de emergencia"
      />
      <Container>
        <Row
          className="d-flex align-items-center"
          style={{ marginBottom: 100 }}
        >
          <Col>
            <Article title="Misión">
              Nuestra misión es edificar viviendas dignas, priorizando
              el confort de quienes viven en vulnerabilidad. Estamos
              comprometidos con otorgar un refugio seguro, marcando una
              diferencia tangible en sus vidas.
            </Article>
          </Col>
          <Col
            xs={{ span: 12, order: 'first' }}
            lg={{ span: 6, order: 'last' }}
          >
            <Img
              src="https://esteban-elias.s3.sa-east-1.amazonaws.com/jersan/public/inicio/mision.jpg"
              alt="Viviendas de emergencia"
            />
          </Col>
        </Row>
        <Row
          className="d-flex align-items-center"
          style={{ marginBottom: 100 }}
        >
          <Col xs={12} lg={6}>
            <Img
              src="https://esteban-elias.s3.sa-east-1.amazonaws.com/jersan/public/inicio/vision.jpg"
              alt="Viviendas de emergencia"
            />
          </Col>
          <Col>
            <Article title="Visión">
              Aspiramos a ser una constructora de reconocido social. A
              través de hogares sostenibles, buscamos no sólo reducir el
              impacto ambiental, sino también reintegrar las personas a
              la sociedad, brindándoles dignidad y bienestar.
            </Article>
          </Col>
        </Row>
        <Row className="d-flex align-items-center">
          <Col>
            <Article title="Propósito">
              Buscamos impulsar una economía circular en la construcción
              mediante alianzas y reutilización de materiales. Como
              agentes de cambio, otorgamos hogares seguros y elevamos la
              calidad de vida con responsabilidad.
            </Article>
          </Col>
          <Col
            xs={{ span: 12, order: 'first' }}
            lg={{ span: 6, order: 'last' }}
          >
            <Img
              src="https://esteban-elias.s3.sa-east-1.amazonaws.com/jersan/public/inicio/proposito.jpg"
              alt="Viviendas de emergencia"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

interface ArticleProps {
  title: string;
  children: React.ReactNode;
}

const Article = ({ title, children }: ArticleProps) => (
  <article className="mt-4 mx-3 mx-lg-5 px-lg-5">
    <h2 className="mb-4 mb-lg-5">{title}</h2>
    <p>{children}</p>
  </article>
);

interface ImgProps {
  src: string;
  alt: string;
}

const Img = ({ src, alt }: ImgProps) => (
  <div className="mx-3">
    <img
      className="w-100 rounded"
      src={src}
      alt={alt}
    />
  </div>
);

export default Inicio;
