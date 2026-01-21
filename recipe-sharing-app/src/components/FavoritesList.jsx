import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations);
  const generateRecommendations = useRecipeStore((state) => state.generateRecommendations);
  
  useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]);

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
        ⭐ Recommended for You
      </h2>
      {recommendations.length === 0 ? (
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
            Add some favorites to get personalized recommendations!
          </p>
        </div>
      ) : (
        <div style={{
          display: 'grid',
          gap: '20px'
        }}>
          {recommendations.map((recipe) => (
            <div
              key={recipe.id}
              style={{
                backgroundColor: '#ffffff',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                border: '2px solid #f39c12'
              }}
            >
              <h3 style={{
                color: '#f39c12',
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
                  backgroundColor: '#f39c12',
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

export default RecommendationsList;