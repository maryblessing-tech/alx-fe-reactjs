function MainContent() {
  return (
    <main style={{ 
      padding: '20px',
      margin: '20px auto',
      maxWidth: '800px',
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
    }}>
      <p style={{ 
        fontSize: '1.2rem',
        lineHeight: '1.8',
        color: '#333',
        textAlign: 'justify',
        marginBottom: '15px'
      }}>
        I love to visit New York, Paris, and Tokyo.
      </p>
      <p style={{
        fontSize: '1rem',
        color: '#666',
        fontStyle: 'italic'
      }}>
        These cities offer unique cultures, amazing food, and unforgettable experiences.
      </p>
    </main>
  );
}

export default MainContent;