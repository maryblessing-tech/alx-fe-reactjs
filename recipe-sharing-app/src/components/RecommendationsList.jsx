import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const FavoritesList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const favorites = useRecipeStore((state) => state.favorites);
  
  const favoriteRecipes = favorites.map((id) =>
    recipes.find((recipe) => recipe.id === id)
  ).filter(Boolean);

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
        ❤️ My Favorites
      </h2>
      {favoriteRecipes.length === 0 ? (
        <div style={{
          textAlign: 'center',
          padding: '40px',
          backgroundColor: '#ffffff',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <p style={{
            color: '#7f8c8d',
            fontSize: '1.1rem'
          }}>
            No favorite recipes yet. Start adding some!
          </p>
        </div>
      ) : (
        <div style={{
          display: 'grid',
          gap: '20px'
        }}>
          {favoriteRecipes.map((recipe) => (
            <div
              key={recipe.id}
              style={{
                backgroundColor: '#ffffff',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                border: '2px solid #e74c3c'
              }}
            >
              <h3 style={{
                color: '#e74c3c',
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
                  backgroundColor: '#e74c3c',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '4px',
                  fontSize: '0.9rem',
                  fontWeight: 'bold'
                }}
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

export default FavoritesList;