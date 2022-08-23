import React, { Component } from 'react'
import classNames from 'classnames'

import { TodoType } from '../../../types'

class TodoItem extends Component<TodoType> {

  render() {

    const { id, title, completed, handler } = this.props

    const toDoClass = classNames(`flex flex-col border-2 rounded-lg px-3 py-2`, completed ? 'border-green-400' : 'border-gray-200')

    const color = completed ? 'bg-green-300' : 'bg-gray-300'
    return (
      <div data-testid="todoItem" className={toDoClass}>
        <div className='flex gap-2 mb-3'>

          <div className={classNames(`flex justify-center items-center rounded-full text-semibold text-xl
           text-white w-[50px] h-[50px]`, color)}>
            <span>{id}</span>
          </div>

          <p className='text-semibold text-gray-600'>{title}</p>
        </div>

        <div>
          <label data-testid="label" className={classNames(`flex w-[300px] justify-between px-3 rounded-lg cursor-pointer`, color)}>

            <input data-testid="checkbox" id={`${this.props.id}`} onChange={handler} checked={completed} type='checkbox' />

            {completed ? (<p>Отменить</p>) : (<p>Выполнить</p>)}

          </label>
        </div>
      </div>
    )
  }
}

export default TodoItem