import { NavLink, Outlet } from 'react-router-dom';
import Footer from './Footer';

const DLayout = () => {
  return (
    <>
      <header className="header">
        Dashboard
        <NavLink
          className={({ isActive }) => (isActive ? 'active user' : 'user')}
          to={'/dashboard/profile'}
        >
          <span className="name">John</span>
          <div className="avatar">
            <img
              src="https://static.vecteezy.com/system/resources/previews/002/275/847/large_2x/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg"
              alt="Avatar Logo"
              loading="lazy"
              height={20}
              width={20}
            />
          </div>
        </NavLink>
      </header>
      <Outlet />
      <Footer />
    </>
  );
};
export default DLayout;
