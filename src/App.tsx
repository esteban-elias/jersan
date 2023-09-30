import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhoneAlt,
} from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import './App.css';
import Contacto from './components/Contacto';
import Inicio from './components/Inicio';
import Nosotros from './components/Nosotros';
import Productos from './components/Productos';
import ModeloNegocio from './components/ModeloNegocio';
import NotFound from './components/NotFound';
import RootLayout from './components/RootLayout';

library.add(faEnvelope, faMapMarkerAlt, faPhoneAlt);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Inicio />} />
      <Route path="nosotros" element={<Nosotros />} />
      <Route path="productos" element={<Productos />} />
      <Route path="contacto" element={<Contacto />} />
      <Route path="modelo-negocio" element={<ModeloNegocio />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
