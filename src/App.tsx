import React from "react";
import { Page } from "./components/Page/Page";
import { gridContext } from "./context/gridContext";
import { authContext } from "./context/authContext";
import { useGrid } from "./hooks/grid.hook";
import { useAuth } from "./hooks/auth.hook";

export const App = () => {
  const value = useGrid();
  const auth = useAuth();

  return (
    <authContext.Provider value={auth}>
      <gridContext.Provider value={{ ...value }}>
        <div className="App">
          <Page />
        </div>
      </gridContext.Provider>
    </authContext.Provider>
  );
};
