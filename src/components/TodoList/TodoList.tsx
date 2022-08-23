import React, { Component } from 'react'
import axios from 'axios'
import TodoItem from '../TodoItem/TodoItem'

import { TodoType } from '../../../types'
import ErrorBoundary from '../../../../new-l/src/components/ErrorBoundary/ErrorBoundary'

interface IState {
    data: TodoType[],
    fetched: boolean
}

export class TodoList extends Component<any, IState> {

    constructor(props: any) {
        super(props)
        this.changeTodoStatus = this.changeTodoStatus.bind(this)
        this.state = {
            data: [],
            fetched: false
        }
    }

    async componentDidMount() {
        if (!this.state.fetched) {
            await this.fetchData()
        }

        window.addEventListener('click', ({ target }) => console.log(target))
    }

    shouldComponentUpdate(nextProps: any, nextState: IState) {

        if (!this.state.fetched || nextState.data !== this.state.data) {
            return true
        }
        return false 
    }

    async componentDidUpdate(nextProps: any, nextState: IState) {
        if (!nextState.fetched) {
            await this.fetchData()
        }
    }

    componentWillUnmount() {
        window.removeEventListener('click', ({ target }) => console.log(target))
    }

    changeTodoStatus({ target }: any) {

        this.setState((prev) => ({
            data: prev.data.map(todo => {
                if (todo.id === +target.id) {
                    todo.completed = target.checked
                }

                return todo
            })
        }))
    }

    async fetchData() {
        const { data }: IState = await axios.get('https://jsonplaceholder.typicode.com/todos/')

        data && this.setState((prev: any) => ({ data, fetched: true }))
    }

    render() {
        const { data } = this.state

        return (
            <ErrorBoundary>
                <div className='flex flex-col w-full'>
                    <div className='text-3xl text-gray-600 text-semibold'>TodoList</div>

                    <div className='flex flex-col gap-5'>
                        {data.length && data.slice(0, 10).map((el: any) => (
                            <TodoItem key={el.id} {...el} handler={this.changeTodoStatus} />
                        ))}
                    </div>
                </div>
            </ErrorBoundary>
        )
    }
}

