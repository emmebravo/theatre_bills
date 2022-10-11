import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';

const Layout = () => {
  return (
    <>
      <Navigation />
      <main className='container mx-auto my-10'>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
