import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Page } from "../components/Page/Page";
import { AuthProvider } from "../hooks/auth.hook";

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
    <AuthProvider>
      <Page {...args} />
    </AuthProvider>
  </Router>
);

export const NormalPage = Template.bind({});
