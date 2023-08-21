import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import portadaImg from '/nosotros/portada.png';

const enum Item {
  Valores = 'valores',
  CoreBusiness = 'core-business',
  VentajasCompetitivas = 'ventajas-competitivas',
}

const Nosotros = () => {
  const [activeItem, setActiveItem] = useState(Item.Valores);

  return (
    <>
      <img className="w-100 mb-4" src={portadaImg} alt="Equipo de trabajo" />
      <Container>
        <Row>
          <Col sm={4}>
            <ListGroup variant="flush" className="w-50">
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
          <Col sm={8}>
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
      <strong>Desarrollo de Software:</strong> Desarrollamos software a
      la medida de las necesidades de nuestros clientes.
    </p>
  </article>
);

const CoreBusinessArticle = () => (
  <article>
    <h2 className="mb-3">Core Business</h2>
    <p>
      <strong>Desarrollo de Software:</strong> Desarrollamos software a
      la medida de las necesidades de nuestros clientes.
    </p>
  </article>
);

const VentajasCompetitivasArticle = () => (
  <article>
    <h2 className="mb-3">Ventajas Competitivas</h2>
    <p>
      <strong>Desarrollo de Software:</strong> Desarrollamos software a
      la medida de las necesidades de nuestros clientes.
    </p>
  </article>
);

const activeItemStyle = {
  backgroundColor: '#333C4A',
  color: '#FFFFFF',
};

export default Nosotros;
