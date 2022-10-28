import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  let content = (
    <>
      <header className="header ">
        <div className="top-header container">
          <div className="flex">
            <FontAwesomeIcon
              icon={faBars}
              className="menu-icon"
              onClick={() => setMenuOpen(!menuOpen)}
            />
            <NavLink to={'/'} className="logo">
              📚 <span>Learning Resource Center</span>
            </NavLink>
          </div>

          <nav className={menuOpen ? 'active' : ''}>
            <div className="">
              <NavLink
                className={({ isActive }) => (isActive ? 'active' : '')}
                to={'/books'}
                onClick={() => setMenuOpen(!menuOpen)}
              >
                📔 <span>Home</span>
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? 'active' : '')}
                to={'/videos'}
                onClick={() => setMenuOpen(!menuOpen)}
              >
                📹 <span>Blog</span>
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? 'active' : '')}
                to={'/audios'}
                onClick={() => setMenuOpen(!menuOpen)}
              >
                🔉 <span>Be a Contributor</span>
              </NavLink>
            </div>

            <div className="">
              <div
                className="search-box"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <input type="search" name="" id="" />
                <button>🔍 search</button>
              </div>
            </div>
          </nav>

          <div className="flex">
            <NavLink
              className={({ isActive }) =>
                isActive ? 'active store' : ' store'
              }
              to={'/store'}
              onClick
            >
              🛒
              <span>2</span>
            </NavLink>

            <NavLink
              className={({ isActive }) => (isActive ? 'active user' : 'user')}
              to={'/dashboard'}
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
          </div>
        </div>
      </header>
    </>
  );

  return content;
};
export default Header;
