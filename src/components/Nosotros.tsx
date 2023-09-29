import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import useImagePreloader from '../hooks/useImagePreloader';
import Loading from './Loading';

const enum Item {
  Valores = 'valores',
  CoreBusiness = 'core-business',
  VentajasCompetitivas = 'ventajas-competitivas',
}

const Nosotros = () => {
  const [activeItem, setActiveItem] = useState(Item.Valores);

  const isLoading = useImagePreloader([
    'https://esteban-elias.s3.sa-east-1.amazonaws.com/jersan/public/nosotros/portada.png',
  ]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <img
        className="w-100 mb-4"
        src="https://esteban-elias.s3.sa-east-1.amazonaws.com/jersan/public/nosotros/portada.png"
        alt="Equipo de trabajo"
      />
      <Container>
        <Row>
          <Col lg={4} className="d-flex justify-content-center mb-3">
            <ListGroup variant="flush" className="w-50 mb-3">
              <ListItem
                item={Item.Valores}
                activeItem={activeItem}
                setActiveItem={setActiveItem}
              >
                Valores
              </ListItem>
              <ListItem
                item={Item.CoreBusiness}
                activeItem={activeItem}
                setActiveItem={setActiveItem}
              >
                Core Business
              </ListItem>
              <ListItem
                item={Item.VentajasCompetitivas}
                activeItem={activeItem}
                setActiveItem={setActiveItem}
              >
                Ventajas Competitivas
              </ListItem>
            </ListGroup>
          </Col>
          <Col>
            {activeItem === Item.Valores && <ValoresArticle />}
            {activeItem === Item.CoreBusiness && (
              <CoreBusinessArticle />
            )}
            {activeItem === Item.VentajasCompetitivas && (
              <VentajasCompetitivasArticle />
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

interface ListItemProps {
  children: React.ReactNode;
  item: Item;
  activeItem: Item;
  setActiveItem: (item: Item) => void;
}

const ListItem = ({
  children,
  item,
  activeItem,
  setActiveItem,
}: ListItemProps) => {
  return (
    <ListGroup.Item
      as="button"
      action
      style={item === activeItem ? activeItemStyle : {}}
      onClick={() => {
        setActiveItem(item);
      }}
    >
      {children}
    </ListGroup.Item>
  );
};

const ValoresArticle = () => (
  <article>
    <h2 className="mb-3">Valores</h2>
    <p>
      En el corazón de nuestra constructora de viviendas de emergencia
      reside una misión profunda: ayudar a las personas sin hogar. No
      solo construimos viviendas; construimos esperanza y dignidad. Nos
      regimos por principios éticos, sociales y sólidos que se reflejan
      en cada ladrillo que colocamos y en cada mano que estrechamos.
    </p>
    <p>
      Nuestra <strong>empatía</strong> nos impulsa a entender y sentir
      profundamente las necesidades de los desplazados. El{' '}
      <strong>compromiso</strong> nos mueve a actuar con pasión y
      dedicación. Valoramos la <strong>integridad</strong> en cada paso,
      asegurando transparencia y honestidad. La{' '}
      <strong>excelencia</strong> es nuestra norma, aspirando a superar
      las expectativas en cada proyecto.
    </p>
    <p>
      Abrazamos la <strong>sostenibilidad</strong>, garantizando que
      nuestras soluciones no solo sirvan para el presente sino también
      para el futuro. La <strong>colaboración</strong> es fundamental en
      nuestro enfoque, pues creemos que juntos construimos más fuerte.
      Y, en todo lo que hacemos, prevalece un sentido de{' '}
      <strong>responsabilidad</strong>, reconociendo el impacto y la
      importancia de nuestro trabajo en las vidas de aquellos que
      servimos.
    </p>
  </article>
);

const CoreBusinessArticle = () => (
  <article>
    <h2 className="mb-3">Core Business</h2>
    <p>
      En el epicentro de nuestra misión se encuentra una promesa doble:{' '}
      <strong>Construir y Conservar</strong>. Creamos estructuras que se
      convierten en refugios, pero lo hacemos con un profundo respeto y
      consideración por el mundo que nos rodea.
    </p>
    <p>
      <strong>Construimos tu casa</strong> con innovación y precisión,
      garantizando que cada edificación se erige sin causar daño a
      nuestro precioso medio ambiente. Y mientras nosotros ponemos las
      bases firmes,{' '}
      <strong>ustedes transforman estos espacios en hogares</strong>{' '}
      llenos de recuerdos, amor y calor.
    </p>
    <p>
      Porque para nosotros, no se trata solo de levantar paredes, sino
      de <strong>impulsar un futuro sostenible</strong> donde las
      viviendas y la naturaleza coexistan en armonía.
    </p>
  </article>
);

const VentajasCompetitivasArticle = () => (
  <article>
    <h2 className="mb-3">Ventajas Competitivas</h2>
    <p>
      Nos distinguimos en el mercado gracias a la{' '}
      <strong>rica experiencia y conocimiento especializado</strong> de
      nuestro equipo. Contamos con profesionales de alto calibre,
      dotados de vasta experiencia y habilidades técnicas.
    </p>
    <p>
      En cuanto a tecnología, nos{' '}
      <strong>mantenemos a la vanguardia</strong>, empleando equipos
      modernos que elevan la productividad y calidad de nuestros
      proyectos.
    </p>
    <p>
      Forjamos{' '}
      <strong>relaciones sólidas con contratistas de confianza</strong>,
      asegurando una entrega puntual y a la altura de las expectativas.
    </p>
    <p>
      Nuestro compromiso con la sostenibilidad se refleja en{' '}
      <strong>
        prácticas constructivas respetuosas con el medio ambiente
      </strong>
      , un atributo esencial que resuena con clientes conscientes de la
      responsabilidad ambiental.
    </p>
  </article>
);

const activeItemStyle = {
  backgroundColor: '#333C4A',
  color: '#FFFFFF',
};

export default Nosotros;
