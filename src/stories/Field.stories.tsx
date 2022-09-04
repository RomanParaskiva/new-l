import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Field } from "../components/Field/Field";

export default {
  title: "Example/Field",
  component: Field,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Field>;

const Template: ComponentStory<typeof Field> = () => <Field />;

export const NormalField = Template.bind({});