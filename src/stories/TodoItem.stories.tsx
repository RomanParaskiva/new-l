import { ComponentStory, ComponentMeta } from "@storybook/react";
import { title } from "process";

import TodoItem from "../components/TodoItem/TodoItem";

export default {
    title: "Example/TodoItem",
    component: TodoItem,
    parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: "fullscreen",
    },
} as ComponentMeta<typeof TodoItem>;

const Template: ComponentStory<typeof TodoItem> = (args: any) => (
    <div className="flex justify-center items-center p-5 w-[500px]">
        <TodoItem {...args} />
    </div>
);

export const CompletedTodoItem = Template.bind({});

CompletedTodoItem.args = {
    completed: true,
    id: 1,
    userId: 1,
    title: "TEST",
    handler: () => {},
};

export const UnCompletedTodoItem = Template.bind({});

UnCompletedTodoItem.args = {
    completed: false,
    id: 1,
    userId: 1,
    title: "TEST",
    handler: () => {},
};
