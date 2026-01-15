function UserProfile(props) {
  return (
    <div style={{ 
      border: '1px solid gray', 
      borderRadius: '8px',
      padding: '20px', 
      margin: '15px',
      backgroundColor: '#f9f9f9',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ 
        color: 'blue',
        marginTop: '0',
        marginBottom: '10px',
        fontSize: '1.8rem'
      }}>
        {props.name}
      </h2>
      <p style={{ 
        fontSize: '1.1rem',
        marginBottom: '8px'
      }}>
        Age: <span style={{ 
          fontWeight: 'bold',
          color: '#333'
        }}>
          {props.age}
        </span>
      </p>
      <p style={{ 
        fontSize: '1rem',
        lineHeight: '1.6',
        color: '#555'
      }}>
        Bio: {props.bio}
      </p>
    </div>
  );
}

export default UserProfile;