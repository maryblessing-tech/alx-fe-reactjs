import { useState } from 'react';
import { Link } from 'react-router-dom';

function AddRecipeForm() {
  const [formData, setFormData] = useState({
    title: '',
    ingredients: '',
    steps: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: e.target.value
    }));
  };

  const validate = () => {
    const newErrors = {};
    
    if (!formData.title.trim()) {
      newErrors.title = 'Recipe title is required';
    }
    
    if (!formData.ingredients.trim()) {
      newErrors.ingredients = 'Ingredients are required';
    } else {
      const ingredientsList = formData.ingredients.split('\n').filter(i => i.trim());
      if (ingredientsList.length < 2) {
        newErrors.ingredients = 'Please add at least 2 ingredients';
      }
    }
    
    if (!formData.steps.trim()) {
      newErrors.steps = 'Preparation steps are required';
    }
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const validationErrors = validate();
    
    if (Object.keys(validationErrors).length === 0) {
      console.log('Form submitted:', formData);
      alert('Recipe added successfully!');
      setFormData({ title: '', ingredients: '', steps: '' });
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 md:px-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6 md:p-8">
        <Link to="/" className="inline-block mb-6 text-blue-500 hover:text-blue-600 font-semibold">
          ← Back to Home
        </Link>
        
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Add New Recipe</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">
              Recipe Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter recipe title"
            />
            {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
          </div>
          
          <div>
            <label htmlFor="ingredients" className="block text-gray-700 font-semibold mb-2">
              Ingredients (one per line)
            </label>
            <textarea
              id="ingredients"
              name="ingredients"
              value={formData.ingredients}
              onChange={handleChange}
              rows="6"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="200g flour&#10;2 eggs&#10;100ml milk"
            />
            {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}
          </div>
          
          <div>
            <label htmlFor="steps" className="block text-gray-700 font-semibold mb-2">
              Preparation Steps
            </label>
            <textarea
              id="steps"
              name="steps"
              value={formData.steps}
              onChange={handleChange}
              rows="8"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="1. Preheat oven to 180°C&#10;2. Mix ingredients..."
            />
            {errors.steps && <p className="text-red-500 text-sm mt-1">{errors.steps}</p>}
          </div>
          
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition duration-200 transform hover:scale-105"
          >
            Submit Recipe
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddRecipeForm;