import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import useImagePreloader from '../hooks/useImagePreloader';
import Loading from './Loading';
import PortadaImg from './PortadaImg';

const ModeloNegocio = () => {
  const isLoading = useImagePreloader([
    'https://esteban-elias.s3.sa-east-1.amazonaws.com/jersan/public/modelo-negocio/portada.jpg',
    'https://esteban-elias.s3.sa-east-1.amazonaws.com/jersan/public/modelo-negocio/canvas.png',
  ]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <PortadaImg
        src="https://esteban-elias.s3.sa-east-1.amazonaws.com/jersan/public/modelo-negocio/portada.jpg"
        alt="portada página modelo de negocio"
        text="Modelo de Negocio"
      />
      <Container>
        <Row id="row-modelo-canvas">
          <Col>
            <img
              className="w-100 rounded"
              src="https://esteban-elias.s3.sa-east-1.amazonaws.com/jersan/public/modelo-negocio/canvas.png"
              alt="modelo de negocios canvas"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <h2 className="mb-5">Plan de Desarrollo Estratégico</h2>
          </Col>
        </Row>
        <Row className="mb-5">
          <Col>
            <ObjetivosSection />
          </Col>
        </Row>
        <Row className="mb-5">
          <Col>
            <FodaSection />
          </Col>
        </Row>
        <Row>
          <Col>
            <MarketingSection />
          </Col>
        </Row>
      </Container>
    </>
  );
};

const ObjetivosSection = () => (
  <section>
    <h3 className="mb-4">Objetivos Estratégicos</h3>
    <ul className="mb-5">
      <li className="mb-4">
        <h4 className="mb-3">Objetivo Estratégico 1</h4>
        <p>
          <strong>Actualizar</strong> cobertura de intervención a
          mejoramientos de viviendas para personas que ya cuenten con un
          primer hogar.
        </p>
      </li>
      <li className="mb-4">
        <h4 className="mb-3">Objetivo Estratégico 2</h4>
        <p>
          <strong>Consolidar</strong> 20 convenios con alianzas
          estratégicas con donantes, entidades gubernamentales,
          fundaciones y constructoras para asegurar el flujo constante
          de recursos.
        </p>
      </li>
      <li className="mb-4">
        <h4 className="mb-3">Objetivo Estratégico 3</h4>
        <p>
          <strong>Expandir</strong> público objetivo mediante programas
          gubernamentales o programas municipales llegando a cubrir la
          zona centro del pais.
        </p>
      </li>
      <li className="mb-4">
        <h4 className="mb-3">Objetivo Estratégico 4</h4>
        <p>
          <strong>Garantizar</strong> la entrega de a lo menos 40
          viviendas al año las que cuenten con terminaciones y
          habitabilidad necesaria.
        </p>
      </li>
    </ul>

    <h3 className="mb-4">Objetivos Específicos</h3>
    <ul>
      <li className="mb-4">
        <h4 className="mb-3">Objetivo Específico 1</h4>
        <p>
          <strong>Desarrollar</strong> departamento de mejoramiento de
          viviendas en un plazo no mayor a 5 años.
        </p>
      </li>
      <li className="mb-4">
        <h4 className="mb-3">Objetivo Específico 2</h4>
        <p>
          <strong>Afianzar</strong> 4 convenios anuales en un período de
          5 años, dando énfasis a privados.
        </p>
      </li>
      <li className="mb-4">
        <h4 className="mb-3">Objetivo Específico 3</h4>
        <p>
          <strong>Crear</strong> cartera de programas gubernamentales y
          municipales, ademas de fortalecer alianzas con dirigentes
          sociales.
        </p>
      </li>
      <li>
        <h4 className="mb-3">Objetivo Específico 4</h4>
        <p>
          <strong>Asegurar</strong> la entrega de 20 viviendas
          bianuales.
        </p>
      </li>
    </ul>
  </section>
);

const FodaSection = () => (
  <section>
    <h3 className="mb-4">FODA</h3>
    <ul>
      <li className="mb-4">
        <h4 className="mb-3">Fortalezas</h4>
        <ul>
          <li className="mb-2">
            Experiencia y conocimiento en construcción de viviendas de
            emergencia.
          </li>
          <li className="mb-2">Equipos y maquinarias propias.</li>
          <li>Red de proveedores confiables.</li>
        </ul>
      </li>
      <li className="mb-4">
        <h4 className="mb-3">Oportunidades</h4>
        <ul>
          <li className="mb-2">
            Aumento en la demanda de viviendas de emergencia debido a
            desastres naturales.
          </li>
          <li className="mb-2">
            Subvenciones gubernamentales o programas de ayuda para
            proyectos de vivienda de emergencia.
          </li>
          <li>
            Posibles alianzas con ONGs o entidades que necesiten este
            tipo de vivienda.
          </li>
        </ul>
      </li>
      <li className="mb-4">
        <h4 className="mb-3">Debilidades</h4>
        <ul>
          <li className="mb-2">Falta de financiamiento o capital.</li>
          <li className="mb-2">
            Limitaciones en capacidad productiva para grandes proyectos.
          </li>
          <li>Falta de reconocimiento o presencia de marca.</li>
        </ul>
      </li>
      <li className="mb-4">
        <h4 className="mb-3">Amenazas</h4>
        <ul>
          <li className="mb-2">
            Empresas competidoras con mayor capacidad financiera o
            tecnológica.
          </li>
          <li className="mb-2">
            Cambios en regulaciones o leyes que afecten el tipo de
            construcción.
          </li>
          <li>
            Posibles problemas con proveedores o aumento en costos de
            materiales.
          </li>
        </ul>
      </li>
    </ul>
  </section>
);

const MarketingSection = () => (
  <section>
    <h3 className="mb-4">Estrategia de Marketing</h3>
    <ul>
      <li className="mb-2">
        Establecer relaciones de largo plazo con los clientes,
        ofreciendo productos de alta calidad a precios competitivos.
      </li>
      <li className="mb-2">
        Utilizar la publicidad y el marketing digital para promover
        nuestros productos y servicios.
      </li>
      <li>
        Establecer alianzas estratégicas con otros proveedores de techos
        de Chile para asegurar el suministro
      </li>
    </ul>
  </section>
);

export default ModeloNegocio;
