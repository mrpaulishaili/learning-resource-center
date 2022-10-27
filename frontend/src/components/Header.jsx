import { Link } from 'react-router-dom';

const Header = () => {
  let content = (
    <header className="header">
      <div className="top-header container">
        <Link to={'/'} className="logo">
          Learning Resource Center
        </Link>

        <div className="search-box">
          <input type="search" name="" id="" />
          <button>search</button>
        </div>
      </div>

      <div className="container">
        {/* Nav */}
        <nav>
          <div className="">
            <Link to={'/books'}>📔 Books</Link>
            <Link to={'/videos'}>📹 Videos</Link>
            <Link to={'/audios'}>🔉 Audios</Link>
            <Link to={'/articles'}>📰 Articles</Link>
            <Link to={'/wishlists'}>🌠 Reading List</Link>
          </div>

          <div className="">
            <Link className="store" to={'/store'}>
              🛒
              <span>2</span>
            </Link>
            <Link to={'/dashboard'} className="user">
              <div className="avatar"></div>
              <span className="name">John</span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );

  return content;
};
export default Header;
