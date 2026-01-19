import useRecipeStore from '../recipeStore';  // Change from '../store/recipeStore'

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

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
        My Recipes
      </h2>
      {recipes.length === 0 ? (
        <p style={{
          textAlign: 'center',
          color: '#7f8c8d',
          fontSize: '1.1rem',
          padding: '40px'
        }}>
          No recipes yet. Add your first recipe above!
        </p>
      ) : (
        <div style={{
          display: 'grid',
          gap: '20px'
        }}>
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              style={{
                backgroundColor: '#ffffff',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                border: '1px solid #e0e0e0'
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
                margin: '0'
              }}>
                {recipe.description}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecipeList;