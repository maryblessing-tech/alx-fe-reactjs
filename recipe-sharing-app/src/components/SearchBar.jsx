import { useEffect } from 'react';
import useRecipeStore from '../recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);
  const searchTerm = useRecipeStore((state) => state.searchTerm);

  useEffect(() => {
    filterRecipes();
  }, [searchTerm, filterRecipes]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div style={{
      padding: '20px',
      maxWidth: '600px',
      margin: '0 auto'
    }}>
      <div style={{
        position: 'relative'
      }}>
        <input
          type="text"
          placeholder="Search recipes by title or ingredients..."
          value={searchTerm}
          onChange={handleSearchChange}
          style={{
            width: '100%',
            padding: '15px 45px 15px 15px',
            fontSize: '1rem',
            border: '2px solid #3498db',
            borderRadius: '8px',
            outline: 'none',
            boxSizing: 'border-box',
            transition: 'border-color 0.3s'
          }}
          onFocus={(e) => e.target.style.borderColor = '#2980b9'}
          onBlur={(e) => e.target.style.borderColor = '#3498db'}
        />
        <span style={{
          position: 'absolute',
          right: '15px',
          top: '50%',
          transform: 'translateY(-50%)',
          color: '#7f8c8d',
          fontSize: '1.2rem'
        }}>
          🔍
        </span>
      </div>
      {searchTerm && (
        <p style={{
          marginTop: '10px',
          color: '#7f8c8d',
          fontSize: '0.9rem',
          textAlign: 'center'
        }}>
          Searching for: "<strong>{searchTerm}</strong>"
        </p>
      )}
    </div>
  );
};

export default SearchBar;