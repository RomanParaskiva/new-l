import React from "react";
import { Page } from "./components/Page/Page";
import { gridContext } from "./context/gridContext";
import { useGrid } from "./hooks/grid.hook";

export const App = () => {
  const value = useGrid();

  return (
    <gridContext.Provider value={{ ...value }}>
      <div className="App">
        <Page />
      </div>
    </gridContext.Provider>
  );
};
