import Footer from './Footer';
import Header from './Header';
import { Outlet, ScrollRestoration } from 'react-router-dom';

const RootLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration getKey={(location) => location.pathname} />
    </>
  );
};

export default RootLayout;
