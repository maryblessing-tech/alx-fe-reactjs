
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import recipesData from '../data.json';

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const recipeId = parseInt(id);
    const foundRecipe = recipesData.find((r) => r.id === recipeId);
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <p className="text-xl text-gray-600">Recipe not found...</p>
    </div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover" />
        
        <div className="p-8">
          <Link to="/" className="inline-block mb-4 text-blue-500 hover:text-blue-600 font-semibold">
            ← Back to Home
          </Link>
          
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{recipe.title}</h1>
          <p className="text-gray-600 mb-6 text-lg">{recipe.summary}</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Ingredients</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>200g Spaghetti</li>
                <li>100g Pancetta or Bacon</li>
                <li>2 Large Eggs</li>
                <li>50g Parmesan Cheese</li>
                <li>Black Pepper</li>
                <li>Salt</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Instructions</h2>
              <ol className="list-decimal list-inside space-y-3 text-gray-700">
                <li>Cook spaghetti according to package instructions</li>
                <li>Fry pancetta until crispy</li>
                <li>Beat eggs with parmesan cheese</li>
                <li>Combine hot pasta with pancetta</li>
                <li>Add egg mixture and toss quickly</li>
                <li>Season with black pepper and serve</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;
