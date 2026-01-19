function Footer() {
  return (
    <footer style={{ 
      backgroundColor: '#333',
      color: 'white',
      textAlign: 'center',
      padding: '15px 0',
      marginTop: '40px',
      position: 'relative',
      bottom: '0',
      width: '100%'
    }}>
      <p style={{ 
        margin: '0',
        fontSize: '0.9rem'
      }}>
        © 2024 City Lovers
      </p>
      <p style={{
        margin: '5px 0 0 0',
        fontSize: '0.8rem',
        color: '#ccc'
      }}>
        Exploring the world, one city at a time
      </p>
    </footer>
  );
}

export default Footer;