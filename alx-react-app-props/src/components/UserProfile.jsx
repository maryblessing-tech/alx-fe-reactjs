import { useContext } from 'react';
import UserContext from '../UserContext';

function UserProfile() {
  // Consume the UserContext using useContext hook
  const userData = useContext(UserContext);

  return (
    <div style={{
      backgroundColor: 'white',
      padding: '20px',
      borderRadius: '6px',
      border: '1px solid #bdc3c7'
    }}>
      <p style={{
        fontSize: '1.1rem',
        marginBottom: '10px',
        color: '#2c3e50'
      }}>
        <strong>Name:</strong> {userData.name}
      </p>
      <p style={{
        fontSize: '1.1rem',
        marginBottom: '0',
        color: '#2c3e50'
      }}>
        <strong>Email:</strong> {userData.email}
      </p>
    </div>
  );
}

export default UserProfile;