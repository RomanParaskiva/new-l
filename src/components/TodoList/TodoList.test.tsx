import '@testing-library/jest-dom/extend-expect';
import { act, render, screen } from '@testing-library/react'
import { TodoList } from './TodoList'
import axios from 'axios'

describe('render TodoList', () => {

    test('check todo items not render before request', () => {
        render(<TodoList />)

        expect(screen.queryByTestId('todoItem')).not.toBeInTheDocument()
    })


    test('check fetch on mount', async () => {

        const getSpy = jest.spyOn(axios, 'get');

        render(<TodoList />)

        expect(getSpy).toBeCalled()

        

    })

    test('check render title', () => {

        render(<TodoList />)

        expect(screen.getByText('TodoList')).toBeInTheDocument()
    })


})