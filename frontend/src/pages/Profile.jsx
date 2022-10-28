import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <main className="container">
      <h3 style={{ marginBottom: '1rem' }}>Profile</h3>
      <div className="profile-card">
        <div className="profile-image">
          <img
            src="https://static.vecteezy.com/system/resources/previews/002/275/847/large_2x/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg"
            alt="Profile Avatar"
            loading="lazy"
          />
        </div>

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
