import React from 'react'
import { Page } from './components/Page/Page'
import { gridContext } from './context/gridContext'
import useGrid from './hooks/grid.hook'


const App = () => {
  const { grid, running, start, handleItemClick, clear, numRows, numCols, changeSpeed } = useGrid()

  return (
    <gridContext.Provider value={{ grid, running, start, handleItemClick, numRows, numCols, clear, changeSpeed }}>
      <div className="App">
        <Page />
      </div>
    </gridContext.Provider>
  )
}

export default App
