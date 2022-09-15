import { createContext } from "react";

export type authContext = {
  user: string;
  authed: boolean;
  login: (n: string) => void;
  logout: () => void;
};

const user = "";
const authed = false;
const login = (name: string) => {
  //do nothing
};

const logout = () => {
  // do nothing
};

export const authContext = createContext<authContext>({
  user,
  authed,
  login,
  logout,
});
