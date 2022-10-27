import { Link } from 'react-router-dom';

const Header = () => {
  let content = (
    <header className="header">
      <div className="container">
        <Link to={'/'} className="logo">
          <span>Learning</span>
          <span>Resource</span> <span>Center</span>
        </Link>

        {/* Nav */}
        <nav>
          <Link to={'/books'}>📔 Books</Link>
          <Link to={'/videos'}>📹 Videos</Link>
          <Link to={'/audios'}>🔉 Audios</Link>
          <Link to={'/articles'}>📰 Articles</Link>
          <Link to={'/wishlists'}>🌠 Reading List</Link>
          <Link to={'/dashboard'} className="user">
            <div className="avatar"></div>
            <span className="name">John</span>
          </Link>
          <Link className="store" to={'/store'}>
            🛒
            <span>2</span>
          </Link>
        </nav>
      </div>
    </header>
  );

  return content;
};
export default Header;
