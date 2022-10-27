import { Link } from 'react-router-dom';

const Header = () => {
  let content = (
    <>
      <header className="header desktop">
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
              <Link to={'/books'}>
                📔 <span>Books</span>
              </Link>
              <Link to={'/videos'}>
                📹 <span>Videos</span>
              </Link>
              <Link to={'/audios'}>
                🔉 <span>Audios</span>
              </Link>
              <Link to={'/articles'}>
                📰 <span>Articles</span>
              </Link>
              <Link to={'/wishlists'}>🌠 Reading List</Link>
            </div>

            <div className="">
              <Link className="store" to={'/store'}>
                🛒
                <span>2</span>
              </Link>
              <Link to={'/dashboard'} className="user">
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
              </Link>
            </div>
          </nav>
        </div>
      </header>
      <header className="mobile header">
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
              <Link to={'/books'}>
                📔 <span>Books</span>{' '}
              </Link>
              <Link to={'/videos'}>
                📹 <span>Videos</span>
              </Link>
              <Link to={'/audios'}>
                🔉 <span>Audios</span>
              </Link>
              <Link to={'/articles'}>
                📰 <span>Articles</span>
              </Link>
            </div>

            <div className="">
              <Link className="store" to={'/store'}>
                🛒
                <span>2</span>
              </Link>
              <Link to={'/dashboard'} className="user">
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
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  );

  return content;
};
export default Header;
