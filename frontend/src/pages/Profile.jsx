import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <main className="container">
      <div className="profile-card">
        <div className="profile-image"></div>

        <div className="profile-name">Profile name</div>

        <div className="profile-status">🚫</div>
      </div>

      <button>
        <Link to="/">Logout</Link>
      </button>
    </main>
  );
};
export default Profile;
