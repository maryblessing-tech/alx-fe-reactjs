import { useState } from 'react';
import useRecipeStore from './recipeStore';  // Changed from '../recipeStore'

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (title.trim() && description.trim()) {
      addRecipe({ 
        id: Date.now(), 
        title: title.trim(), 
        description: description.trim() 
      });
      setTitle('');
      setDescription('');
    }
  };

  return (
    <div style={{
      padding: '20px',
      maxWidth: '600px',
      margin: '0 auto'
    }}>
      <h2 style={{
        color: '#2c3e50',
        marginBottom: '20px',
        textAlign: 'center'
      }}>
        Add New Recipe
      </h2>
      <form 
        onSubmit={handleSubmit}
        style={{
          backgroundColor: '#ffffff',
          padding: '30px',
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}
      >
        <div style={{ marginBottom: '20px' }}>
          <label style={{
            display: 'block',
            marginBottom: '8px',
            color: '#34495e',
            fontWeight: 'bold'
          }}>
            Recipe Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter recipe title"
            required
            style={{
              width: '100%',
              padding: '12px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              fontSize: '1rem',
              boxSizing: 'border-box'
            }}
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label style={{
            display: 'block',
            marginBottom: '8px',
            color: '#34495e',
            fontWeight: 'bold'
          }}>
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter recipe description"
            required
            rows="5"
            style={{
              width: '100%',
              padding: '12px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              fontSize: '1rem',
              resize: 'vertical',
              boxSizing: 'border-box'
            }}
          />
        </div>
        <button 
          type="submit"
          style={{
            width: '100%',
            padding: '12px',
            backgroundColor: '#3498db',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            fontSize: '1rem',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#2980b9'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#3498db'}
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;