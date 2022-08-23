import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TodoItem from './TodoItem'

const itemProps = { id: 1, userId: 1, title: 'test', completed: false, handler: () => { } }

describe('TodoItem tests', () => {

    test('check render Todoitem', () => {
        render(<TodoItem {...itemProps} />)
        expect(screen.getByTestId('todoItem')).toBeInTheDocument()
    })

    test('check input click', async () => {
        render(<TodoItem {...itemProps} />)
        await userEvent.click(screen.getByTestId('checkbox'))

        expect(screen.getByTestId('checkbox')).not.toBeChecked()
    })
})