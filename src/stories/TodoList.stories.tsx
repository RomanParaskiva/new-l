import { ComponentStory, ComponentMeta } from '@storybook/react'
import '../../src/index.css'

import { TodoList } from '../components/TodoList/TodoList'

export default {
    title: 'Example/TodoList',
    component: TodoList,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof TodoList>


const Template: ComponentStory<typeof TodoList> = (args) => (
    <div className='flex justify-center items-center p-5 w-[500px]'>
        <TodoList {...args} />
    </div>
)

export const NormalTodoList = Template.bind({})
