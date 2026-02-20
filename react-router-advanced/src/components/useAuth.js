import { useState } from "react";

export const useAuth = () => {
  const [isAuthenticated] = useState(true); 
  // change to false to test redirect

  return { isAuthenticated };
};