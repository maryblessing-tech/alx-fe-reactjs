import UserProfile from './UserProfile';

function UserInfo() {
  return (
    <div style={{
      padding: '15px',
      backgroundColor: '#ecf0f1',
      borderRadius: '6px',
      marginBottom: '15px'
    }}>
      <h3 style={{
        color: '#34495e',
        marginTop: '0',
        marginBottom: '15px'
      }}>
        User Information
      </h3>
      <UserProfile />
    </div>
  );
}

export default UserInfo;