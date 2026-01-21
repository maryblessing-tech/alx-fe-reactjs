import { useParams, useNavigate } from 'react-router-dom';
import useRecipeStore from '../recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === parseInt(id))
  );

  if (!recipe) {
    return (
      <div style={{
        padding: '40px',
        textAlign: 'center'
      }}>
        <h2 style={{ color: '#e74c3c' }}>Recipe Not Found</h2>
        <button
          onClick={() => navigate('/')}
          style={{
            padding: '10px 20px',
            backgroundColor: '#3498db',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            marginTop: '20px'
          }}
        >
          Back to Recipes
        </button>
      </div>
    );
  }

  return (
    <div style={{
      padding: '40px',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      <button
        onClick={() => navigate('/')}
        style={{
          padding: '8px 16px',
          backgroundColor: '#95a5a6',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          marginBottom: '20px'
        }}
      >
        ← Back to Recipes
      </button>

      <div style={{
        backgroundColor: '#ffffff',
        padding: '30px',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        marginBottom: '30px'
      }}>
        <h1 style={{
          color: '#2c3e50',
          marginTop: '0',
          marginBottom: '20px'
        }}>
          {recipe.title}
        </h1>
        <p style={{
          color: '#555',
          fontSize: '1.1rem',
          lineHeight: '1.8',
          marginBottom: '30px'
        }}>
          {recipe.description}
        </p>

        <div style={{
          display: 'flex',
          gap: '10px',
          justifyContent: 'flex-end'
        }}>
          <DeleteRecipeButton recipeId={recipe.id} />
        </div>
      </div>

      <EditRecipeForm recipe={recipe} />
    </div>
  );
};

export default RecipeDetails;