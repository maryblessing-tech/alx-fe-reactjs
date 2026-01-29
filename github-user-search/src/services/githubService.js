import axios from "axios";

export const fetchUserData = async (username, location, minRepos) => {
  // Build the query string
  let query = username || "";
  if (location) query += `+location:${location}`;
  if (minRepos) query += `+repos:>=${minRepos}`;

  // Use the exact advanced search endpoint
  const response = await axios.get(`https://api.github.com/search/users?q=${query}`);
  return response.data; // contains "items" array
};
