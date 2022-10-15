import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { LoginForm } from "../components/LoginForm/LoginForm";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../store/store";

export default {
  title: "LoginForm",
  component: LoginForm,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = () => (
  <Router>
    <Provider store={store}>
      <LoginForm />
    </Provider>
  </Router>
);

export const NormalLoginForm = Template;
