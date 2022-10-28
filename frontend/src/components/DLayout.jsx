import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const DLayout = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};
export default DLayout;
