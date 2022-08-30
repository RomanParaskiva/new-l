import React, { useContext } from 'react'
import classNames from 'classnames'
import { gridContext } from '../../context/gridContext'

import './header.css'


export const Header = () => {
  const { start, clear, running, changeSpeed } = useContext(gridContext)
  
  const btnStyle = classNames('p-2 rounded-xl outline-none uppercase text-gray-600 hover:scale-105 font-semibold', `${running ? 'bg-green-200' : 'bg-gray-200'}`)
  return (
    <header>
      <div className="wrapper">
        <div>
          <h1>Game of Life</h1>
        </div>

        <div className='mx-auto'>

          <button
          onClick={start}
            className={btnStyle}>
            {running ? 'Стоп' : 'Старт'}
          </button>

          <button
            onClick={clear}
            className='p-2 rounded-xl uppercase outline-none text-gray-600 hover:scale-105 font-semibold bg-gray-200'>
            Сброс
          </button>

          <button
          onClick={() => changeSpeed(1000)}
             className='p-2 rounded-xl uppercase outline-none text-gray-600 hover:scale-105 font-semibold bg-gray-200'
          >
            обычная скорость
          </button>

          <button
          onClick={() => changeSpeed(500)}
             className='p-2 rounded-xl uppercase outline-none text-gray-600 hover:scale-105 font-semibold bg-gray-200'
          >
            быстрее
          </button>

          <button
          onClick={() => changeSpeed(200)}
             className='p-2 rounded-xl uppercase outline-none text-gray-600 hover:scale-105 font-semibold bg-gray-200'
          >
            еще быстрее
          </button>

        </div>
      </div>
    </header>
  )
}
