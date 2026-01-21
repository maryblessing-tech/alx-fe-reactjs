import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';

function App() {
  return (
    <Router>
      <div style={{
        minHeight: '100vh',
        backgroundColor: '#f5f5f5',
        paddingBottom: '40px'
      }}>
        <header style={{
          backgroundColor: '#2c3e50',
          color: 'white',
          padding: '30px 20px',
          textAlign: 'center',
          marginBottom: '40px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <h1 style={{
            margin: '0',
            fontSize: '2.5rem'
          }}>
            Recipe Sharing Application
          </h1>
          <p style={{
            margin: '10px 0 0 0',
            fontSize: '1.1rem',
            color: '#ecf0f1'
          }}>
            Share and discover amazing recipes
          </p>
        </header>

        <main>
          <Routes>
            <Route 
              path="/" 
              element={
                <>
                  <AddRecipeForm />
                  <div style={{ margin: '40px 0' }}></div>
                  <RecipeList />
                </>
              } 
            />
            <Route path="/recipe/:id" element={<RecipeDetails />} />
          </Routes>
        </main>

        <footer style={{
          textAlign: 'center',
          padding: '20px',
          color: '#7f8c8d',
          marginTop: '40px'
        }}>
          <p>© 2024 Recipe Sharing App. Built with React & Zustand.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;