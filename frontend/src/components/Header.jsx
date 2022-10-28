import { NavLink } from 'react-router-dom';

const Header = () => {
  let content = (
    <>
      <header className="header desktop">
        <div className="top-header container">
          <NavLink to={'/'} className="logo">
            📚 <span>Learning Resource Center</span>
          </NavLink>

          <div className="search-box">
            <input type="search" name="" id="" />
            <button>🔍 search</button>
          </div>
        </div>

        <div className="container">
          {/* Nav */}
          <nav>
            <div className="">
              <NavLink
                className={({ isActive }) => (isActive ? 'active' : '')}
                to={'/books'}
              >
                📔 <span>Home</span>
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? 'active' : '')}
                to={'/videos'}
              >
                📹 <span>Blog</span>
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? 'active' : '')}
                to={'/audios'}
              >
                🔉 <span>Be a Contributor</span>
              </NavLink>
            </div>

            <div className="">
              <NavLink
                className={({ isActive }) => (isActive ? 'active' : ' store')}
                to={'/store'}
              >
                🛒
                <span>2</span>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'active user' : 'user'
                }
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
          </nav>
        </div>
      </header>
      <header className="mobile header">
        <div className="top-header container">
          <NavLink to={'/'} className="logo">
            📚 <span>Learning Resource Center</span>
          </NavLink>

          <div className="search-box">🔍</div>
        </div>

        <div className="container">
          {/* Nav */}
          <nav>
            <div className="">
              <NavLink
                className={({ isActive }) => (isActive ? 'active' : '')}
                to={'/books'}
              >
                📔 <span>Home</span>
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? 'active' : '')}
                to={'/videos'}
              >
                📹 <span>Blog</span>
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? 'active' : '')}
                to={'/audios'}
              >
                🔉 <span>Be a Contributor</span>
              </NavLink>
            </div>

            <div className="">
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'active store' : 'store'
                }
                to={'/store'}
              >
                🛒
                <span>2</span>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'active user' : 'user'
                }
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
          </nav>
        </div>
      </header>
    </>
  );

  return content;
};
export default Header;
