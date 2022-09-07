import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { LoginForm } from "../components/LoginForm/LoginForm";

export default {
  title: "LoginForm",
  component: LoginForm,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = () => <LoginForm />;

export const NormalLoginForm = Template.bind({});
