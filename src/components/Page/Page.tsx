import React from 'react'

import { Header } from '../Header/Header'
import Field from '../Field/Field'
import './page.css'


export const Page: React.FC = () => {

  return (
    <article>
      <Header />

      <section>
        <Field />
      </section>
    </article>
  )
}
