import React from 'react'

import { Header } from '../Header/Header'
import { TodoList } from '../TodoList/TodoList'
import './page.css'


export const Page: React.FC = () => {

  return (
    <article>
      <Header />

      <section>
        <TodoList />
      </section>
    </article>
  )
}
