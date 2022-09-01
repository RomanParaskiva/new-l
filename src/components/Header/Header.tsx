import React, { useContext } from 'react'
import classNames from 'classnames'
import { gridContext } from '../../context/gridContext'

import './header.css'


export const Header = () => {
  const { start, clear, running, changeSpeed, setGridSize } = useContext(gridContext)

  const btnStyle = classNames('p-2 rounded-xl text-sm outline-none uppercase text-gray-600 hover:scale-105 font-semibold', `${running ? 'bg-red-300' : 'bg-green-300'}`)

  const defaultBtnStyle = `p-2 text-sm rounded-xl uppercase outline-none text-gray-600 hover:scale-105 font-semibold bg-blue-300`

  const defaultSizeBtnStyle = `p-2 text-sm rounded-xl uppercase outline-none text-gray-600 hover:scale-105 font-semibold bg-purple-300`
  return (
    <header>
      <div className="wrapper">
        <div>
          <h1>Game of Life</h1>
        </div>

        <div className='mx-auto flex flex-col gap-3 bg-slate-100 rounded-2xl p-3'>

          <div>
            <button
              onClick={start}
              className={btnStyle}>
              {running ? 'Стоп' : 'Старт'}
            </button>

            <button
              onClick={clear}
              className={defaultBtnStyle}
            >
              Сброс
            </button>

            <button
              onClick={() => changeSpeed(1000)}
              className={defaultBtnStyle}
            >
              обычная скорость
            </button>

            <button
              onClick={() => changeSpeed(500)}
              className={defaultBtnStyle}
            >
              быстрее
            </button>

            <button
              onClick={() => changeSpeed(200)}
              className={defaultBtnStyle}
            >
              еще быстрее
            </button>
          </div>

          <div>
            <button
              disabled={running}
              className={classNames(defaultSizeBtnStyle, 'disabled:bg-gray-400 disabled:text-gray-600')}
              onClick={() => setGridSize(50, 50)}
            >
              50/50
            </button>

            <button
              disabled={running}
              className={classNames(defaultSizeBtnStyle, 'disabled:bg-gray-400 disabled:text-gray-600')}
              onClick={() => setGridSize(30, 30)}
            >
              30/30
            </button>

            <button
              disabled={running}
              className={classNames(defaultSizeBtnStyle, 'disabled:bg-gray-400 disabled:text-gray-600')}
              onClick={() => setGridSize(100, 100)}
            >
              100/100
            </button>
          </div>

        </div>
      </div>
    </header>
  )
}
