import { useEffect, useState } from "react";

export const useAuth = () => {
  const [user, setUser] = useState("");
  const [authed, setAuthed] = useState(false);

  useEffect(() => {
    const name = window.localStorage.getItem("userName");
    if (name) {
      login(name);
      window.location.replace('/')
    }
  }, []);

  const login = (user: string) => {
    setAuthed(() => true);
    setUser(() => user);
    localStorage.setItem("userName", user);
  };

  const logout = () => {
    setAuthed(() => false);
    setUser(() => "");
    localStorage.removeItem("userName");
  };

  return {
    user,
    authed,
    login,
    logout,
  };
};
