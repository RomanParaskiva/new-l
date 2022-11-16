import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux.hook";
import { logout } from "../../store/slices/authSlice";
import { RootState } from "../../store/store";

export const Header = () => {
  const { user, authed } = useAppSelector((state: RootState) => state.auth);
  const dispatch = useAppDispatch();

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
              data-testid="logout-btn"
              className="p-1 border border-green-500 text-green-500 uppercase rounded-lg text-sm"
              onClick={() => dispatch(logout())}
            >
              Log out
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
