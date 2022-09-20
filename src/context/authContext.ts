import { createContext } from "react";

export interface AuthContextType {
  user: string;
  authed: boolean;
  login: (n: string) => void;
  logout: () => void;
}

export const authContext = createContext<AuthContextType>(null!);
