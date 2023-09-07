import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const ModeloNegocio = () => {
  return (
    <>
      <img
        className="w-100 mb-4"
        src="https://esteban-elias.s3.sa-east-1.amazonaws.com/jersan/public/modelo-negocio/portada.png"
        alt="Equipo de trabajo"
      />
      <Container>
        <Row className="mb-4">
          <Col>
            <img
              className="w-100"
              src="https://esteban-elias.s3.sa-east-1.amazonaws.com/jersan/public/modelo-negocio/canvas.png"
              alt="modelo-de-negocios-canvas"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <ObjetivosSection />
          </Col>
        </Row>
      </Container>
    </>
  );
};

const ObjetivosSection = () => (
  <section>
    <h3>Objetivos Estratégicos (OE)</h3>
    <ul>
      <li>
        <h4>OE1</h4>
        <p>
          <strong>Diseñar</strong> y <strong>componer</strong> viviendas
          de emergencia y viviendas sociales innovadoras y sostenibles
          que satisfagan las necesidades de personas en busca de una
          solución habitacinal rápida.
        </p>
      </li>
      <li>
        <h4>OE2</h4>
        <p>
          <strong>Establecer</strong> y <strong>fortalecer</strong>{' '}
          alianzas estratégicas con donantes, entidades gubernamentales,
          fundaciones y constructoras para asegurar el flujo constante
          de recursos.
        </p>
      </li>
      <li>
        <h4>OE3</h4>
        <p>
          <strong>Promover</strong> y <strong>expandir</strong> la
          visibilidad de la empresa a través de redes sociales y canales
          estatales para maximizar el impacto en los segmentos de
          clientes identificados.
        </p>
      </li>
      <li>
        <h4>OE4</h4>
        <p>
          <strong>Garantizar</strong> un proceso de construcción y
          entrega eficiente y de alta calidad a través de una continua
          formación y actualización del capital humano.
        </p>
      </li>
    </ul>

    <h3>Objetivos Específicos (basados en OE)</h3>
    <ul>
      <li>
        <h4>Para OE1</h4>
        <ol>
          <li>
            <p>
              <strong>Enumerar</strong> e <strong>identificar</strong>{' '}
              las características esenciales que las viviendas de
              emergencia y viviendas sociales deben poseer.
            </p>
          </li>
          <li>
            <p>
              <strong>Demostrar</strong> la rapidez en la construcción
              de prototipos de viviendas en situaciones controladas.
            </p>
          </li>
        </ol>
      </li>
      <li>
        <h4>Para OE2</h4>
        <ol>
          <li>
            <p>
              <strong>Describir</strong> y <strong>explicar</strong> a
              potenciales donantes y aliados la importancia y beneficios
              de colaborar con nuestra empresa.
            </p>
          </li>
          <li>
            <p>
              <strong>Diseñar</strong> propuestas de colaboración
              personalizadas para diferentes tipos de aliados
              (gubernamentales, constructoras, fundaciones, etc.).
            </p>
          </li>
        </ol>
      </li>
      <li>
        <h4>Para OE3</h4>
        <ol>
          <li>
            <p>
              <strong>Crear</strong> y <strong>publicar</strong>{' '}
              contenido de calidad en redes sociales que muestre el
              valor y la eficacia de las viviendas de emergencia.
            </p>
          </li>
          <li>
            <p>
              <strong>Interpretar</strong> las métricas y
              retroalimentaciones de los seguidores en redes sociales
              para mejorar la propuesta de valor y la comunicación.
            </p>
          </li>
        </ol>
      </li>
      <li>
        <h4>Para OE4</h4>
        <ol>
          <li>
            <p>
              <strong>Implementar</strong> programas de formación
              continua para el personal en técnicas de construcción
              rápida y sostenible.
            </p>
          </li>
          <li>
            <p>
              <strong>Evaluar</strong> y <strong>priorizar</strong> las
              áreas de mejora en el proceso de construcción a partir de
              retroalimentaciones de los clientes.
            </p>
          </li>
        </ol>
      </li>
    </ul>
  </section>
);

export default ModeloNegocio;
