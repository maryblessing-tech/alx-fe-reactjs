import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import ProfileDetails from './components/ProfileDetails';
import ProfileSettings from './components/ProfileSettings';
import BlogPost from './components/BlogPost';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav style={{ 
          padding: '20px', 
          backgroundColor: '#282c34', 
          color: 'white',
          marginBottom: '20px'
        }}>
          <Link to="/" style={{ color: 'white', marginRight: '20px', textDecoration: 'none' }}>
            Home
          </Link>
          <Link to="/profile" style={{ color: 'white', marginRight: '20px', textDecoration: 'none' }}>
            Profile
          </Link>
          <Link to="/blog/1" style={{ color: 'white', textDecoration: 'none' }}>
            Blog
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* Protected Route */}
          <Route 
            path="/profile" 
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          >
            {/* Nested Routes */}
            <Route path="details" element={<ProfileDetails />} />
            <Route path="settings" element={<ProfileSettings />} />
          </Route>

          {/* Dynamic Route */}
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;