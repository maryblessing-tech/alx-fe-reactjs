import { useNavigate } from 'react-router-dom';
import useRecipeStore from './recipeStore';  // Changed from '../recipeStore'

const DeleteRecipeButton = ({ recipeId }) => {
  const navigate = useNavigate();
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this recipe?')) {
      deleteRecipe(recipeId);
      navigate('/');
    }
  };

  return (
    <button
      onClick={handleDelete}
      style={{
        padding: '10px 20px',
        backgroundColor: '#e74c3c',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '1rem',
        fontWeight: 'bold'
      }}
      onMouseOver={(e) => e.target.style.backgroundColor = '#c0392b'}
      onMouseOut={(e) => e.target.style.backgroundColor = '#e74c3c'}
    >
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;