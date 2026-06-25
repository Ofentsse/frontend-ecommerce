import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(null);

  useEffect(() => {
    // Check for existing session
    const storedToken = localStorage.getItem('authToken') || sessionStorage.getItem('authToken');
    const storedUser = localStorage.getItem('user') || sessionStorage.getItem('user');
    
    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email, password, rememberMe) => {
    // Temporary mock login - replace with actual API call later
    const mockUser = { id: 1, name: 'John Doe', email };
    const mockToken = 'mock-jwt-token';
    
    const storage = rememberMe ? localStorage : sessionStorage;
    storage.setItem('authToken', mockToken);
    storage.setItem('user', JSON.stringify(mockUser));
    
    setToken(mockToken);
    setUser(mockUser);
    return { user: mockUser, token: mockToken };
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    sessionStorage.removeItem('authToken');
    sessionStorage.removeItem('user');
    setToken(null);
    setUser(null);
  };

  const value = {
    user,
    token,
    loading,
    login,
    logout,
    isAuthenticated: !!user && !!token
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}