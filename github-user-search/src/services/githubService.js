const API_URL = import.meta.env.VITE_GITHUB_API_URL || 'https://api.github.com';

export const searchUsers = async (query, location = '', minRepos = '') => {
  let searchQuery = query ? `${query}` : '';
  
  if (location) searchQuery += ` location:${location}`;
  if (minRepos) searchQuery += ` repos:>${minRepos}`;
  
  const response = await fetch(
    `${API_URL}/search/users?q=${encodeURIComponent(searchQuery.trim())}&per_page=30`
  );
  
  if (!response.ok) {
    throw new Error(`API Error: ${response.status}`);
  }
  
  return response.json();
};