import { ComponentStory, ComponentMeta } from "@storybook/react";
import { FieldItem } from "../components/FieldItem/FieldItem";
import '../index.css';

export default {
  title: "FieldItem",
  component: FieldItem,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof FieldItem>;

const Template: ComponentStory<typeof FieldItem> = (args) => <FieldItem {...args}/>;

export const NormalFieldItem = Template.bind({});

NormalFieldItem.args = {
  handleClick: () => {},
  itemValue: 0
}

export const ClickedFieldItem = Template.bind({});

ClickedFieldItem.args = {
  handleClick: () => {},
  itemValue: 1
}