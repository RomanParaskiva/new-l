import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
} from "react";
import { useNavigate } from "react-router-dom";

export interface AuthContextType {
  user: string;
  authed: boolean;
  login: (n: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>(null!);

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState("");
  const [authed, setAuthed] = useState(false);
  const navigate = useNavigate();

  const login = useCallback(
    (user: string) => {
      setAuthed(() => true);
      setUser(() => user);
      localStorage.setItem("userName", user);
      navigate("/");
    },
    [navigate]
  );

  const logout = useCallback(() => {
    setAuthed(() => false);
    setUser(() => "");
    localStorage.removeItem("userName");
    navigate("/login");
  }, [navigate]);

  const value = useMemo(
    () => ({
      user,
      authed,
      login,
      logout,
    }),
    [user, authed, login, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
