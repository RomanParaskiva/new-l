import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Page } from "../components/Page/Page";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { GridProvider } from "../hooks/grid.hook";

export default {
  title: "Example/Page",
  component: Page,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => (
  <Router>
    <Provider store={store}>
      <GridProvider>
        <Page {...args} />
      </GridProvider>
    </Provider>
  </Router>
);

export const NormalPage = Template.bind({});
