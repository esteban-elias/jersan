import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import portadaImg from '/inicio/portada.png';
import misionImg from '/inicio/mision.jpg';
import visionImg from '/inicio/vision.jpg';
import propositoImg from '/inicio/proposito.jpg';

const Inicio = () => {
  return (
    <>
      <img
        className="w-100 mb-4"
        src={portadaImg}
        alt="Viviendas de emergencia"
      />
      <Container>
        <Row className="d-flex align-items-center mb-4">
          <Col>
            <Article title="Misión">
              Nuestra misión es edificar viviendas dignas, priorizando
              el confort de quienes viven en vulnerabilidad. Estamos
              comprometidos con otorgar un refugio seguro, marcando una
              diferencia tangible en sus vidas.
            </Article>
          </Col>
          <Col>
            <Img src={misionImg} alt="Viviendas de emergencia" />
          </Col>
        </Row>
        <Row className="d-flex align-items-center mb-4">
          <Col>
            <Img src={visionImg} alt="Viviendas de emergencia" />
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
          <Col>
            <Img src={propositoImg} alt="Viviendas de emergencia" />
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
  <article>
    <h2 className="text-center">{title}</h2>
    <p className="px-lg-5">{children}</p>
  </article>
);

interface ImgProps {
  src: string;
  alt: string;
}

const Img = ({ src, alt }: ImgProps) => (
  <img
    className="w-100 rounded shadow"
    src={src}
    alt={alt}
    style={{ height: '300px', objectFit: 'cover' }}
  />
);

export default Inicio;