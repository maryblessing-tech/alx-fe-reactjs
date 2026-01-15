import UserInfo from './UserInfo';

function ProfilePage() {
  return (
    <div style={{
      maxWidth: '600px',
      margin: '0 auto',
      backgroundColor: 'white',
      borderRadius: '8px',
      padding: '20px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{
        color: '#2c3e50',
        borderBottom: '2px solid #3498db',
        paddingBottom: '10px',
        marginBottom: '20px'
      }}>
        Profile Page
      </h2>
      <UserInfo />
    </div>
  );
}

export default ProfilePage;