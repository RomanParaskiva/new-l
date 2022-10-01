import React from "react";
import { useAuth } from "../../hooks/auth.hook";

export const Header = () => {
  const { user, authed, logout } = useAuth();
  return (
    <header>
      <div className="wrapper">
        <div>
          <h1>Game of Life</h1>
        </div>

        {authed && (
          <div className="flex gap-2 items-center">
            <span className="font-semibold">Hi, {user}!</span>
            <button
              className="p-1 border border-green-500 text-green-500 uppercase rounded-lg text-sm"
              onClick={logout}
            >
              Log out
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
