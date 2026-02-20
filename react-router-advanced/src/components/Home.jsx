import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Home Page</h1>
      <p>Welcome to the React Router Advanced Demo!</p>
      <nav>
        <Link to="/profile" style={{ marginRight: '15px' }}>Go to Profile</Link>
        <Link to="/blog/1" style={{ marginRight: '15px' }}>Blog Post 1</Link>
        <Link to="/blog/2">Blog Post 2</Link>
      </nav>
    </div>
  );
}

export default Home;