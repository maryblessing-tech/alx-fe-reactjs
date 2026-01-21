import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';  // Changed from '../recipeStore'

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const searchTerm = useRecipeStore((state) => state.searchTerm);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);

  useEffect(() => {
    filterRecipes();
  }, [recipes, filterRecipes]);

  const displayRecipes = searchTerm ? filteredRecipes : recipes;

  return (
    <div style={{
      padding: '20px',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      <h2 style={{
        color: '#2c3e50',
        marginBottom: '20px',
        textAlign: 'center'
      }}>
        {searchTerm ? `Search Results (${displayRecipes.length})` : 'My Recipes'}
      </h2>
      {displayRecipes.length === 0 ? (
        <div style={{
          textAlign: 'center',
          padding: '40px',
          backgroundColor: '#ffffff',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <p style={{
            color: '#7f8c8d',
            fontSize: '1.1rem',
            marginBottom: '10px'
          }}>
            {searchTerm 
              ? `No recipes found matching "${searchTerm}"`
              : 'No recipes yet. Add your first recipe above!'}
          </p>
          {searchTerm && (
            <p style={{
              color: '#95a5a6',
              fontSize: '0.9rem'
            }}>
              Try searching with different keywords
            </p>
          )}
        </div>
      ) : (
        <div style={{
          display: 'grid',
          gap: '20px'
        }}>
          {displayRecipes.map((recipe) => (
            <div
              key={recipe.id}
              style={{
                backgroundColor: '#ffffff',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                border: '1px solid #e0e0e0',
                transition: 'transform 0.2s, box-shadow 0.2s'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.15)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
              }}
            >
              <h3 style={{
                color: '#3498db',
                marginTop: '0',
                marginBottom: '10px'
              }}>
                {recipe.title}
              </h3>
              <p style={{
                color: '#555',
                lineHeight: '1.6',
                marginBottom: '15px'
              }}>
                {recipe.description.substring(0, 150)}
                {recipe.description.length > 150 ? '...' : ''}
              </p>
              <Link
                to={`/recipe/${recipe.id}`}
                style={{
                  display: 'inline-block',
                  padding: '8px 16px',
                  backgroundColor: '#3498db',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '4px',
                  fontSize: '0.9rem',
                  fontWeight: 'bold'
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#2980b9'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#3498db'}
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecipeList;