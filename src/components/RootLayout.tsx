import Footer from './Footer';
import Header from './Header';
import { Outlet, ScrollRestoration } from 'react-router-dom';

const RootLayout = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-grow-1 d-flex flex-column">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration getKey={(location) => location.pathname} />
    </div>
  );
};


export default RootLayout;
