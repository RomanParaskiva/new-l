import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Page } from "../components/Page/Page";

export default {
  title: "Example/Page",
  component: Page,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => (
  <BrowserRouter>
    <Page {...args} />
  </BrowserRouter>
);

export const NormalPage = Template.bind({});
