import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Header } from "../components/Header/Header";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { GridProvider } from "../hooks/grid.hook";

export default {
  title: "Example/Header",
  component: Header,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = () => (
  <Router>
    <Provider store={store}>
      <GridProvider>
        <Header />
      </GridProvider>
    </Provider>
  </Router>
);

export const NormalHeader = Template;
