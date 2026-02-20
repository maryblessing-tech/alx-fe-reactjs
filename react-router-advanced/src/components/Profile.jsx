import { Link, Outlet } from 'react-router-dom';

function Profile() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Profile Page</h1>
      <nav style={{ marginBottom: '20px', padding: '10px', backgroundColor: '#f0f0f0' }}>
        <Link to="/profile" style={{ marginRight: '15px' }}>Profile Home</Link>
        <Link to="/profile/details" style={{ marginRight: '15px' }}>Profile Details</Link>
        <Link to="/profile/settings">Profile Settings</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default Profile;