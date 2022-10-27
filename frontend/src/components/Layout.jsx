import { Outlet } from 'react-router-dom';
import { ScrollToTop } from '../utils';
import AddButton from './AddButton';
import Footer from './Footer';
import Header from './Header';

const Layout = () => {
  let content = (
    <ScrollToTop>
      <Header />
      <Outlet />
      <Footer />
    </ScrollToTop>
  );
  return content;
};
export default Layout;
