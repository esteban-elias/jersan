import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhoneAlt,
} from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contacto from './components/Contacto';
import Header from './components/Header';
import Inicio from './components/Inicio';
import Nosotros from './components/Nosotros';
import Productos from './components/Productos';
import Footer from './components/Footer';

library.add(faEnvelope, faMapMarkerAlt, faPhoneAlt);

const App = () => {
  return (
    <div className="App d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

const NotFound = () => {
  return (
    <div className="text-center mt-5">
      <h1>Página no encontrada</h1>
      <p>La página que estás buscando no existe.</p>
    </div>
  );
};

/**
 * TODO:
 *  - Better images.
 *  - Responsiveness.
 *  - Make everything prettier.
 *  - Inconsistent image dimensions and lack of input handling
 *    of unexpected image dimensions.
 *  - Captcha.
 *  - Align list items of "Contacto.tsx" and apply colors.
 */

export default App;
