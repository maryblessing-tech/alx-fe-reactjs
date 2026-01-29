import { useState } from 'react';
import { searchUsers } from '../services/githubService';

const Search = () => {
  const [query, setQuery] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const results = await searchUsers(query, location, minRepos);
      setUsers(results.items || []);
    } catch (error) {
      console.error('Search failed:', error);
    }
    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <form onSubmit={handleSearch} className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <div className="grid md:grid-cols-3 gap-6">
          <input
            type="text"
            placeholder="Username"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="p-3 border rounded-lg"
            required
          />
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="p-3 border rounded-lg"
          />
          <div className="flex gap-2">
            <input
              type="number"
              placeholder="Min Repos"
              value={minRepos}
              onChange={(e) => setMinRepos(e.target.value)}
              className="p-3 border rounded-lg flex-1"
              min="0"
            />
            <button 
              type="submit" 
              disabled={loading} 
              className="bg-blue-600 text-white p-3 rounded-lg px-6 whitespace-nowrap"
            >
              {loading ? 'Searching...' : 'Search'}
            </button>
          </div>
        </div>
      </form>

      {users.length > 0 && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((user) => (
            <div key={user.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
              <img 
                src={user.avatar_url} 
                alt={user.login} 
                className="w-20 h-20 rounded-full mx-auto mb-4 shadow-md" 
              />
              <h3 className="font-bold text-lg text-center mb-2">{user.login}</h3>
              <p className="text-gray-600 text-center mb-4">{user.public_repos} repos</p>
              {user.location && (
                <p className="text-sm text-gray-500 text-center mb-4">📍 {user.location}</p>
              )}
              <a 
                href={user.html_url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block bg-blue-600 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors mx-auto w-fit"
              >
                View Profile
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;