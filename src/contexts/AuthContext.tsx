import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  scope_code?: string | null;
  is_active?: boolean;
  created_at?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (token: string) => Promise<void>;
  logout: () => void;
  checkAuth: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

const API_BASE_URL =
  (import.meta as any).env?.VITE_RDM_API_BASE || "http://localhost:8080";

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const isAuthenticated = !!user;

  const getAuthToken = () => {
    return localStorage.getItem("auth_token");
  };

  const setAuthToken = (token: string) => {
    localStorage.setItem("auth_token", token);
  };

  const removeAuthToken = () => {
    localStorage.removeItem("auth_token");
  };

  const checkAuth = async () => {
    const token = getAuthToken();
    if (!token) {
      setIsLoading(false);
      return;
    }

    try {
      // For InvenioRDM, we'll use session-based authentication
      // This is a simplified implementation - in production you'd integrate with OAuth/OIDC
      const response = await fetch(`${API_BASE_URL}/api/user`, {
        credentials: "include", // Include cookies for session auth
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const responseData = await response.json();
        // Handle both direct user response and wrapped response
        const userData = responseData.user || responseData;
        setUser(userData);
      } else {
        // Session is invalid, remove any stored token
        removeAuthToken();
        setUser(null);
      }
    } catch (error) {
      console.error("Auth check failed:", error);
      removeAuthToken();
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (token: string) => {
    try {
      setAuthToken(token);
      await checkAuth();
    } catch (error) {
      console.error("Login failed:", error);
      removeAuthToken();
      throw error;
    }
  };

  const logout = () => {
    removeAuthToken();
    setUser(null);
  };

  useEffect(() => {
    checkAuth();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const value: AuthContextType = {
    user,
    isAuthenticated,
    isLoading,
    login,
    logout,
    checkAuth,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
